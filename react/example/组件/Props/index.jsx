import { Component, Fragment } from "react";
import PropTypes from 'prop-types'
import './index.css'

class A extends Component {
  state = {
    name: 'tom'
  }
  render() {
    const {name} = this.state
    return (
      <div className="a">
          <h3>我是A组件</h3>
          {this.props.render(name)}
      </div>
    )
  }
}

class B extends Component {
  render() {
    const {children, name} = this.props
    return (
      <div className="b">
        <h3>我是B组件，children值为：{children}
          {name ? `，接收到A组件参数：${name}` : ''}
        </h3>
      </div>
      )
  }
}


export default class Person extends Component {
  // 传入参数类型限制
  static propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    sex: PropTypes.string
  }
  // 给传入参数默认值
  static defaultProps = {
    name: 'li',
    age: 15 
  }
  render() {
    const {name, age, sex} = this.props
    return (
        <Fragment>
          {/* Fragment标签和空标签作用一样，不过Fragment标签可以添加属性 */}
            <ul>
                <li>姓名：{name}</li>
                <li>性别：{sex}</li>
                <li>年龄：{age}</li>
            </ul>
            <h2>children props</h2>
            <B>这是内容</B>
            <h2>render props</h2>
            <div className="parent">
                <A render={(name) => (<B name={name}></B>)}></A>
            </div>
        </Fragment>
    )
  }
}