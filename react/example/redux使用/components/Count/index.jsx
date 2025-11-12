import { Component } from "react";

export default class Count extends Component {
    increment = () => {
        const {value} = this.selectNum
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
                <h1>当前求和为：{this.props.count}</h1>
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