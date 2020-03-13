import React, { Component } from "react";
import Child from "./child";
import ParentOne from "./parentOne";

class ParentTwo extends Component {
  state = {};
  render() {
    return (
      <ParentOne>
        <React.Fragment>
          <h2>I'm Parent two</h2>
          <Child />
        </React.Fragment>
      </ParentOne>
    );
  }
}

export default ParentTwo;
