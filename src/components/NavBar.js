import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';


const useStyles = makeStyles((theme) => ({
    root: {
        justifyContent:"center",
        marginLeft:"10px",
        // marginRight:"10%"
    },

    text: {
        color:theme.palette.grey[800]
    }
    
    
}));

function navButton(text, classes) {
    return (
    <Grid item xs={3} lg={2}>
        <Typography className={classes.text}  component="h2" variant="h4">
            <Link underline="none" href="#" color="inherit">{text}</Link>
        </Typography>
    </Grid>
    )
}


export default function NavBar() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={24} justify="center">
                {navButton("Home", classes)}
                {navButton("Playground", classes)}
            </Grid>
        </div>
    );
}