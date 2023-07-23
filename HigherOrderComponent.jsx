import React from "react";

const HigherOrderComponent = (OrignialComponent, number) => {
  class NewComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = { count: 0 };
    }

    incrementCount = () => {
      this.setState((prev) => {
        return { count: prev.count +number };
      });
    };

    render() {
        console.log("props ", this.props)
      return (
        <OrignialComponent
          count={this.state.count}
          incrementCount={this.incrementCount}
          {...this.props}
        />
      );
    }
  }

  return NewComponent;
};

export default HigherOrderComponent;
