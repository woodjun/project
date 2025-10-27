import { Component } from "react";
import { globalRoot } from "..";

export default class Life extends Component {
    constructor(props) {
        super(props)
        console.log('Life----constructor')
        this.state = {
            count: 0
        }
    }

    add = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    death = () => {
        globalRoot.unmount()
    }

    force = () => {
        this.forceUpdate()
    }

    static getDerivedStateFromProps(props, state) {
        console.log('Life----getDeriveStateFromProps', props, state)
        return state
    }

    shouldComponentUpdate() {
        console.log('Life----shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate() {
        console.log('Life----getSnapshotBeforeUpdate')
        return null
    }

    componentDidMount() {
        console.log('Life----componentDidMount')
    }

    componentDidUpdate() {
        console.log('Life----componentDidUpdate')
    }
    
    componentWillUnmount() {
        console.log('Life----componentWillUnmount')
    }

    render() {
        console.log('Life----render')
        return (
            <div>
                <h1>当前求和：{this.state.count}</h1>
                <button onClick={this.add}>+1</button>&nbsp;
                <button onClick={this.death}>卸载组件</button>&nbsp;
                <button onClick={this.force}>强制更新</button>
            </div>
        )
    }
}