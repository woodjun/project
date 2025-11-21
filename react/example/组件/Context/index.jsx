import { Component, createContext } from 'react'

const MyContext = createContext()
const {Provider, Consumer} = MyContext
export default class A extends Component {
  state = {
    name: 'tom',
    age: 18
  }
  render() {
    const {name, age} = this.state
    return (
      <Provider value={{name, age}}>
        <div>我是A组件</div>
        <B></B>
      </Provider>
    )
  }
}

class B extends Component {
  // 这种方式只能在类组件中使用
  static contextType = MyContext
  render() {
    const {name, age} = this.context
    return (
      <div>
        <div>我是B组件，接收A组件传的值：{name}---{age}</div>
        <C></C>
      </div>
    )
  }
}

class C extends Component {
  render() {
    return (
      <div>
        <div>我是C组件</div>
        <Consumer>
          {obj => (<span>接收A组件传的值：{obj.name}---{obj.age}</span>)}
        </Consumer>
      </div>
    )
  }
}

