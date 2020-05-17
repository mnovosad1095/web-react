import React from 'react';
import { Synth, Transport, Part } from "tone";
import Chord from './Chord';
import { Card, CardActionArea, CardContent, CardActions, makeStyles } from '@material-ui/core';


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
  
  // static synth = Synth().toMaster();
  
  state = {
    chords: [],
    part: null
  }

  constructor (props) {
    super(props)

    Transport.bpm.value = 240;

    this.state.chords = props.chords;
    const mysynth = new Synth().toMaster();
    this.state.part = new Part(function(time, note) {
      mysynth.triggerAttackRelease(note, "8n", time);
    }, props.chords)
  }

  play(ev) {
    ev.preventDefault();
    this.state.part.start(0);
    Transport.toggle();
  }

  render() {
    // const classes = {
    //   root: {
    //     display: "inline-flex",
    //     backgroundColor:"grey"
    //   },
    //   list: {

    //   },
    //   listItem: {
    //     display: "inline-block",
    //     margin: "100px"
    //     // display: 'block'
    //   }
    // }

    const chords = this.state.chords.map((chordName) => 
          <li ><Chord name={chordName[1]} /></li>
          )

    return (
      <div  onClick={this.play.bind(this)}>
        <ul >
         {chords}
        </ul>
      </div>
    )
  }
}