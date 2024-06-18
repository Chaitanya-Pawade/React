

//! data-binding with primitive data type examples

import { useState } from "react"


// export function DataBinding(){
//     var userName = "John";
//     var age = 26;
//     var subscribe = true;
//     return (
//         <>
//         <h1>Data binding</h1>
//         <p>Hello { userName } you will be { age + 1}  next year </p>
//         <p> { (subscribe ===true)? "Thank you for Subscribing": "Please Subscribe to our channel"}</p>
//         </>
//     )
// }

//! data - binding with non-primitive data type examples

// export function DataBinding() {
//   var categories = ["All", "Electronics", "Footwear","Fashion"];

//   return (
//     <>
//       <h2>data - binding with non-primitive data type examples</h2>
//       <nav>
//         {
//             categories.map((category) => 
//             <span>{category}</span>
//         )
//         }
//       </nav>
//       <ol>
//         {categories.map((category) => (
//           <li>{ category }</li>
//         ))}
//       </ol>

//       <select>
//         {
//             categories.map((category)=> <option>{category}</option>)
//         }
//       </select>

//       {/* <ul>
//         {
//             categories.map((category) => 
//             <li>
//                 <input type="checkbox"/> <label>{category}</label>
//             </li>
//         )
//         }
//       </ul> */}

//       <table>
//         <thead>
//             <tr>
//                 <th>Categories</th>
//             </tr>
//         </thead>
//         <tbody>
//             {
//                 categories.map((category) => 
//                 <tr>
//                     <td>{category}</td>
//                 </tr>
//             )
//             }
//         </tbody>
//       </table>
      
//     </>
//   );
// }

//? objects (data binding)

// export function DataBinding(){

//   var product = {
//     Name : "Samsung TV",
//     Price : 45000,
//     Stock : true,
//     Cities : ["Pune","Nanded"],
//     Rating : { Rate : 4.0, Count : 5000 }
//   }

//   return(
//     <>
//     <h2>Product Details</h2>
//     <dl>
//       <dt>Name</dt>
//       <dd>{ product.Name}</dd>
//       <dt>Price</dt>
//       <dd>{ product.Price}</dd>
//       <dt>Stock</dt>
//       <dd>{ (product.Stock)? "Avaiable":"Not Available"}</dd>
//       <dt>Cities</dt>
//       <dd>
//           <ol>
//             {
//               product.Cities.map((city =>
//             <li key = {city}>  
//               {city}
//             </li>
//             )
//           )
//             }
//           </ol>
//       </dd>
//       <dt>Rating</dt>
//       <dd>{product.Rating.Rate}  [{ product.Rating.Count}]</dd>
//     </dl>
     
//     </>
//   )
// }

//! Array Objects 

// export function DataBinding(){

//   var menu = [
//     { Category : "Electronics",Products : ["Tv","Mobiles","Watches"]},
//     { Category : "Fashion",Products : ["Kids Fashion","Women Fashion","Men Fashion"]}
//   ]

//   return (
//      <>
//         <ol>
//           {
//             menu.map((item) => 
//             <li key = {item.Category}>
//              {item.Category}
//              <ul>
//               {
//                 item.Products.map((product) =>
//                 <li key = {product}>
//                   {product}
//                 </li>
//               )
//               }
//              </ul>
//             </li>
//             )
//           }
//         </ol>
//      </>
//   )
// }

//? 2) Array Objects

// export function DataBinding(){

//   var Topics = [
//     { Title : "HTML" , Description : "it is a markup language"},
//     { Title : "CSS" , Description : "it is a Styling sheet"}
//   ]
//      return (
     
//       <>
//         <dl>
//           {
//              Topics.map((topic) =>
//              <>
//              <dt>{topic.Title}</dt>
//              <dd>{topic.Description}</dd>
//              </>
//             )
            
//           }
//         </dl>
//       </>

//      )

// }

//?  data - binding using "useState" hook (it's a example of one way data binding)

// export function DataBinding(){

// const [title] = useState('Product Details');
// const [product] = useState({Name : 'Samsung TV' ,Price : 45000})
// const [categories] = useState(["All","Electronics","Footwear","Fashion"])

