import { Component } from "react";
import UseState from "./UseState";
import UseRef from "./UseRef"
import UseEffect from "./UseEffect"

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>useState</h1>
        <UseState />
        <hr />
        <h1>useRef</h1>
        <UseRef />
        <hr />
        <h1>useEffect</h1>
        <UseEffect />
      </div>
    )
  }
};
