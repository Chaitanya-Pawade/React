// useEffect is a React Hook that lets you synchronize a component with an external system.
//? useEffect returns undefined.
// Effects only run on the client. They don’t run during server rendering.   

import React, { useEffect, useState } from 'react'

export default function UseEffect() {

    const [timer , setTimer] = useState(0)

    useEffect(() => {
        setTimeout(() => {
            setTimer(timer + 1)
        },2000)
    })
  return (
    <>
    <h2>Timer : {timer}</h2>
    </>
  )
}
