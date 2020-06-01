import React from 'react';
import { Synth, Transport, Part } from "tone";
import Chord from './Chord';
import { Card, CardActionArea, CardContent, CardActions, makeStyles, Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  card: {
    height:"100px",
    width:"100px",
    backgroundColor: "black",
    textAlign: "center",
  },
  text: {
    color:"white"
  }
}));

export default class ChordArray extends React.Component{
  
  state = {
    chords: [],
  }

  constructor (props) {
    super(props)
    this.state.chords = props.chords;
  }

  render() {

    return (
      <div>
        <ul>
         {
           this.state.chords.map((chord, i) => <li>
             <Chord name={chord.name} playing={chord.playing} id={i} />
           </li>)
         }
        </ul>
      </div>
    )
  }
}