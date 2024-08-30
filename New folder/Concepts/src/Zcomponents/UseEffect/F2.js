import { useEffect, useState } from "react";
import axios from "axios";

function F2() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [post, setPost] = useState([]);
  const [start, setStart] = useState(false);
  const [val, setVal] = useState("");
  useEffect(() => {
    console.log("initial start", start);
    if (!start) {
      console.log("inside", start);
      return;
    }
    setLoading(true);
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${val}`)
      .then((res) => {
        setLoading(false);
        setPost(res.data);
        console.log(res.data);
        setError("");
      })
      .catch((e) => {
        setError("wrong");
        setPost("");
        setLoading(false);
      });
  }, [start, val]);

  function handleFetch() {
    console.log("handle click", start);
    setStart(true);
  }

  return (
    <div>
      <h2>fetcting exercise</h2>
      {/* <h2>{post.name}</h2> */}
      <h2>{loading ? "Loading" : post.name}</h2>
      <button onClick={handleFetch}>B</button>
      {/* <ul>
        {post.map((p) => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ul> */}
      <input value={val} onChange={(e) => setVal(e.target.value)}></input>
      <h2>{error}</h2>
    </div>
  );
}

export default F2;
