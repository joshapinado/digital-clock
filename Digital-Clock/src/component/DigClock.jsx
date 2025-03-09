import React from 'react';
import useClockLogic from './Phrase';
import ClockDisplay from './Clock';

const DigitalClock = () => {
  const clockData = useClockLogic();
  
  return <ClockDisplay clockData={clockData}/>;
};

export default DigitalClock;