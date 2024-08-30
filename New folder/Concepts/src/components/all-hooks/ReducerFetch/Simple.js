import { useEffect, useState } from "react";
import axios from "axios";

function Simple() {
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState({});
  const [error, setError] = useState("");
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/3")
      .then((res) => {
        setLoading(false);
        setPost(res.data);
        setError("");
      })
      .catch((e) => {
        setLoading(false);
        setPost({});
        setError("something wrong");
      });
  }, []);
  return (
    <>
      <h1>1.simple fetch using state</h1>
      <h1>{loading ? "loading" : post.title}</h1>
      <h1>{error ? error : null}</h1>
    </>
  );
}

export default Simple;
