import React from "react";
import PropTypes from "prop-types";

// export default function MyModul(props){

//     return (
//         <>
//         <h2>{props.heading}</h2>
//         <h2> {props.children}</h2>
//         </>
//     )

// }

MyModul.propTypes = {
    children : PropTypes.element,
    heading : PropTypes.string.isRequired,  // mandatory prop
    year : PropTypes.number   // optional prop
};

// Another method - using props - destructuring method

export default function MyModul({heading,children,year,f1}){  // it works whole object as a props

    return (
        <>
        <h2>{heading}</h2>
        <h2> {children}</h2>
        <h4 className="text-center">{year}</h4>
        <button onClick={f1}>Click me</button>
        </>
    )

}