import { useState, useEffect } from 'react';

const useClockLogic = () => {
  const [time, setTime] = useState(new Date());
  const [isPaused, setIsPaused] = useState(false);
  const [is24HourFormat, setIs24HourFormat] = useState(false);

  useEffect(() => {
    let timerID;
    
    if (!isPaused) {
      timerID = setInterval(() => {
        setTime(new Date());
      }, 1000);
    }

    return () => {
      clearInterval(timerID);
    };
  }, [isPaused]);

  const formatTimeUnit = (unit) => {
    return unit.toString().padStart(2, '0');
  };

  const hours = is24HourFormat 
    ? formatTimeUnit(time.getHours()) 
    : formatTimeUnit(time.getHours() % 12 || 12);
  const minutes = formatTimeUnit(time.getMinutes());
  const seconds = formatTimeUnit(time.getSeconds());
  const ampm = is24HourFormat ? '' : (time.getHours() >= 12 ? 'PM' : 'AM');

  const day = time.toLocaleDateString('en-US', { weekday: 'long' });
  const month = time.toLocaleDateString('en-US', { month: 'long' });
  const date = time.getDate();

  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  const toggleFormat = () => {
    setIs24HourFormat(!is24HourFormat);
  };

  return {
    hours,
    minutes,
    seconds,
    ampm,
    day,
    month,
    date,
    isPaused,
    togglePause,
    is24HourFormat,
    toggleFormat
  };
};

export default useClockLogic;