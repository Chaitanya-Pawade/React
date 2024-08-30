import logo from "./logo.svg";
import "./App.css";
import { Register } from "./components/Login/Register/Register";
import MyModul from "./components/Props/MyModul";
import State1 from "./components/States/State1";
import State2 from "./components/States/State2";
import SweetAlert1 from "./components/SweetAlert/SweetAlert1";
import EmployeeList from "./components/States/EmployeeList";
import ListEmployees from "./components/Crud Assign/ListEmployees";
import EmpCrud from "./components/Crud Assign/EmpCrud";
import Memo1 from "./components/memo/Memo1";
import UseEffect from "./components/LifeCycle Hooks/useEffect1";
import UseRef from "./components/LifeCycle Hooks/useRef1";
import Form1 from "./components/Forms/Form1";
import Form2 from "./components/Forms/Form2";
import RegistrationForm from "./components/Forms/RegistrationForm";
import Form3 from "./components/Forms/Form3";
import HodCmp from "./components/HODComp/HodCmp";
import Http1 from "./components/HTTP/Http1";
import Http2 from "./components/HTTP/Http2";
import Http3 from "./components/HTTP/Http3";
import Home from "./components/Home/Home";
import AboutUs from "./components/About us/AboutUs";
import Careers from "./components/Careers/Careers";
import NotFound from "./components/NotFound/NotFound";

import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import DisplayUsersData from "./components/Lists/DisplayUsersData";
import DisplayProducts from "./components/Lists/DisplayProducts";
import ProductDetails from "./components/Lists/ProductDetails";
import ProductDetail from "./components/Lists/ProductDetail";
import Permanent from "./components/Careers/Permanent";
import Contract from "./components/Careers/Contract";
import ProtectedRoute from "./components/utils/ProtectedRoute";
import UseEffect2 from "./components/LifeCycle Hooks/UseEffect2";
import UseEffect3 from "./components/LifeCycle Hooks/UseEffect3";
import Parent from "./components/LifeCycle Hooks/ContextApi & useContext/Parent";
import MyApp from "./components/LifeCycle Hooks/MyApp";
import UseReducer from "./components/LifeCycle Hooks/UseReducer";
import UseReducer2 from "./components/LifeCycle Hooks/UseReducer2";
import Counter1 from "./components/LifeCycle Hooks/Custom Hook/Counter1";
import Counter2 from "./components/LifeCycle Hooks/Custom Hook/Counter2";
import Assign1 from "./components/Assignments/Assign1";
import Assign2 from "./components/Assignments/Assign2";
import Assign3 from "./components/Assignments/Assign3";
import Assign4 from "./components/Assignments/Assign4";
import Assign5 from "./components/Assignments/Assign5";
import Assign6 from "./components/Assignments/Assign6";
import Assign7 from "./components/Assignments/Assign7";
import Assign8 from "./components/Assignments/Assign8";
import Assign9 from "./components/Assignments/Assign9";
import Assign10 from "./components/Assignments/Todo App/Assign10";
import FormValidation from "./components/Forms/FormValidation";
import Form4 from "./components/Forms/Form4";
// import UseEffect from "./components/Hooks/useEffect";
function App() {
  let f1 = function () {
    console.log("This is f1 function from App component");
  };

  return (
    <div className="App">
      {/* <Register/> */}

      {/* <MyModul heading= "Registration Form" year = {2018} f1 = {f1}> 
      <div>
        <h2>This is heading from parent</h2>
      </div>
    
  </MyModul> */}

      {/* <State2/> */}
      {/* <SweetAlert1 /> */}
      {/* <DisplayProducts /> */}
      {/* <EmployeeList/> */}
      {/* <EmpCrud/> */}
      {/* <Memo1/> */}
      {/* <UseEffect/> */}
      {/* <UseRef/> */}
      {/* <Register/> */}
      <Form1 />
      {/* <Form2/> */}
      {/* <RegistrationForm /> */}
      {/* <Form3/> */}
      {/* <FormValidation/> */}
      {/* <Form4 /> */}
      {/* <HodCmp /> */}
      {/* <Http1 /> */}
      {/* <Http2 /> */}
      {/* <Http3 /> */}
      {/* <Navbar />
          <productDetails />
         <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/home' element={<Home/>} />
          <Route exact path='/aboutus' element={<AboutUs/>} />
          <Route exact path='/careers' element={<Careers />} >
            <Route path='permanent' element={< Permanent/>} />
            <Route index element={< Permanent/>} />
          <Route path='contract' element={< Contract/>} />
          </Route>
          <Route exact path='*' element={<NotFound/>} />
          <Route exact path='/displayproducts' element={
                     <ProtectedRoute>
                     <DisplayProducts/>
                     </ProtectedRoute>
          } />
          <Route path='/productdetails/:id' element={<ProductDetails/>} />  //? path params
          <Route path='/productdetail' element={<ProductDetail/>} />   //? using query params
         </Routes> */}
      {/* <UseEffect2/> */}
      {/* <UseEffect3/> */}

      {/* <Parent /> */}
      {/* <MyApp /> */}
      {/* <UseReducer /> */}
      {/* <UseReducer2 /> */}
      {/* <Counter1 /> */}
      {/* <Counter2/> */}

      {/* Assignments */}
      {/* <Assign1/> */}
      {/* <Assign2/> */}
      {/* <Assign3/> */}
      {/* <Assign4/> */}
      {/* <Assign5/> */}
      {/* <Assign6/> */}
      {/* <Assign7/> */}
      {/* <Assign8/> */}
      {/* <Assign9/> */}
      {/* <Assign10/> */}

     {/* hooks */}
    
      
    </div>
  );
}

export default App;
