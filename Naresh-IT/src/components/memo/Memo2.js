import React from "react";

 function Memo2({name}){
    
    return (
        <>
             {console.log(" memo2 rendered...")}
             <div>Memo2 - Child component</div>
             <div>Name from my parent is : {name} </div>
             {/* <div>Sur name from my parent is : {surname}</div> */}
        </>
   

    )
}

export default React.memo(Memo2);

//? When a component is wrapped in React.memo() , React renders the component only if the props changes which are passed to that component.