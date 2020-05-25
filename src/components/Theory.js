import React from 'react';
import {Switch, Route, Redirect, useRouteMatch} from 'react-router-dom';
import TheoryArticle from './TheoryArticle';
import HomeGrid from './HomeGrid';
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  }
}));

export default function Theory(props) {
  const classes = useStyles();
  return (
    <div className={classes.roor}> 
      <Switch>
        <Route path={`/theory/Chords`}>
          <TheoryArticle />
        </Route>
        <Route path={`/theory/Intervals`}>
          <TheoryArticle />
        </Route>
        <Route path={`/theory/Progressions`}>
          <TheoryArticle />
        </Route>
        <Redirect to="/home" />
      </Switch>
    </div>
  )
}