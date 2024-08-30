// states

import React,{useState} from "react";

export default function Second(){
const [count,setCount] = useState(0);
const [name , setName] = useState("");
const[isVisible,setIsVisible] = useState(false);
const [array , setArray] = useState([1,2,3,4,5]);
const [emp,setEmp] = useState([{name : 'Nishant' , salary : 2500} , {name : 'Ketan' , salary : 999}])

const increment = () => {
setCount(count + 1)
setIsVisible(!isVisible)
setName("Chaitnaya")
setArray(arr)
setEmp(empDetails)
}
const arr = () => array.filter((ar) => ar<=3);

const empDetails = emp.filter((emp) => emp.salary > 1000)
console.log(empDetails);
    return(
        <>
        <div>
       <h2> Count :  {count}</h2>
       <h1>Name : {name}</h1>
        {isVisible ? <h2>visible</h2> : <h2>not visible</h2>}
        <h3> array : {array}</h3>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody>
            {emp.map((emp , ind) => 
            <tr key={ind}>
              <td>{emp.name}</td>
              <td>{emp.salary}</td>
              
            </tr>
            )
}
          </tbody>
        </table>

       <button onClick={increment}>Count</button>
        </div>
        </>
    )
}