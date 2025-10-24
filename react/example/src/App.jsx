import { Component } from "react";
import Weather from "./State";
import Person from "./Props";
import Person2 from "./Props/func";

export default class App extends Component {
  state = {
    p: {
      name: 'jerry',
      age: '19',
      sex: '女'
    }
  }
  render() {
    return (
      <div>
        <Weather></Weather>
        <hr />
        {/* 属性单个传递 */}
        <Person name="tom" age={18} sex="男"></Person>
        {/* 运用扩展运算符多个属性传递 */}
        {/* <Person {...this.state.p}></Person> */}
        <Person2 name="jerry" sex="女"></Person2>
      </div>
    )
  }
};
