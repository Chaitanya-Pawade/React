import { useState } from "react";
let initialArtists = [
  { id: 0, name: "Marta Colvin Andrade" },
  { id: 1, name: "Lamidi Olonade Fakeye" },
  { id: 2, name: "Louise Nevelson" },
];
let initialCounters = [0, 0, 0];
function Arr() {
  const [name, setName] = useState("");
  const [artists, setArtists] = useState(initialArtists);
  const [counters, setCounters] = useState(initialCounters);
  return (
    <>
      <h1>Array & useState</h1>
      <div>
        <h2>adding to an array</h2>
        <input value={name} onChange={(e) => setName(e.target.value)}></input>
        <button
          onClick={() => {
            setArtists([...artists, { name: name }]);
          }}
        >
          add
        </button>
        <ul>
          {artists.map((artist) => (
            <li>{artist.name}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>removing from array</h2>
        {/* <ul>
          {artists.map((artist) => (
            <li key={artist.id}>
              {artist.name}{" "}
              <button
                onClick={() => {
                  setArtists(artists.filter((a) => a.id !== artist.id));
                }}
              >
                delete
              </button>
            </li>
          ))}
        </ul> */}
      </div>
      <div></div>
    </>
  );
}

export default Arr;
