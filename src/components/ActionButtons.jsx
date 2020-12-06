import React from 'react';
import { Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  button: {
    margin: '10px 6px'
  },
}));

export const Start = ({ handleStartAction }) => {
  const classes = useStyles();

  return (
    <Button
      variant="contained"
      color="inherit"
      onClick={handleStartAction}
      style={{ backgroundColor: '#2e7d32' }}
      className={classes.button}
      disableElevation>
      Start
    </Button>
  );
};

export const Resume = ({ handleResumeAction }) => {
  const classes = useStyles();

  return (
    <Button
      variant="contained"
      color="inherit"
      onClick={handleResumeAction}
      style={{ backgroundColor: '#2e7d32' }}
      className={classes.button}
      disableElevation>
      Resume
    </Button>
  );
};

export const Pause = ({ handlePauseAction }) => {
  const classes = useStyles();

  return (
    <Button
      variant="contained"
      onClick={handlePauseAction}
      style={{ backgroundColor: '#fdd835' }}
      className={classes.button}
      disableElevation>
      Pause
    </Button>
  );
};

export const Reset = ({ handleResetAction }) => {
  const classes = useStyles();

  return (
    <Button
      variant="contained"
      color="inherit"
      onClick={handleResetAction}
      style={{ backgroundColor: '#d32f2f' }}
      className={classes.button}
      disableElevation>
      Reset
    </Button>
  );
};
