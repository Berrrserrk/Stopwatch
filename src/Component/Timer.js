import './Timer.css';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlay,faPause,faSquare  } from '@fortawesome/free-solid-svg-icons'

 const Timer = () => {
  const [time, setTime] = React.useState(0);
  const [timerOn, setTimerOn] = React.useState(false);

  React.useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!timerOn) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerOn]);
  
  const minutes = ("0" + Math.floor((time / 60000) % 60)).slice(-2);
  const seconds = ("0" + Math.floor((time / 1000) % 60)).slice(-2);
  const milliseconds = ("0" + ((time / 10) % 100)).slice(-2); 

  const handleStart = () => setTimerOn(true);
  const handlePause = () => setTimerOn(false);
  const handleReset = () => setTime(0);

  return (
    <div className="Timers">
      <div id="display">
        <span>{minutes}:</span>
        <span>{seconds}:</span>
        <span>{milliseconds}</span>
      </div>

      <div className="icons">
        <span id="start">
        {!timerOn && time === 0 && (
          <FontAwesomeIcon icon ={faPlay} onClick={handleStart}/>
        )}
        </span>
        <span id="pause">
        {timerOn && <FontAwesomeIcon icon={faPause}  onClick={handlePause}/>}
        </span>
        <span id="square">
        {!timerOn && time > 0 && (
          <FontAwesomeIcon icon={faSquare} onClick={handleReset}/>
        )}
        </span>
        <span id="play">
        {!timerOn && time > 0 && (
          <FontAwesomeIcon icon={faPlay}  onClick={handleStart}/>
        )}
        </span>
      </div>
    </div>
  );
 };

export default Timer;