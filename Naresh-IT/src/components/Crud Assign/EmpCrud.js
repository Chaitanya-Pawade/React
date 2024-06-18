import React, { useState } from "react";
import AddEmployee from "./AddEmployee";
import ListEmployees from "./ListEmployees";

export default function EmpCrud() {
  const EmpData = [
    {
      id: 101,
      name: "Chaitanya",
      JobRole: "Mern Developer",
      Salary: 55999,
    },

    {
      id: 102,
      name: "Rohit",
      JobRole: "Mern Developer",
      Salary: 45999,
    },

    {
      id: 103,
      name: "Shivraj",
      JobRole: "Mern Developer",
      Salary: 50000,
    },

    {
      id: 104,
      name: "Amol",
      JobRole: "Mern Developer",
      Salary: 66000,
    },
  ];

  const [info, setInfo] = useState(EmpData);

  const DeleteEmp = (empToDelete) => {
    const tempArray = info.filter((emp) => {
      return emp.id !== empToDelete;
    });
    setInfo(tempArray);
  };

  const addEmp = (empObj) => {
    const allEmp = [...info , empObj];
    setInfo(allEmp);
  }
  return (
    <>
      <h2 className="text-center bg-primary text-white p-3">
        This is Example of Employee CRUD
      </h2>
      <div className="container">
        <div className="row">
          <div className="col-sm-8">
            <ListEmployees info={info} DeleteEmp={DeleteEmp} />
          </div>

          <div className="col-sm-4">
            <AddEmployee  addEmp = {addEmp}/>
          </div>
        </div>
      </div>
    </>
  );
}