//   return (
//         <>
//         <h2>{title}</h2>
//         <dl>
//           <dt>Name</dt>
//           <dd>{product.Name}</dd>
//           <dt>Price</dt>
//           <dd>{product.Price}</dd>
//           <dt>Select Category</dt>
//           <dd>
//             <select>
//               {
//                 categories.map(category => 
//                   <option key={category}>{category}</option>
//                 )
//               }
//             </select>
//           </dd>
//         </dl>
//         </>
//   )
// }

//? Two Way data-binding

//! Ex 

// export function DataBinding(){

//   const [userName , setNewUserName] = useState('John');

//   function setUserName(e){
//     setNewUserName(e.target.value)
//   }
//   return (
//     <>
//  <h2>Data Binding</h2>

// <input type="text" value={userName} onChange={setUserName}></input>
// <p>Hello {userName}</p>

//     </>
   
    
//   )
// }

//! ex 2

// export function DataBinding(){

//   const[productDetails , newProductDetails] = useState({Name : "MI TV" , Price : 44000.44, City : 'Pune',Stock : true});

//  function NameChange(event){
//   newProductDetails({
//     Name : event.target.value,
//     Price : productDetails.Price,
//     City : productDetails.City,
//     Stock : productDetails.Stock

//   }
//     )
//  }

//  function PriceChange(event){
//   newProductDetails({
//     Price : event.target.value,
//     City : productDetails.City,
//     Stock : productDetails.Stock,
//     Name : productDetails.Name

//   }  
//     )
  
//  }

//  function CityChange(event){
//   newProductDetails({
//     City : event.target.value,
//     Stock : productDetails.Stock,
//     Name : productDetails.Name,
//     Price : productDetails.Price

//   }
//     )
//  }

//  function StockChange(event){
//   newProductDetails({
//     Stock : event.target.value,
//     Name : productDetails.Name,
//     Price : productDetails.Price,
//     City : productDetails.City

//   }
//     )
//  }
//   return (
//     <>
//     <div>
//       <h2>Product Details</h2>
//       <dl>
//         <dt>Name</dt>
//         <dd>
//           <input type="text" value = {productDetails.Name} onChange={NameChange}></input></dd>
//           <dt>Price</dt>
//           <dd>
//           <input type="number" value = {productDetails.Price} onChange={PriceChange}></input></dd>
//           <dt>City</dt>
//           <dd>
//             <select value={productDetails.City} onChange={CityChange}>
//               <option>Select City</option>
//               <option>Pune</option>
//               <option>Mumbai</option>
//             </select>
//           </dd>
//           <dt>Stock</dt>
//           <dd><input type="checkbox" checked={productDetails.Stock} onChange={StockChange}></input><label>Available</label></dd>
//       </dl>
//       {/* <p>Hello {productDetails.Name}</p> */}
//     </div>
//     <div>
//       <dl>
//         <dt>Name</dt>
//         <dd>{productDetails.Name}</dd>
//         <dt>Price</dt>
//         <dd>{productDetails.Price}</dd>
//         <dt> City</dt>
//         <dd>{productDetails.City}</dd>
//         <dt>Stock</dt>
//         <dd>{(productDetails.Stock == true)?"Available" : "Out of Stock"}</dd>
//       </dl>
//     </div>
//     </>
//   )
// }


//! Ex 3 Two way binding on button click

// export function DataBinding(){

//   const[productDetails , newProductDetails] = useState({Name : "MI TV" , Price : 44000.44, City : 'Pune',Stock : true});
//   const [updatedProduct, setUpdatedProduct] = useState({Name : '', Price : 0, City : '',Stock : false});

//  function NameChange(event){
//   newProductDetails({
//     Name : event.target.value,
//     Price : productDetails.Price,
//     City : productDetails.City,
//     Stock : productDetails.Stock

//   }
//     )
//  }

//  function PriceChange(event){
//   newProductDetails({
//     Price : event.target.value,
//     City : productDetails.City,
//     Stock : productDetails.Stock,
//     Name : productDetails.Name

//   }  
//     )
  
//  }

//  function CityChange(event){
//   newProductDetails({
//     City : event.target.value,
//     Stock : productDetails.Stock,
//     Name : productDetails.Name,
//     Price : productDetails.Price

//   }
//     )
//  }

//  function StockChange(event){
//   newProductDetails({
//     Stock : event.target.value,
//     Name : productDetails.Name,
//     Price : productDetails.Price,
//     City : productDetails.City

