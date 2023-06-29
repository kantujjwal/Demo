import React, { useState, useEffect, useRef } from "react";
import { Container } from "react-bootstrap";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // Function to update the seconds state every second
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    // Cleanup function to stop the timer when the component unmounts
    return () => {
      clearInterval(timer);
    };
  }, []);

  // timer watch
  const [time, setTime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
  });

  useEffect(() => {
    let intervalId;

    const startTimer = () => {
      intervalId = setInterval(() => {
        setTime((prevTime) => {
          let { hours, minutes, seconds, milliseconds } = prevTime;

          milliseconds += 10;
          if (milliseconds >= 1000) {
            seconds++;
            milliseconds = 0;
          }
          if (seconds >= 60) {
            minutes++;
            seconds = 0;
          }
          if (minutes >= 60) {
            hours++;
            minutes = 0;
          }

          return { hours, minutes, seconds, milliseconds };
        });
      }, 10);
    };

    startTimer();

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  // stop watch
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const intervalRef = useRef(null);

  const startStopwatch = () => {
    if (!isRunning) {
      const startTime = Date.now() - elapsedTime;
      intervalRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startTime);
      }, 10);
      setIsRunning(true);
    }
  };

  const stopStopwatch = () => {
    if (isRunning) {
      clearInterval(intervalRef.current);
      setIsRunning(false);
    }
  };

  const resetStopwatch = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setElapsedTime(0);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = Math.floor((time % 1000) / 10);
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}:${milliseconds.toString().padStart(2, "0")}`;
  };

  // Real-Time Watch

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const formatTimes = (time) => {
    const hours = time.getHours().toString().padStart(2, "0");
    const minutes = time.getMinutes().toString().padStart(2, "0");
    const seconds = time.getSeconds().toString().padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div className="pt-3 pb-3">
      <Container className="mt-5 pt-5 pb-5">
        <h1 className="text-center mb-4">Timer</h1>
        <p>Seconds: {seconds}</p>
        <br />
        <div>
          <h1 className="text-center mb-4">Timer</h1>
          <p>
            {String(time.hours).padStart(2, "0")}:
            {String(time.minutes).padStart(2, "0")}:
            {String(time.seconds).padStart(2, "0")}:
            {String(time.milliseconds).padStart(3, "0")}
          </p>
        </div>
        <br />
        <div>
          <h1 className="text-center mb-4">Stopwatch</h1>
          <p>{formatTime(elapsedTime)}</p>
          <button className="btn" onClick={startStopwatch}>
            Start
          </button>
          <button className="btn" onClick={stopStopwatch}>
            Stop
          </button>
          <button className="btn" onClick={resetStopwatch}>
            Reset
          </button>
        </div>
        <div>
          <h1 className="text-center mb-4">Real-Time Watch</h1>
          <p>{formatTimes(currentTime)}</p>
        </div>
      </Container>
    </div>
  );
};

export default Timer;
