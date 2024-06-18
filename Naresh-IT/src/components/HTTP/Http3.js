import axios from "axios";
import React from "react";

export default function Http3() {
  const FetchData = async () => {
    const promise1 = axios.get("https://jsonplaceholder.typicode.com/todos");
    const promise2 = axios.get("https://jsonplaceholder.typicode.com/users");
    try {
      const [response1, response2] = await axios.all([promise1, promise2]);
      console.log(response1.data, response2.data);
    } catch (err) {
      console.log("Something went wrong");
    }
  };
  return (
    <>
      <h3>Multiple requests with Axios</h3>
      <button onClick={FetchData}>Fetch Data</button>
    </>
  );
}
