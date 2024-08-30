// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { Register } from './components/Login/Register/Register';
// import { DataBinding } from './components/Login/data-binding/data-binding';
// import { EventBinding } from './components/Event-binding/event-binding';
// import { Product } from './components/Lists/product';
// import { NewComp } from './components/NewComp';
// import DisplayProducts from './components/Lists/DisplayProducts';
// import DisplayUsersData from './components/Lists/DisplayUsersData';
// import MyModul from './components/Props/MyModul';
// import { BrowserRouter } from 'react-router-dom';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   // <React.StrictMode>
//   <BrowserRouter>
//   <App/>
//   </BrowserRouter>

//   // </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../src/Pages/Layout";
import Home from "../src/Pages/Home";
import Blogs from "../src/Pages/Blogs";
import Contact from "../src/Pages/Contact";
import NoPage from "../src/Pages/NoPage";
import Protected from "./Pages/Protected";
import Parent from "./components/LifeCycle Hooks/ContextApi & useContext/Parent";

// export default function App() {
//   return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Layout />}>
    //       <Route index element={<Home />} />
    //       <Route path="blogs" element={<Blogs />} />
    //       <Route
    //         path="contact"
    //         element={
    //           <Protected>
    //             <Contact />
    //           </Protected>
    //         }
    //       />
    //       <Route path="*" element={<NoPage />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
    // <Parent/>
  // );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
