import React, { useState , useEffect } from "react";

// export function Counter() {
//   const [Counter, setNewCounter] = useState(5);

//   const handleCount = () => {
//     console.log(Counter);
//     if (Counter < 20) {
//       setNewCounter(Counter + 1);
//     }
//   };

//   const removeCount = () => {
//     if (Counter > 0) setNewCounter(Counter - 1);
//   };

//   return (
//     <>
//       <h1>Counter Program</h1>
//       <h2>Counter : {Counter} </h2>

//       <button onClick={handleCount}> Add here to Count : {Counter} </button>
//       <br></br>
//       <br></br>
//       <button onClick={removeCount}>Remove here</button>
//     </>
//   );
// }

//! useEffect 

// export function Counter(){

//   const [count,newCount] = useState(0);

// useEffect(() => {
// console.log("Component mounted")
// },[count])

// function checkCount(){
//   newCount(count + 1)
// }
//   return (
//     <>
//     <h2>Count : {count}</h2>
//     <button onClick={checkCount}>Update Count</button>
//     </>
//   )
// }

// export function Counter(){

// const [now] = useState(new Date());
// const [status,newStatus] = useState('');
// const [time,newTime] = useState('');

// function setStatus(){
//   var date = new Date();
//   var hrs = date.getHours();

//   if(hrs>=0 && hrs <= 12){
//     newStatus('Good Morning')
//   }
//   else if(hrs>=12 && hrs<=16){
//     newStatus('Good Afternoon')
//   }
//   else if(hrs>=16 && hrs <=23){
//     newStatus('Good evening')
//   }
  
// }

// function setTime(){
//   var now = new Date();
//   var time = now.toLocaleTimeString();
//   newTime(time);
// }
// useEffect(() => {
//   setStatus();
//   setInterval(setTime , 1000);
// },[])

//   return(
//     <>
//     <h2>Date : {now.toLocaleDateString()} </h2>
//     {/* <h2>Time : {now.toLocaleTimeString()}</h2> */}
//     <h2>Time : {time}</h2>
//     <h2>Status : {status}</h2>
//     {/* <button onClick = {setStatus}>Check Status</button> */}
//     </>
//   )
// }

// export function Counter(){
//   const people = [{
//     id: 0,
//     name: 'Creola Katherine Johnson',
//     profession: 'mathematician',
//   }, {
//     id: 1,
//     name: 'Bablu',
//     profession: 'chemist',
//   }, {
//     id: 2,
//     name: 'Mohammad Abdus Salam',
//     profession: 'physicist',
//   }
//   , {
//     id: 3,
//     name: 'Pintya',
//     profession: 'chemist',  
//   }, {
//     id: 4,
//     name: 'Subrahmanyan Chandrasekhar',
//     profession: 'astrophysicist',
//   }];
  
//   const chemist = people.filter(person => 
//     person.profession === 'chemist'
//   );

//   const everyOneElse = people.filter(allotherperson => 
//     allotherperson.profession !== 'chemist'
//   );

  
//   const listItems = chemist.map(person => 
//     <li>
//       <p>
//         <b>{person.name}</b>   : 
//         <b>{person.profession}</b>
//       </p>
//     </li>
//   )

//   const otherList = everyOneElse.map(allotherperson => 
//     <li>
//       <p>
//         <b>{allotherperson.name}</b> : 
//         <b>{allotherperson.profession}</b>

//       </p>
//     </li>
//   )


//   return(
//     <ul>
//       {listItems}
//       {otherList}
//     </ul>
//   )
// }

//? 

export function  Counter (){
  const recipes = [{
  id: 'greek-salad',
  name: 'Greek Salad',
  ingredients: ['tomatoes', 'cucumber', 'onion', 'olives', 'feta']
}, {
  id: 'hawaiian-pizza',
  name: 'Hawaiian Pizza',
  ingredients: ['pizza crust', 'pizza sauce', 'mozzarella', 'ham', 'pineapple']
}, {
  id: 'hummus',
  name: 'Hummus',
  ingredients: ['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini']
  
}];

    return (
        <div>
       <h1>Recipes</h1>
        
          {recipes.map(recipee => 
          <div key = {recipee.id}>
            <h2>{recipee.name}</h2>
            <ul>
              {recipee.ingredients.map(ingred => 
                <li key = {ingred}>
                  {ingred}
                </li>

              )}
            </ul>
            </div>
          )}
        
      
        </div>
    )
}