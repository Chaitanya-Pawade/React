import { useState } from "react"


export default function RandomColor(){
    const [bgColor,setBgColor] = useState('#ffffff')
    function changeBgColor(){
    const RandomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    setBgColor(RandomColor);
    document.body.style.backgroundColor = RandomColor;
    }
    return (
        
        <div style={{ backgroundColor: bgColor}}>
        <button onClick={changeBgColor}>Change bg-color</button>
        </div>
    )
}