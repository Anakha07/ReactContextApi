import React, { Component } from "react";
import InnerChild from "./innerChild";
import ParentOne from "./parentOne";

class Child extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h3>Im child</h3>
        <InnerChild />
      </React.Fragment>
    );
  }
}
export default Child;
