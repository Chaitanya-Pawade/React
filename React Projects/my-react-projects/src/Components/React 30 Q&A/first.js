// map & filter

import { useEffect, useState } from "react";

import axios from "axios";

export default function First() {
  const [users, setUsers] = useState([]);
  const [numbers, setNumbers] = useState([1,2,3,4,5,6,7,8,9,10])
  const fetchData = async () => {
    //     // const usersData = await axios.get("https://jsonplaceholder.typicode.com/users");//then((res) =>  setUsers(res.data))
    //     // setUsers(usersData.data)

    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();

    //     fetch("https://jsonplaceholder.typicode.com/users")
    //    .then((res) => res.json())
    //    .then((data) => {
    //     setUsers(data)
    //    })
  }, []);

  // const mappedArray = () => {
  //   let mappedData = users.map((user) => user.id * 2);
  //   console.log(mappedData);
  // };
  // const filteredArray = () => {
  //   let filteredData = users.filter((user) => user.id >=5);
  //   setUsers(filteredData)
  // }
 
  const mapAndFilteredArray = () => {
    let mapping = numbers.filter((num) => num<=5)
    let all = mapping.map((no) => no * no)
    setNumbers(all)
  }
  // console.log(users);
  return (
    <>
      <h2>Users</h2>
      {/* <div className="card">
        {users.map((user) => (
          <div className="card-body">
            <p>{user.name}</p>
            <p>{user.username}</p>
          </div>
        ))} */}
        {/* <button onClick={mappedArray}>Map</button> */}
        {/* <button onClick={filteredArray}>Filter</button> */}

          {
            numbers.map((num,ind) => {
             return <div key={ind}>{num}</div>
            })
          }
        <button onClick={mapAndFilteredArray}>map & filter</button>
      {/* </div> */}

      
    </>
  );
}
