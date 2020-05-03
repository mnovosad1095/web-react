import Grid from '@material-ui/core/Grid';
import React from 'react';
import Component from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea'


import ImageChords from '../img/chords.jpg'; // Import using relative path
import ImageInters from '../img/intervals1.jpg';
import ImageProgs from '../img/sheet-music.jpg';

const card =  (theme) => ({
    paddingTop: "25px",
    textAlign: 'center',
    height:170,
    color: theme.palette.grey[800],
    '&:hover':{
        color: theme.palette.grey[900],
    },
});


const useStyles = makeStyles((theme) => ({
    grid: {
        marginTop:"10%",
        width:700,
        justifyContent:"center",
        
    },
    cardChord: Object.assign({}, card(theme), {"backgroundImage": `url(${ImageChords})`}),
    cardProg: Object.assign({}, card(theme), {"backgroundImage": `url(${ImageInters})`}),
    cardInters: Object.assign({}, card(theme), {"backgroundImage": `url(${ImageProgs})`}),
}));

function gridComp(className, xs, text) {
    return (
    <Grid item xs={xs}>
        <CardActionArea onClick={()=>{alert("not developed yet")}}>
            <Card className={className}>
                <CardContent>
                    <Typography variant="h5">{text}</Typography>
                </CardContent>
            </Card>
        </CardActionArea>
    </Grid>
    )
}


 
export default function HomeGrid() {
    const classes = useStyles();
    return ( 
        <div >
            <Grid container spacing={1} className={classes.grid}>
                {gridComp(classes.cardInters, 12, "Intervals")}
                {gridComp(classes.cardInters, 6, "Progressions")}
                {gridComp(classes.cardInters, 6, "Chords")}
            </Grid>
        </div>
    );
};