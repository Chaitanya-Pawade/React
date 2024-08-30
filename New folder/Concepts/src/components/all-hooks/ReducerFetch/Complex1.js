import axios from "axios";
import { useEffect, useReducer } from "react";

const intialState = {
  post: "",
  error: "",
  loading: true,
};

function myReducer(state, action) {
  switch (action.type) {
    case "success":
      return {
        post: action.data.title,
        error: "",
        loading: false,
      };
    case "error":
      return {
        post: "",
        error: "something wrg",
        loading: false,
      };
  }
}

function Complex1() {
  const [posts, dispatchPost] = useReducer(myReducer, intialState);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        dispatchPost({ type: "success", data: response.data });
      })
      .catch((error) => {
        dispatchPost({ type: "error" });
      });
  });
  return (
    <>
      <h2>2 fetch using reducer</h2>
      <h2>{posts.loading ? "please wait " : null}</h2>
      {posts.error ? <h2>{posts.error}</h2> : <h2>{posts.post}</h2>}
    </>
  );
}

export default Complex1;
