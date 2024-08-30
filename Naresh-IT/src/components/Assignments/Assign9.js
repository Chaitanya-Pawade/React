//! Create todo app using useState

import React, { useState } from "react";

export default function Assign9() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const handleClick = () => {
    setText(text);
    console.log(text);
    setTodos([...todos, { mytext: text }]);

    setText("");
  };
  const deleteText = (index) => {
    setTodos(
      todos.filter((todo, id) => {
        return id !== index;
      })
    );
  };
  return (
    <>
      <h2>Todo App using useState</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ width: 200 }}
      ></input>
      <button onClick={handleClick} className=" btn btn-success m-3">
        Add
      </button>

      <ul>
        {todos.map((todo, ind) => {
          return (
            <li key={ind}>
              {todo.mytext}
              <button
                onClick={() => deleteText(ind)}
                className="btn btn-danger m-3"
              >
                delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
