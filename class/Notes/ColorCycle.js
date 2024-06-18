import React from 'react';

// Define the class component ColorCycle
class ColorCycle extends React.Component {

  // This is the required method if we are using state or props
  constructor(props) {
    super(props);
    // Step 1: Initialize the component's state
    this.state = { color: "red" };
    console.log('Constructor: Set initial state.');
  }

  // Step 2 and 5: Derived state from props before initial render or re-renders due to prop changes
  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps: Sync state to props if needed.');
    // return props.initialColor !== state.color ? { color: props.initialColor } : null;
  }

  // Step 4: Perform side-effects (e.g., API calls, subscriptions) after component mounts
  componentDidMount() {
    console.log('componentDidMount: Component is now in the DOM.');
    this.timerID = setInterval(() => this.changeColor(), 5000);
  }

  // Step 6: Decide whether to re-render the component
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate: Decide to render based on new props or state.');
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
    console.log(`componentDidUpdate: Component did update. Previous color was ${snapshot}`);
  }

  // Step 10: Cleanup the component before it unmounts from the DOM
  componentWillUnmount() {
    console.log('componentWillUnmount: Cleanup before unmounting.');
    clearInterval(this.timerID);
  }

  // Method to change color
  changeColor = () => {
    this.setState({
      color: `#${Math.floor(Math.random() * 16777215).toString(16)}`
    });
  }

  // Step 3 and 7: Required method, renders the component to the DOM
  render() {
    console.log('render: Render the component to the DOM.');
    return (
      <div style={{ height: '100px', backgroundColor: this.state.color }}>
        <h1>My favorite color is {this.state.color}</h1>
        <button onClick={this.changeColor}> Change Color </button>
      </div>
    );
  }
}

export default ColorCycle;



//! Life cycle
// Mounting Phase begins when a component is first created and inserted into the DOM.
// The Updating Phase occurs when a component's state or props change. And the Unmounting Phase occurs when a component is removed from the DOM.
// Define the class component ColorCycle
//! {1} Component Mounting Phase
// The mounting phase refers to the period when a component is being created and inserted into the DOM.
// set up any necessary state or event listeners, and perform other initialization tasks.
//? step 1 The constructor() lifecycle method
// to initialize the component's state and bind methods to the component's instance.
//? Step 2 & (5)  Derived state from props
// before initial render or re-renders due to prop changes
// is invoked during the mounting and updating phase of a component.
// This method is called for every render cycle and provides an opportunity to update the component's state based on changes in props before the initial render.
// It takes two parameters:

// props: The updated props for the component.

// state: The current state of the component.

// The method should return an object that represents the updated state of the component, or null if no state update is necessary.

// It's important to note that getDerivedStateFromProps() is a static method, which means it does not have access to the this keyword and cannot interact with the component's instance methods or properties.
//? Step 3 and (7): Required method, renders the component to the DOM
//? step 4  componentDidMount() lifecycle method
// The componentDidMount() method is called once the component has been mounted into the DOM. It is typically used to set up any necessary event listeners or timers, perform any necessary API calls or data fetching, and perform other initialization tasks that require access to the browser's DOM API.
// Perform side-effects (e.g., API calls, subscriptions) after component mounts
//! {2} Component Updating Phase

//? step (5)
//? step 6 The shouldComponentUpdate() lifecycle method
// The shouldComponentUpdate()  method is called before a component is updated. It takes two arguments: nextProps and nextState. This method returns a boolean value that determines whether the component should update or not. If this method returns true, the component will update, and if it returns false, the component will not update.
// Decide whether to re-render the component
//? step (7)
//? step 8 getSnapshotBeforeUpdate method
// The getSnapshotBeforeUpdate method is called right before the component is updated. It checks if the state variable has changed since the last update and returns an object with the previous favorite food if it has. Otherwise, it returns null.
//? Step 9: componentDidUpdate method
// Perform actions after the component updates
// called after the component has been updated. It receives the previous props, state, and snapshot as arguments. In this case, it checks if the snapshot is not null and logs the previous favorite food to the console.
//! {3}:Component Unmounting Phase
// Cleanup the component before it unmounts from the DOM
// The unmounting phase refers to the lifecycle stage when a component is being removed from the DOM (Document Object Model) and is no longer rendered or accessible.

// During this phase, React performs a series of cleanup operations to ensure that the component and its associated resources are properly disposed of.

// The unmounting phase is the last stage in the lifecycle of a React component and occurs when the component is being removed from the DOM tree.

// This can happen for various reasons, such as when the component is no longer needed, the parent component is re-rendered without including the child component, or when the application is navigating to a different page or view.

// ? step 10
// componentWillUnmount(): This method is called just before the component is removed from the DOM. It allows you to perform any necessary cleanup, such as canceling timers, removing event listeners, or clearing any data structures that were set up during the mounting phase.
// After componentWillUnmount() is called, the component is removed from the DOM and all of its state and props are destroyed.