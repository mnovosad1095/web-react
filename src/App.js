import React from 'react';
import './App.css';
import HomeGrid from './components/HomeGrid';
import NavBar from './components/NavBar';
import { makeStyles } from '@material-ui/core/styles';
import StickyFooter from './components/footer';


const classes = {
  root: {
    height: '100vh',
    flexDirection: "column",
    display:'flex'
  }
}

function App() {
  return (<div className={classes.root}><center><NavBar/><HomeGrid /></center><StickyFooter /></div>);
}

export default App;
