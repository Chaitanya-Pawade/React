import React, { useState } from "react";
import SearchBar from "react-js-search";

export default function EmployeeList() {
  const initialEmployees = [
    { number: 12, name: "Buffon", position: "ST", success: true },
    { number: 21, name: "Pirlo", position: "MC", success: false },
    { number: 10, name: "Ruiz", position: "MDI" },
    { number: 7, name: "Nesta", position: "RB", success: true },
    { number: 4, name: "Cannavaro", position: "CB" },
    { number: 2, name: "Puyol", position: "CB", success: false },
    { number: 15, name: "Abate", position: "LB" },
    { number: 16, name: "Locatelli", position: "MDI" },
    { number: 1, name: "Buffon", position: "GK" },
    { number: 21, name: "Pirlo", position: "MC" },
    { number: 10, name: "Ruiz", position: "MDI" },
    { number: 7, name: "Nesta", position: "RB" },
  ];

const [employees , setEmployees] = useState(initialEmployees);
const [filteredEmployees , setFilteredEmployees] = useState(initialEmployees);

const onSearchClick = (term) => {
    console.log("search clicked");
    const filtered = employees.filter((emp) => 
        emp.name.toLowerCase().includes(term.toLowerCase())
        // emp.number === parseInt(term)
    );
    setFilteredEmployees(filtered);
}

// const onSearchTextChange = (term) => {
// const filtered = employees.filter((emp) => 
//     emp.name.toLowerCase().includes(term.toLowerCase())
// );
// setFilteredEmployees(filtered);
// }

const sortAsc = () => {
    // const sortByAsc = filteredEmployees.sort((e1,e2) => e1.name.localeCompare(e2.name));
    // setFilteredEmployees([...sortByAsc]);

    //? 2 way

    const sortByAsc = [...filteredEmployees].sort((e1,e2) => e1.name.localeCompare(e2.name));
    setFilteredEmployees(sortByAsc);
}

const sortDesc = () => {
    // const sortByDesc = filteredEmployees.sort((e1,e2) => e2.name.localeCompare(e1.name));
    // setFilteredEmployees([...sortByDesc]);

    //?

    const sortByDesc = [...filteredEmployees].sort((e1,e2) => e2.name.localeCompare(e1.name));
    setFilteredEmployees(sortByDesc);
}


//! Note : To avoid mutating the original array, you should create a copy of the array before sorting it. This way, the original array remains unchanged, and you have a sorted copy to work with.

  return (
    <>
    <SearchBar 
    //  onSearchTextChange={(term, filteredData) => setFilteredEmployees(filteredData)}
    // onSearchTextChange = {onSearchTextChange}
       onSearchButtonClick = {onSearchClick}
       placeHolderText = {"Search here..."}
       data = {employees}
    />
    <button onClick={sortAsc}>Asc</button>
    <button onClick={sortDesc}>Desc</button>
    <>
    <table className="table table-bordered">
     <tbody>
      {
         filteredEmployees.map((emp,ind) => 
            <tr key={ind}>
               <td>{emp.number}</td>
               <td>{emp.name}</td>
               <td>{emp.position}</td>
            </tr>
  )
      }
     </tbody>
    </table>
    </>
    </>
  )


}