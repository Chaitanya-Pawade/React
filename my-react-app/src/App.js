import logo from './logo.svg';
import './App.css';
// import { Greet } from './Components/Greet';
// import Welcome from './Components/Welcome';
// import State from './Components/State';
import Greet from './Components/Greet';
import UseStateComp from './Components/UseStateComp';
import Events from './Components/Events';
import { Counter } from './Components/Counter';
import { Table } from './Components/Table';
// import  { NestComp } from './Components/NestComp';
function App() {
  // function getData(){
  //   alert("Hello React..!")
  // }
{/* <greet name="person" /> */}
  // const name = 'Chaitanya';
// const count = [];

  // const element = <h1>Hello { count }! </h1>
  // let elementNew = []
  // for(let i=1; i<=10;i++){
  //  count.push(<h1>{i} </h1>);
  // }
  
  // const props = { name: "Chaitanya", email: "chaitanya@example.com", size: 30 };

  return (
    <div className="App">
{/* {element} */}
{/* {elementNew} */}
{/* {count} */}
{/* <Greet name = "Aditi" heroname = "Wonder Woman">
  <p>This is a children props</p>
  </Greet>
<Greet name = "pranav" heroname = "Super Man">
  <button>Submit</button>
  </Greet>

<Welcome  name = "Aditi" heroname = "Wonder Woman"/>
<Welcome name = "pranav" heroname = "Super Man"/> */}

{/* <State /> */}
{/* const spreadProps = 
  name = 'Geeta';
  email = 'geeta@test.com';
  size = 30; */}

 {/* //! Add props by normal method */}
{/* <Greet  name = "Geeta" email = 'geeta@test.com'/> */}


 
{/* //! Props using Spread */}
{/* <Greet {...props} />; */}

{/* //! passing props as a child */}
{/* <Greet name = "Chaitanya">
  <p>This is JSX passed as children</p> 
  <button>Click me</button>
</Greet> */}

{/* //! passing function as props */}
{/* <Greet Data = {getData} /> */}

{/* //! UseStateComp */}
{/* <UseStateComp /> */}

{/* //! Events  */}
{/* <Events/> */}

<Greet />
    </div>
  );
}

export default App;
