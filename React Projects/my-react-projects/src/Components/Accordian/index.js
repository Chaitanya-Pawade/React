import React, { useState } from "react";
import data from "./data";
import "./style.css";

export default function Accordian() {
  const [selected, setSelected] = useState();
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multi, setMulti] = useState([]);

  function handleSingleData(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  function handleMultiData(getCurrentId) {
    let copyOfMultipleStore = [...multi];
    let findIndexOfCurrentId = copyOfMultipleStore.indexOf(getCurrentId);
    console.log(findIndexOfCurrentId);
    if (findIndexOfCurrentId === -1) copyOfMultipleStore.push(getCurrentId);
    else copyOfMultipleStore.splice(findIndexOfCurrentId, 1);
    setMulti(copyOfMultipleStore);
  }
  console.log(selected, multi);
  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        Enable Multi Accordians
      </button>
      <div className="accordian">
        {data &&
          data.map((data) => {
            return (
              <div key={data.id} className="accordian-item">
                <div
                  onClick={
                    enableMultiSelection
                      ? () => handleMultiData(data.id)
                      : () => handleSingleData(data.id)
                  }
                  className="title"
                >
                  <h3>
                    {data.question}
                    </h3>
                    <span>+</span>
                  </div>
                  
                  {enableMultiSelection ? (
                    multi.indexOf(data.id) !==
                    -1 && (<div className="content">{data.answer}</div>)
                  ) : selected === data.id ? (
                    <div className="content">{data.answer}</div>
                  ) : null}
                  {/* {selected === data.id ? (
                    <div className="content">{data.answer}</div>
                  ) : null} */}
                </div>
              
            );
          })}
      </div>
    </div>
  );
}
