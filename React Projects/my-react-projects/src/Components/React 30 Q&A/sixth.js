import axios from "axios";
import { useEffect, useState } from "react";

export default function Sixth() {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [usersArray, setUsersArray] = useState([]);

  console.log(usersArray);

  const handleInput = (e) => {
    setUserName(e.target.value);
  };
  const handleInput1 = (e) => {
    setUserAge(e.target.value);
  };

  const postData = () => {
    axios
      .post("https://668fb670c0a7969efd9934c1.mockapi.io/api/users", {
        name: userName,
        age: userAge,
        email: "nishant@gmail.com",
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const updateData = (id) => {
    axios
      .put(`https://668fb670c0a7969efd9934c1.mockapi.io/api/users/${id}`, {
        // name: "Jitendra",
        // age: 24,
        email: "raavi@gmail.com",
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteData = (id) => {
    axios
      .delete(`https://668fb670c0a7969efd9934c1.mockapi.io/api/users/${id}`)
      .then(() => {
        setUsersArray((preUsers) => preUsers.filter((user) => user.id !== id));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    axios
      .get("https://668fb670c0a7969efd9934c1.mockapi.io/api/users")
      .then((res) => {
        setUsersArray(res.data);
      })
      .catch((err) => {
        setUsersArray(err);
      });
  }, []);

  return (
    <>
      <input placeholder="name" onChange={handleInput} value={userName}></input>
      <input placeholder="age" onChange={handleInput1} value={userAge}></input>
      <button onClick={postData}>Post Data</button>
      <div>
        {usersArray.map((user, ind) => {
          return (
            <div key={ind}>
              <h3>{`${user.id} . ${user.name} `}</h3>
              <button onClick={() => updateData(user.id)}>Update</button>
              <button onClick={() => deleteData(user.id)}>Delete</button>
            </div>
          );
        })}
      </div>
    </>
  );
}
