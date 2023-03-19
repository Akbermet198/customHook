import { useEffect, useState } from "react";

export const useTimer = () => {
  const [inputState, setInputState] = useState("");
  const [seconds, setSeconds] = useState(0);
  const [timerState, setStartTimer] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (timerState) {
        setSeconds((prevCount) => +prevCount - 1);
      }
    }, 1000);
    if (seconds <= 0) {
      setStartTimer(false);
    }
    return () => clearInterval(interval);
  }, [timerState, seconds]);

  const stopTimer = () => {
    setStartTimer(false);
  };

  //inputState
  const onChangeHandler = (event) => {
    setInputState(event.target.value);
  };
  //start
  const startTimer = () => {
    setSeconds(inputState * 60);
    setStartTimer(true);
  };
  
  const restartTimer = () => {
    setStartTimer(false);
    setSeconds(inputState * 60);
    setStartTimer(true);
  };
  return {
    seconds,
    stopTimer,
    inputState,
    onChangeHandler,
    startTimer,
    restartTimer,
  };
};
