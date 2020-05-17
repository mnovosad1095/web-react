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
    color:"white"
  }
}));

export default function Chord(props){
  const classes = useStyles();

  return (
    
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.text}>{props.name}</Typography>
        </CardContent>
      </Card>
    
  )
}
