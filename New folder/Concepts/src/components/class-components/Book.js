import React from "react";

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Harry Potter and the Philosopher's Stone",
      author: "J.K. Rowling",
      pageCount: 223,
      readStatus: "Not Read",
      // readStatus: false};
    };
  }

  readStatus = () => {
    this.setState((prevState) => ({
      readStatus: prevState.readStatus === "Not Read" ? "Read" : " Not Read",
    }));
  };
  // this.setState((prevState)=> ({ readStatus : prevState.readStatus}))
  render() {
    return (
      <div>
        <h2>{this.state.title}</h2>
        <p>Author: {this.state.author}</p>
        <p>Pages: {this.state.pageCount}</p>
        <p>Status: {this.state.readStatus}</p>
        <button onClick={this.readStatus}>Read Status</button>
      </div>
    );
  }
}

export default Book;
