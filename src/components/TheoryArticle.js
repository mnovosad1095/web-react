import React from 'react';
import {Typography, Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import  ChordArrayHandler  from '../data_handlers/ChordArrayHandler';
import Chord from "./Chord"
import ChordArray from './ChordArray'

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: "50px",
    paddingLeft: "7%",
    paddingRight: "7%"
  },
  mainHeader: {
    color: 'white',
    opacity: 0.8,
    maxWidth: "900px",
    marginBottom: "75px"
  },
  subHeader: {
    color: 'white',
    opacity: 0.9,
    textAlign: "right",
  },
  articleTextBody: {
    // maxWidth: "800px",
  },
  
  
}));

function ArticleMainHeader(classes, text) {
  return (
    <div>
      <Typography className={classes.mainHeader} variant='h1'>{text}</Typography>
    </div>
  )
}

function Subheader(classes, text) {
return (
  <div>
    <Typography className={classes.subHeader} variant="h3">{text}</Typography>
  </div>
  )
}

function Article(classes,headerText ,text) {
  return (
    <div width='100%'>
      <div className={classes.articleTextBody} >
        {Subheader(classes, headerText)}
        <Typography className={classes.subHeader} variant="body1">{text}</Typography>
      </div>
    </div>
    )
  }

export default function TheoryArticle() {
  const classes = useStyles();
  const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  return (
    <div className={classes.root}>
      {ArticleMainHeader(classes, "This is the main header")}
      <Grid container spacing={7}>
        <Grid item xs={5}><ChordArrayHandler chords={[{name:"C4", playing:true},{name:"C4", playing:false}]} /></Grid>
        <Grid item xs={7}>{Article(classes,"Another Header1", text)},</Grid>
        <Grid item xs={7}>{Article(classes,"Another Header2", text, )}</Grid>
        <Grid item xs={5}></Grid>
        <Grid item xs={5}></Grid>
        <Grid item xs={7}>{Article(classes,"Another Header3", text)}</Grid>
        <Grid item xs={7}>{Article(classes,"Another Header4 ", text, )}</Grid>
        <Grid item xs={5}></Grid>
      </Grid>
    </div>
  )
}
