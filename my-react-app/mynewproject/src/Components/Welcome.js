
// import React ,{ Component} from "react";

// class Welcome extends Component {
//     render(){
//         return <h2>Class Component</h2>
//     }
// }

// export  default Welcome;


import React ,{ Component} from "react";

class Welcome extends Component {
    render(){
        return <h2>Class Component {this.props.name} {this.props.heroname} </h2>
    }
}

export  default Welcome;