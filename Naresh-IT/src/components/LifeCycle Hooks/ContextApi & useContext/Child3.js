import React, { useContext } from "react";
import { data  , data1} from "./Parent";



export default function Child3() {
    const name = useContext(data);
    const gender = useContext(data1);

  return (
    <>

      <h2>My name is {name} and gender is {gender}</h2>


      {/* <data.Consumer>
        {(name) => {
          return <h2>My name is {name}</h2>;
        }}
      </data.Consumer> */}
    </>
  );
}