//   }
//     )
//  }

//  function handleUpdateddata(){
//   setUpdatedProduct(productDetails)
//  }
//   return (
//     <>
//     <div>
//       <h2>Product Details</h2>
//       <dl>
//         <dt>Name</dt>
//         <dd>
//           <input type="text" value = {productDetails.Name} onChange={NameChange}></input></dd>
//           <dt>Price</dt>
//           <dd>
//           <input type="number" value = {productDetails.Price} onChange={PriceChange}></input></dd>
//           <dt>City</dt>
//           <dd>
//             <select value={productDetails.City} onChange={CityChange}>
//               <option>Select City</option>
//               <option>Pune</option>
//               <option>Mumbai</option>
//             </select>
//           </dd>
//           <dt>Stock</dt>
//           <dd><input type="checkbox" checked={productDetails.Stock} onChange={StockChange}></input><label>Available</label></dd>
//       </dl>
//       <button onClick={handleUpdateddata}>Update</button>
//       {/* <p>Hello {productDetails.Name}</p> */}
//     </div>
//     <div>
//       <dl>
//         <dt>Name</dt>
//         <dd>{updatedProduct.Name}</dd>
//         <dt>Price</dt>
//         <dd>{updatedProduct.Price}</dd>
//         <dt> City</dt>
//         <dd>{updatedProduct.City}</dd>
//         <dt>Stock</dt>
//         <dd>{(updatedProduct.Stock == true)?"Available" : "Out of Stock"}</dd>
//       </dl>
//     </div>
//     </>
//   )
// }


// export  function DataBinding() {
//   const [form, setForm] = useState({
//     firstName: ' ',
//     lastName: ' ',
//     email: ' ',
//   }
// )

// function setFirstName(e){
// setForm({
//   ...form, [e.target.name]: e.target.value
// })
// console.log(form);
// }

// function setLastName(e){
//   setForm({
//     ...form, [e.target.name] : e.target.value
//   })
//   }
  
// function setEmail(e){
//   setForm({
//     ...form, [e.target.name] : e.target.value
//   })
//   }
  
// // function setEmail(e){
// //   setForm(e.target.value)
// //   console.log(form)
// // }
  
//   return(
//     <>
//     <h2>Form Updating</h2>
//     <input type="text" name = 'firstName' value = {form.firstName} onChange={setFirstName}></input>
//     <input type="text" name = 'lastName' value = {form.lastName} onChange={setLastName}></input>
//     <input type="email" name = 'email' value = {form.email} onChange={setEmail}></input>
  
//     </>
          
//   )

// }


// export default function Form() {
//   const [person, setPerson] = useState({
//     name: 'Niki de Saint Phalle',
//     artwork: {
//       title: 'Blue Nana',
//       city: 'Hamburg',
    
//     }
//   });
//      return(
//       <>
//       <h2>Nested Object </h2>
      

//       </>
//      )

// }

export  function DataBinding() {
  const [person, setPerson] = useState({
    name: 'Niki de Saint Phalle',
    artwork: {
      title: 'Blue Nana',
      city: 'Hamburg',

    }
  });

  function handleNameChange(e) {
    setPerson({
      ...person,
      name: e.target.value
    });
    console.log(person);
  }

  function handleTitleChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        title: e.target.value
      }
    });
  }

  function handleCityChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        city: e.target.value
      }
    });
  }

  function handleImageChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        image: e.target.value
      }
    });
  }

  return (
    <>
      <label>
        Name:
        <input
          value={person.name}
          onChange={handleNameChange}
        />
      </label>
      <label>
        Title:
        <input
          value={person.artwork.title}
          onChange={handleTitleChange}
        />
      </label>
      <label>
        City:
        <input
          value={person.artwork.city}
          onChange={handleCityChange}
        />
      </label>
      <label>
        Image:
        <input
          value={person.artwork.image}
          onChange={handleImageChange}
        />
      </label>
      <p>
        <i>{person.artwork.title}</i>
        {' by '}
        {person.name}
        <br />
        (located in {person.artwork.city})
      </p>
      {/* <img 
        src={person.artwork.image} 
        alt={person.artwork.title} */}
      {/* /> */}
    </>
  );
}
