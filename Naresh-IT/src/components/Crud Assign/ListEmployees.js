import React from "react";

export default function ListEmployees({info,DeleteEmp}){
  return (
    <>
      
      <h4>Employee Table</h4>
      <table className="table table-bordered table striped">
        <thead>
            <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Salary</th>
          <th>Job Role</th>
          <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {info.map((emp, ind) => {
            return (
              <tr key={ind}>
                <td>{emp.id}</td>
                <td>{emp.name}</td>
                <td>{emp.Salary}</td>
                <td>{emp.JobRole}</td>
                <td>
                  <button onClick = {() => DeleteEmp(emp.id) } className="btn btn-danger">Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    
    </>
  );
}

//! Note : 
//?  if function without passing an argument then we can directly pass that function name wherever we needed.
//? <button onClick = {f1} >Greetings</button>

//? but if function is having argument then we can not directly pass that function , we have have to use like line no 28 (<button onClick = {() => Delete(emp.id) } className="btn btn-danger">Delete</button>)