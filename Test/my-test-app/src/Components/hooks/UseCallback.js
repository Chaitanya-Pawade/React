import React from 'react'

 const UseCallback = () => {
console.log("usecallback rendered");
return (
    <>
    <h2>UseCallback</h2>
    </>
)
}

export default React.memo(UseCallback)