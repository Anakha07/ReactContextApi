import React, { Component } from "react";

export const ParentOneContext = React.createContext();

class ParentOne extends Component {
  state = {
    name: "A",
    age: 100
  };
  render() {
    return (
      <ParentOneContext.Provider
        value={{
          state: this.state,
          incrementage: () =>
            this.setState({
              age: this.state.age + 1
            })
        }}
      >
        <h1>Im Parent One</h1>
        {this.props.children}
      </ParentOneContext.Provider>
    );
  }
}
export default ParentOne;
