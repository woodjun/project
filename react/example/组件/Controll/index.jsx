import { Component, createRef } from "react";

export default class Login extends Component {
    // 非受控组件获取属性都是从ref当中去拿
    passwordInput = createRef()
    // 受控组件里面的值都是保存在state当中
    state = {
        username: ''
    }

    saveUsername = (e) => {
        this.setState({username: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const password = this.passwordInput.current.value
        const username = this.state.username
        alert(`输入的用户名：${username}，密码：${password}`)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>用户名：</label>
                    <input onChange={this.saveUsername} type="text" placeholder="受控输入框" />
                </div>
                <div>
                    <label>密码：</label>
                    <input ref={this.passwordInput} type="password" placeholder="非受控输入框" />
                </div>
                <button type="sumbit">登录</button>
            </form>
        )
    }
}