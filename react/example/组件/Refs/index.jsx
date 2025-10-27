import { Component, createRef } from "react";

export default class Demo extends Component {
    // 利用createRef创建ref容器
    myRef = createRef()

    showData = () => {
        console.log(this.input1)
        alert(this.input1.value)
    }

    showData2 = (event) => {
        console.log(this.myRef)
        // 如果是直接在元素上绑定事件并且获取元素上的属性时
        // 可以直接从event.target获取元素
        console.log(event.target.value)
        alert(this.myRef.current.value)
    }
    render() {
        return (
            <div>
                {/* 使用回调函数获取input元素 */}
                <input ref={(c) => this.input1 = c} type="text" placeholder="点击按钮提示数据" />&nbsp;
                <button onClick={this.showData}>点击提示左侧数据</button>&nbsp;
                <input ref={this.myRef} onBlur={this.showData2} type="text" placeholder="失去焦点提示数据" />
            </div>
        )
    }
}