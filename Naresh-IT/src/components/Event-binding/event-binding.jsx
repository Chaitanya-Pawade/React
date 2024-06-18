//? Function component mount event is defined by using a hook called "useEffect".

import { useEffect, useState } from "react"


export function EventBinding(){

    const [userName , setUserName] = useState('');

    useEffect(() => {
        setUserName('Chaitanya');
    })


    return(
        <>
        <h2>Event binding using Hook "useEffect"</h2>
        <h2>Hello { userName }</h2>
        </>
    )
}

