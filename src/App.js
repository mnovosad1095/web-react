import React from 'react';
import './App.css';
import HomeGrid from './components/HomeGrid';
import NavBar from './components/NavBar';
import { makeStyles } from '@material-ui/core/styles';
import StickyFooter from './components/footer';
import {Switch, Route, Redirect} from 'react-router-dom';
import PlayGround from './components/PlayGround';
import Theory from './components/Theory'


const classes = {
  root: {
    height: '100vh',
    flexDirection: "column",
    display:'flex',
  }
}

function App() {
  return (
  <div className={classes.root}>
      <img src="img/guitar_wallp.jpg" id="bg" alt=""></img>
      <center><NavBar/></center>
      <Switch>
        <Route path="/home">
          <center><HomeGrid /></center>
        </Route>
        <Route path="/playground">
          <PlayGround />
        </Route>
        <Route path="/theory">
          <Theory />
        </Route>
        <Redirect to="/home" />
      </Switch>
    <StickyFooter /> //TODO: Fix the footer
  </div>
  );
}

export default App;
