import React, { Component } from "react";
import { ParentOneContext } from "./parentOne";

class InnerChild extends Component {
  state = {};
  render() {
    return (
      <ParentOneContext.Consumer>
        {context => (
          <React.Fragment>
            <h5>Im innermost child</h5>
            <p>My name is {context.state.name}</p>
            <p>My age is {context.state.age}</p>
            <button onClick={context.incrementage}>Incrementage</button>
          </React.Fragment>
        )}
      </ParentOneContext.Consumer>
    );
  }
}
export default InnerChild;
