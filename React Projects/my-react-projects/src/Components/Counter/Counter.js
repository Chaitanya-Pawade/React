import React, { useState , useEffect } from 'react';

export default function Counter() {
  const [isStart, setIsStart] = useState(false);
  const [hours,setHours] = useState(0);
  const [minutes,setMinutes] = useState(0);
  const [seconds , setSeconds] = useState(0);
  const [timerId,setTimerId] = useState(0)
  const handleStart = () => {
    setIsStart(true);

  };
   const runTimer = (sec,min,hr,tid) => {
          if(sec > 0){
            setSeconds((s) => s - 1);
          }else if(sec === 0 && min >0){
            setMinutes((m) => m - 1);
            setSeconds(59);
          }else {
            setHours((h) => h - 1);
            setMinutes(59);
            setSeconds(59);
          }
   }
  const handleReset = () => {
    setIsStart(false)
  } 
  const handleHours = (e) => {
    setHours(e.target.value)
    
  }
  const handleMinutes = (e) => {
    setMinutes(e.target.value)
  }
  const handleSeconds = (e) => {
    setSeconds(e.target.value)
  }

  useEffect(() => {
    let tid;
    if(isStart){
        tid = setInterval(() => {
         runTimer(seconds,hours,minutes,tid)
        },1000)
        setTimerId(tid)
    }

    return () => {
      clearInterval(tid)
    }
  },[isStart,hours,minutes,seconds])
  return (
    <>
      <h2>Countdown Timer</h2>
      <br /><br /><br />
      {!isStart ? (
        <div>
          <input id ='hours'onChange={handleHours} placeholder='HH' style={{ width: 55, height: 40, margin: 10, textAlign: 'center' }} />
          <input id = 'minutes' onChange={handleMinutes}placeholder='MM' style={{ width: 55, height: 40, margin: 10, textAlign: 'center' }} />
          <input id = 'seconds' onChange={handleSeconds}placeholder='SS' style={{ width: 55, height: 40, margin: 10, textAlign: 'center' }} />
          <button
            onClick={handleStart}
            style={{ width: 70, height: 50, margin: 20, backgroundColor: 'green', color: 'white', borderRadius: 5 }}
          >
            Start
          </button>
        </div>
      ) : (
        <div>
          <div style={{ fontSize: '3em' }}>
            <span>{hours}</span>
            <span>:</span>
            <span>{minutes}</span>
            <span>:</span>
            <span>{seconds}</span>
          </div>
          <div>
            <button style={{backgroundColor:'purple',width:70 ,color:'white',margin:10,padding:7,borderRadius:5}}>Pause</button>
            <button onClick={handleReset}style={{backgroundColor:'purple', width:70,color:'white',margin:10,padding:7,borderRadius:5}}>Reset</button>

          </div>
        </div>
      )}
    </>
  );
}
