import React ,{useState} from "react";
import Memo2 from './Memo2';

export default function Memo1(){

    const [count,setCount] = useState(0);
    const [name , setName] = useState("Sachin");
    const [surname , setSurName] = useState("Dange");

  const Increment = () => {
    setCount(count + 1);
  }

  const ChangeName = () => {
    setName('Dhoni');
  }

  // const ChangeSurName = () => {
  //   setSurName('Pande');
  // }
    return(
        <>
        <div>Memo1 - Parent component</div>
        <div>Count is : {count}</div>
        <br></br>
        <button onClick={Increment}>Increment</button>
        <button onClick={ChangeName} className="m-2">Change Name</button>
        {/* <button onClick={ChangeSurName} className="m-2">Change Sur Name</button> */}
        <hr/>
         <Memo2  name = {name} />
        </>
    )
}