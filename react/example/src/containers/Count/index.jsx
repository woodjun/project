import {connect} from 'react-redux'
import { 
    createDecrementAction, 
    createIncrementAction, 
    createIncrementAsyncAction 
} from '../../redux/actions/count'
import { Component } from 'react'

class Count extends Component {
    increment = () => {
        const {value} = this.selectNum
        console.log(this.props)
        this.props.increment(value)
    }

    decrement = () => {
        const {value} = this.selectNum
        this.props.decrement(value)
    }

    oddIncrement = () => {
        const {value} = this.selectNum
        const {count} = this.props
        if (count % 2 !== 0) {
            this.props.increment(value)
        }
    }

    incrementAsync = () => {
        const {value} = this.selectNum
        this.props.incrementAsync(value, 500)
    }

    render() {
        return (
            <div>
                <h1>当前求和为：{this.props.count}，下方人数为{this.props.persons.length}</h1>
                <select ref={c => this.selectNum = c} style={{width: '100px'}}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                </select>&nbsp;
                <button onClick={this.increment}>加</button>&nbsp;
                <button onClick={this.decrement}>减</button>&nbsp;
                <button onClick={this.oddIncrement}>当前求和为奇数再加</button>&nbsp;
                <button onClick={this.incrementAsync}>异步加</button>
            </div>
        )
    }
}

/**
 * connect(mapStateToProps, mapDispatchToProps)(普通组件)
 * connect可以让普通组件套上容器组件，容器组件操控redux的API,
 * 并且通过props来获取state和操作方法
 * mapStateToProps将state映射到props上
 * mapDispatchToProps将dispatch映射到props
 */
export default connect(
    (state) => ({
        count: state.count,
        persons: state.persons
    }),
    // 函数写法
    // (dispatch) => {
    //     return {
    //         increment: (data) => dispatch(createIncrementAction(data * 1)),
    //         decrement: (data) => dispatch(createDecrementAction(data)),
    //         incrementAsync: (data, time) => dispatch(createIncrementAsyncAction(data * 1, time))
    //     }
    // },
    // 对象写法，{key: action}
    {
        increment: createIncrementAction,
        decrement: createDecrementAction,
        incrementAsync: createIncrementAsyncAction
    }
)(Count)