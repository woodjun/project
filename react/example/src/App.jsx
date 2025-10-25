import { Component } from "react";
import Weather from "./State";
import Person from "./Props";
import Person2 from "./Props/func";
import Demo from "./Refs";

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
        <h1>State</h1>
        <Weather></Weather>
        <hr />
        <h1>Props</h1>
        {/* 属性单个传递 */}
        <Person name="tom" age={18} sex="男"></Person>
        {/* 运用扩展运算符多个属性传递 */}
        {/* <Person {...this.state.p}></Person> */}
        <Person2 name="jerry" sex="女"></Person2>
        <hr />
        <h1>Refs</h1>
        <Demo></Demo>
      </div>
    )
  }
};
