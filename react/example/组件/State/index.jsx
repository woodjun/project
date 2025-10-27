import { Component } from "react";

export default class Weather extends Component {
    // 类组件一般不使用构造器
    constructor(props) {
        super(props)
        // state可以在构造器中复制，可以在实例属性中复制
        // this.state = {isHot: false, isStudy: false}
        // 使用具名实例方法必须改变this指向
        this.changeWeather = this.changeWeather.bind(this)
    }
    
    state = {isStudy: true, isHot: true}
    // 使用具名实例方法内部的this是指向undefined
    // 需要在构造器中改变this的指向
    changeWeather() {
        console.log(this.state) // undefined
        // 必须调用setState方法才能更新状态
        // setState方法采用的是合并策略
        this.setState({isHot: !this.state.isHot})
    }
    // 使用箭头函数内部this指向实例对象，不用重新绑定this
    changeStudy = () => {
        this.setState({isStudy : !this.state.isStudy})
    }

    render() {
        const {isHot, isStudy} = this.state
        return (
            <div>
                <h1 onClick={this.changeWeather}>今天天气很{isHot ? '炎热' : '凉爽'}</h1>
                <h1 onClick={this.changeStudy}>今天想要{isStudy ? '学习' : '躺平'}</h1>
            </div>
        )
    }
}