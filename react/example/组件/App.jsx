import { Component } from "react";
import Weather from "./State";
import Person from "./Props";
import Demo from "./Refs";
import Controll from './Controll'
import Pure from './Pure'
import Error, {ErrorBoundary} from "./ErrorBoundary";
import Context from './Context'

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
        <hr />
        <h1>Refs</h1>
        <Demo></Demo>
        <hr />
        <h1>受控组件和非受控组件</h1>
        <Controll></Controll>
        <hr />
        <h1>组件优化</h1>
        <Pure></Pure>
        <hr />
        <h1>错误边界</h1>
        <ErrorBoundary>
          <Error></Error>
        </ErrorBoundary>
        <hr />
        <h1>Context</h1>
        <Context></Context>
      </div>
    )
  }
};
