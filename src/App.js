import React from 'react';
import './App.css';
import { Container, Typography, makeStyles } from '@material-ui/core';
import Countdown from './components/Countdown';

const useStyles = makeStyles(() => ({
  root: {
    marginTop: '50px',
    textAlign: 'center',
  },
  header: {
    backgroundColor: '#f57c00',
    borderRadius: '15px'
  }
}));

function App() {
  const classes = useStyles();

  return (
    <Container maxWidth="sm" className={classes.root}>
      <div className={classes.header}>
        <Typography variant="h3" align="center" gutterBottom>
          <strong>SIMPLE COUNTDOWN</strong>
        </Typography>
      </div>
      <Countdown />
    </Container>
  );
}

export default App;
