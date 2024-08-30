import React, { useEffect, useRef, useState } from 'react'

export default function UseRef() {

    // const [count, setCount] = useState(0);

    const count = useRef(10)
    useEffect(() => {
        count.current = count.current + 1
    
    })
  return (
    <>
    <h2>Render Count : {count.current}</h2>
    </>
  )
}
// when we don't want to re render the component when any state is changed then useRef is used
// also useRef can be used to modify dom directly