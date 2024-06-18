import React, { useContext } from "react";
import { data , data1 } from "./Parent";



export default function Child3() {
    const fname = useContext(data);
    const gender = useContext(data1);

  return (
    <>

      <h2>My name is {fname} and gender is {gender}</h2>


      {/* <data.Consumer>
        {(name) => {
          return <h2>My name is {name}</h2>;
        }}
      </data.Consumer> */}
    </>
  );
}
