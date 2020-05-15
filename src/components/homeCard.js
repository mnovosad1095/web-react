import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles((theme) => ({
    root: {
        width: 400,
        height:340,
    },
    card: {
        textAlign: "center",
    }
}));

export default function HomePageGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={1}>
                <Grid item xs={6}>
                    <Card className={classes.card}>Some stuff</Card>
                </Grid>
                <Grid item xs={3}>
                    <Card className={classes.card}>Some stuff2</Card>
                </Grid>
                <Grid item xs={3}>
                    <Card className={classes.card}>Some stuff3</Card>
                </Grid>
            </Grid>
        </div>
    )
}