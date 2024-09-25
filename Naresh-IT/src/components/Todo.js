// // import axios from "axios";
// import React, { useEffect, useState } from "react";

import { useEffect, useState } from "react";


export default function Todo(){

    const [todos,setTodos] = useState([]);

     
    useEffect(() => {
    
         fetch("https://dummyjson.com/todos")
        .then((response) => response.json())
        .then(data => 
            setTodos(data.todos));
        // console.log(data.todos));
        
    },[]);

    
    return(
        <>
        <h2>Todos Application</h2>
        <ul>
            {
                todos?.map((todo,ind) => {
                    return <li key={ind}>
                 {todo.todo }
                    </li>
                })
            }
        </ul>
        </>
    )
}

console.log(new commits);




// export default function Todo(){

//     const [count,setCount] = useState(0);

//     useEffect(() => {
//         setCount(count+1)
//     },[])

//     useEffect(() => {
//         setCount(count+1)
//     },[])


//     return(
//         <>
//         <h2>{count}</h2>
//         </>
//     )
// }



const numbers = [1,2,3,1,2,4];

const uniqueNumbers = numbers.filter((value,index,array) => {
    return array.indexOf(value) === index;
})

console.log(uniqueNumbers);



function chunk(arr,size){
let result = [];
let minAns = [];

for(let i=0; i<arr.length; i++){
    minAns.push(arr[i]);
    if(minAns.length === size  || i=== arr.length-1){
     result.push(minAns);
     minAns=[];
    }
    
}
// console.log(result);
    
    return result;
}

console.log(chunk([10,20,30,4,5],3));




// create debounce function


function debounce(searchFn,delay){
let id; 
    return function optimisedFn(...args) {
        clearTimeout(id)
       id = setTimeout(() => {
            searchFn(...args)
        },delay)
    }
}

function print(data){
console.log(data);

}

let printData = debounce(print,1000);
printData('i');
printData('ip');
printData('iph');
printData('ipho');
printData('iphone');














function debounce(searchFn, delay) {
    let id; 
    return function optimisedFn(...args) {
        clearTimeout(id);
        id = setTimeout(() => {
            searchFn(...args);
        }, delay);
    };
}

function getSuggestions(input) {
    // Simulated suggestions array
    const suggestions = ['iphone', 'ipod', 'ipad', 'iphere', 'iphe'];
    // Filter suggestions based on the input
    const filteredSuggestions = suggestions.filter(item => item.includes(input));
    
    // Display suggestions
    console.log(filteredSuggestions);
}

// Debounced function
let fetchSuggestions = debounce(getSuggestions, 1000);

// Simulating user keystrokes
fetchSuggestions('i');
// fetchSuggestions('ip');
// fetchSuggestions('iph');
// fetchSuggestions('ipho');
// fetchSuggestions('iphon');
// fetchSuggestions('iphone');


//? create count function

function count(){
    let i = 0;
    return function countNo(){
      
       i++;
       console.log(i);
    //    return i;
    }
    
}
const counter = count();
counter();
counter();
counter();




// pass by value

function passByValue(value){
    
    value = 20;
    console.log(value);
    
    
}

let newVal = 10;

passByValue(newVal);


// pass by reference

function passByReference(obj){
  return obj.name = 'apple'
}
let myName = {name :'banana'};

console.log(passByReference(myName));

@pavi1640

