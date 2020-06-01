import React from 'react';
import {Typography, Card, CardContent, CardActionArea, makeStyles} from "@material-ui/core"
import {Synth, Transport} from "tone"


const useStyles = makeStyles((theme) => ({
  card: {
    height:"100px",
    width:"100px",
    backgroundColor: "grey",
    opacity: "0.7",
    textAlign: "center",
  },
  
  text: {
    color:"black"
  },
  high: {
    height:"100px",
    width:"100px",
    backgroundColor: "red",
    opacity: "0.7",
    textAlign: "center",
  },
}));

export default function Chord(props){
  const classes = useStyles();
  let classCard = classes.card;
  if (props.playing) {classCard  = classes.high}
  
  return (
    
      <Card className={classCard}>
        <CardActionArea onClick={props.onChordClick}>
          <CardContent>
            <Typography variant="h2" className={classes.text}>{props.name}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    
  )
}
