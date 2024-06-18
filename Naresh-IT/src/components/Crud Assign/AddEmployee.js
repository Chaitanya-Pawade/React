import React, { useState } from "react";

export default function AddEmployee({addEmp}) {
    const [empId , setEmpId] = useState(105);
    const [empName , setEmpName] = useState("Sanjay");
    const [empSal , setEmpSal] = useState(75000);
    const [empJobRole , setEmpJobRole] = useState("Teacher");

   const changeHandler = (e) => {
    if(e.target.name === "eId"){
        setEmpId(e.target.value);
    }
    else if(e.target.name === "eName"){
        setEmpName(e.target.value);
    }
    else if(e.target.name === "eSal"){
        setEmpSal(e.target.value);
    }
    else{
        setEmpJobRole(e.target.value);
    }
   }

  return (
    <>
      <h4>Add Employee</h4>
      <div className="border">
      <div className="form-group row  m-2">
        <label htmlFor="empId" className="col-sm-3 col-form-label ">
          Emp Id:
        </label>
        <div className="col-sm-9">
          <input type="text"  onChange={changeHandler} className="form-control" id="empId" name="eId" placeholder="Enter Employee Id"/>
        </div>
      </div>
      <div className="form-group row m-2">
        <label htmlFor="name" className="col-sm-3 col-form-label">
          Name:
        </label>
        <div className="col-sm-9">
          <input type="text" onChange={changeHandler} className="form-control" id="name" name="eName" placeholder="Enter Employee Name" />
        </div>
      </div>
      <div className="form-group row m-2">
        <label htmlFor="salary" className="col-sm-3 col-form-label">
          Salary:
        </label>
        <div className="col-sm-9">
          <input type="text" onChange={changeHandler} className="form-control" id="salary" name="eSal" placeholder="Enter Employee Salary"/>
        </div>
      </div>
      <div className="form-group row m-2">
        <label htmlFor="jobRole" className="col-sm-3 col-form-label">
          JobRole:
        </label>
        <div className="col-sm-9">
          <input type="text"  onChange={changeHandler} className="form-control" id="jobRole" name="eJobRole" placeholder="Enter Employee Job Role" />
        </div>
      </div>
      </div>
      <button className="btn btn-primary mt-2" onClick={() => {
        let empObj = {
            id : empId,
            name : empName,
            Salary : empSal,
            JobRole : empJobRole
        }
        addEmp(empObj)
      }}>Add Emp</button>
      
    </>
  );
}
