import React from 'react';
import ShowDetails from './ShowDetails';
import Container from '@material-ui/core/Container';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

export default function App() {
  const classes = useStyles();

  return (<div className={classes.root}>
    <AppBar position="static">
      <Toolbar>
        <Typography align="center" variant="h6" className={classes.title}>
          Movie App  
        </Typography>
      </Toolbar>
    </AppBar>
    <Container maxWidth="sm">
      <ShowDetails />
    </Container>
  </div>
  );
}
