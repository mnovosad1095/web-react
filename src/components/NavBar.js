import React from 'react';
import {Typography, Grid, makeStyles} from '@material-ui/core';
import {Link, NavLink} from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    root: {
        justifyContent:"center",
        marginLeft:"10px",
        // marginRight:"10%"
    },

    text: {
        color:theme.palette.grey[200],
        'text-decoration': 'none',
        opacity:0.8
    },
    activeText: {
      color:theme.palette.grey[100],
        'text-decoration': 'none',
        opacity:1
    }
}));


function navButton(text,to, classes) {
    return (
    <Grid item xs={3} lg={2}>
        <Typography component="h2" variant="h4">
            <NavLink 
            to={to} 
            activeClassName={classes.activeText}
            className={classes.text} 
            >{text}</NavLink>
        </Typography>
    </Grid>
    )
}


export default function NavBar() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={24} justify="center">
                {navButton("Home", "/home", classes)}
                {navButton("Playground", "/playground", classes)}
            </Grid>
        </div>
    );
}