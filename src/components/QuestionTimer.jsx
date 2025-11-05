import { useEffect, useState } from "react";
export default function QuestionTimer({ timeout, onTimeout }) {
  const [remainingTime, setRemainingTime] = useState(timeout);
  useEffect(() => {
    const timer = setTimeout(onTimeout, timeout);
    return () => {
      clearTimeout(timer);
    };
  }, [timeout, onTimeout]);
  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => {
        return prevRemainingTime -10;
      });
    }, 10);
    return () => {
      clearInterval(interval);
    };
  }, []);
  const roundedRemainingTime = Math.round(remainingTime/1000);
  return (
    <div className="progressContainer">
      <div id="timer" className={roundedRemainingTime <= 5 ? roundedRemainingTime % 2 != 0 ? "bigTimer redText" : "smallTimer redText": "smallTimer"} >{roundedRemainingTime}</div>
      <progress id="question-time" max={timeout} value={remainingTime} />
    </div>
  );
}
