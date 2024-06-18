import React, { useState, useEffect } from 'react';

function CDMuseEffect() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    // Function to update state with the latest mouse position
    const logMousePosition = e => {
        console.log("Mouse listener called");
        setX(e.clientX);
        setY(e.clientY);
    };

    // useEffect to add and remove the mousemove event listener 
    // This useEffect will act like a componentDidMount

    useEffect(() => {
        console.log('Component did mount - useEffect called');
        window.addEventListener('mousemove', logMousePosition);

       // Cleanup function to remove the event listener

       // This useEffect part will act like a componentWillUnmount
        return () => {
            console.log('Component will unmount - Cleanup function called');
            window.removeEventListener('mousemove', logMousePosition);
        };
    }, []);  // Empty dependency array makes this effect run only once

    return (
        <div>
            <p>CDMuseEffect</p>
            <h3>Mouse Pointer Position = X: {x} & Y: {y}</h3>
        </div>
    );
}

export default CDMuseEffect;