import React, { Fragment, useState } from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';
import TimerIcon from '@material-ui/icons/Timer';
import Timer from './Timer';
import { ArrowUp, ArrowDown } from './Arrows';

const useStyles = makeStyles(() => ({
  timer: {
    marginTop: '15px',
    marginBottom: '15px'
  }
}));

const Countdown = () => {
  const classes = useStyles();

  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [started, setStarted] = useState(false);
  const [paused, setPaused] = useState(false);

  const handleStart = () => {
    paused ? setPaused(false) : setStarted(!started);
  };

  const handlePause = (newHour, newMinute, newSecond) => {
    setPaused(true);
    setHour(newHour);
    setMinute(newMinute);
    setSecond(newSecond);
  };

  const handleReset = () => {
    setStarted(false);
    setPaused(false);
    setHour(0);
    setMinute(0);
    setSecond(0);
  };

  const hoursPlusHandler = () => {
    setHour(hour + 1);
  };

  const hoursMinusHandler = () => {
    if (hour > 0) {
      setHour(hour - 1);
    }
  };

  const minutesPlusHandler = () => {
    if (minute < 59) {
      setMinute(minute + 1);
    } else {
      setMinute(0);
      setHour(hour + 1);
    }
  };

  const minutesMinusHandler = () => {
    if (minute > 0) {
      setMinute(minute - 1);
    } else {
      if (hour > 0) {
        setMinute(59);
        setHour(hour - 1);
      }
    }
  };

  const secondsPlusHandler = () => {
    if (second < 59) {
      setSecond(second + 1);
    } else {
      setSecond(0);
      setMinute(minute + 1);
    }
  };

  const secondsMinusHandler = () => {
    if (second > 0) {
      setSecond(second - 1);
    } else {
      if (minute > 0) {
        setSecond(59);
        setMinute(minute - 1);
      }
    }
  };

  const countdownDisplay = (HH, MM, SS) => {
    return (
      <Fragment>
        {started ? (
          <Grid item xs>
            <Typography variant="h4" gutterBottom>Time Remaining</Typography>
          </Grid>
        ) : (
            <ArrowUp
              hoursPlusHandler={hoursPlusHandler}
              minutesPlusHandler={minutesPlusHandler}
              secondsPlusHandler={secondsPlusHandler}
            />
          )
        }
        <Grid container spacing={3} className={classes.timer}>
          <Grid item xs>
            <Typography variant="h4">{HH}</Typography>
          </Grid>
          <Grid item xs>
            <Typography variant="h4">{MM}</Typography>
          </Grid>
          <Grid item xs>
            <Typography variant="h4">{SS}</Typography>
          </Grid>
        </Grid>
        {started ? (
          <Grid item xs>
            <TimerIcon fontSize="large" />
          </Grid>
        ) : (
            <ArrowDown
              hoursMinusHandler={hoursMinusHandler}
              minutesMinusHandler={minutesMinusHandler}
              secondsMinusHandler={secondsMinusHandler}
            />
          )
        }
      </Fragment>
    );
  };

  return (
    <Timer
      countdownDisplay={countdownDisplay}
      hour={hour} minute={minute} second={second}
      started={started} paused={paused}
      handleStart={handleStart}
      handlePause={handlePause}
      handleReset={handleReset}
    />
  );
};

export default Countdown;
