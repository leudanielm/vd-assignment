import React from 'react';
import Container from '@material-ui/core/Container';
import { Switch, Route } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import ShowDetails from './ShowDetails';
import EpisodeDetails from './EpisodeDetails';

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
      <Switch>
        <Route path="/" exact component={ShowDetails} />
        <Route path="/episode/:id" exact component={EpisodeDetails} />
      </Switch>
    </Container>
  </div>
  );
}
