import { Component, PureComponent } from 'react'

export default class Parent extends PureComponent {
  state = {
    carname: '奔驰'
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextState.carname !== this.state.carname
  // }

  changeCar = () => {
    this.setState({carname: '迈巴赫'})
  }
  render() {
    console.log('Parent---render')
    return (
      <div>
        <h3>我是Parent组件</h3>
        <button onClick={this.changeCar}>换车</button>
        {/**
         * 按理来说，如果子组件没有应用父组件的参数，
         * 只需要在挂载阶段执行一次render就可以了
         * 不过由于shouldComponentUpdate始终返回ture
         * 父组件render就会带动子组件render
         * 这个时候就需要改写shouldComponentUpdate或者使用PureComponent
         */}
        <Children carname={this.state.carname}></Children>
      </div>
    )
  }
}


class Children extends Component {
  render() {
    console.log('Children---render')
    return (
      <div>
        <h3>我是Children组件</h3>
        <div>我接收到的车是：{this.props.carname}</div>
      </div>
    )
  }
}

