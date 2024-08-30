import { useReducer, useState } from "react";

const intialState = [];

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, { id: Date.now(), text: action.payload }];
    case "REMOVE_TODO":
      return state.filter((todo) => todo.id !== action.payload);
    case "UPDATE_TODO":
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.text }
          : todo
      );
    default:
      return state;
  }
};
function Todo() {
  const [text, setText] = useState("");
  const [state, dispatch] = useReducer(reducer, intialState);
  const [editId, setEditId] = useState("");
  const handleEdit = (todo) => {
    setText(todo.text);
    setEditId(todo.id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editId) {
      dispatch({ type: "UPDATE_TODO", payload: { id: editId, text } });
      setEditId(null);
    } else {
      dispatch({ type: "ADD_TODO", payload: text });
    }
    setText("");
  };

  return (
    <>
      <h2>Todo App</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></input>

        <button type="submit">{editId ? "Update" : "Add"}</button>
      </form>
      <ul>
        {state.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handleEdit(todo)}>Edit</button>
            <button
              onClick={() =>
                dispatch({ type: "REMOVE_TODO", payload: todo.id })
              }
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todo;
