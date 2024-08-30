import React from "react";

class ColorCylce extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: "yellow" };
    console.log("Step 1 constructor: Initialize the component's state");
  }

  static getDerivedStateFromProps(props, state) {
    return props.initialColor !== state.color
      ? { color: props.initialColor }
      : null;
    // console.log(
    //   "Step 2 and 5: Derived state from props before initial render or re-renders due to prop changes"
    // );
  }

  // Step 4: Perform side-effects (e.g., API calls, subscriptions) after component mounts
  componentDidMount() {
    console.log("componentDidMount: Component is now in the DOM.");
    this.timerID = setInterval(() => this.changeColor(), 5000);
  }

  // Step 6: Decide whether to re-render the component
  shouldComponentUpdate(nextProps, nextState) {
    console.log(
      "shouldComponentUpdate: Decide to render based on new props or state."
    );
    // Only re-render if the color changes
    // This method always only returns the boolean value. Which says that whether a componet should update or not.
    return this.state.color !== nextState.color;
  }

  // Step 8: Before the DOM updates, capture some properties (e.g., scroll position)
  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   console.log('getSnapshotBeforeUpdate: Capture some properties before the DOM updates.');
  //   return prevState.color;
  // }

  // Step 9: Perform actions after the component updates
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(
      `componentDidUpdate: Component did update. Previous color was ${snapshot}`
    );
  }

  // Step 10: Cleanup the component before it unmounts from the DOM
  componentWillUnmount() {
    console.log("componentWillUnmount: Cleanup before unmounting.");
    clearInterval(this.timerID);
  }
  changeColor = () => {
    this.setState({
      color: "red",
    });
  };

  render() {
    console.log(
      "Step 3 and 7: Required method, renders the component to the DOM"
    );
    return (
      <div style={{ height: "100px", backgroundColor: this.state.color }}>
        <h1>color is {this.state.color}</h1>
        <button onClick={this.changeColor}> Change ColorCylce</button>
      </div>
    );
  }
}

export default ColorCylce;
