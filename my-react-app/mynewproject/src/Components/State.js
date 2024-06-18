
import React , { Component} from "react";

class State extends Component {
    constructor(){
        super()
        this.state = {
            message : "Welcome Home"
        }
    }

    changeMessage(){
        this.setState({
            message : 'Thank you for Submitting a form '
        }

        )
    }

 render() {
    return( <div>
        <h2> {this.state.message} </h2>
        <button onClick = { () => this.changeMessage() } >Submit</button>
    </div>
    )
 }
}

export default State;