import User from "./User";

function Child2P() {
  function ToChild(data) {
    alert(data);
  }
  return (
    <div>
      <h2>1.Lift UP</h2>
      <h3>parent comp</h3>
      <User ToChild={ToChild}></User>
    </div>
  );
}

export default Child2P;
