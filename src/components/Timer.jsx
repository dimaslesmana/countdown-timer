import React, { Fragment, useRef } from 'react';
import Countdown, { zeroPad } from 'react-countdown';
import { Typography } from '@material-ui/core';
import { Start, Pause, Reset, Resume } from './ActionButtons';

const Timer = ({
  countdownDisplay,
  hour, minute, second,
  started, paused,
  handleStart, handlePause, handleReset
}) => {

  let newHour = 0;
  let newMinute = 0;
  let newSecond = 0;

  const timerRef = useRef();
  const total = (hour * 3600000) + (minute * 60000) + (second * 1000);

  const handleStartAction = () => {
    if (total > 0) {
      timerRef.current.start();
      handleStart();
    }
  };

  const handlePauseAction = () => {
    timerRef.current.pause();
    handlePause(newHour, newMinute, newSecond);
  };

  const handleResetAction = () => {
    timerRef.current.stop();
    handleReset();
  };

  const renderer = ({ hours, minutes, seconds, completed }) => {
    newHour = hours;
    newMinute = minutes;
    newSecond = seconds;

    if (completed && started) {
      return (
        <Fragment>
          <Typography variant="h4" align="center">
            <strong>BOOOM!!!!!</strong>
          </Typography>
          <Reset handleResetAction={handleResetAction} />
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          {countdownDisplay(zeroPad(hours), zeroPad(minutes), zeroPad(seconds))}
          {started ? (
            <Fragment>
              {paused ? (
                <Resume handleResumeAction={handleStartAction} />
              ) : (
                  <Pause handlePauseAction={handlePauseAction} />
                )
              }
              <Reset handleResetAction={handleResetAction} />
            </Fragment>
          ) : (
              <Start handleStartAction={handleStartAction} />
            )
          }
        </Fragment>
      );
    }
  };

  return (
    <Countdown
      date={Date.now() + total}
      autoStart={false}
      ref={timerRef}
      renderer={renderer}
    />
  );
};

export default Timer;
