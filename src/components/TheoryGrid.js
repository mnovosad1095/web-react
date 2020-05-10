import React from 'react';
import {GridList, GridListTile, Card, Typography, CardContent} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));

export default function TheoryGrid() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cellHeight={200} spacing={1} cols={2.5}>
        <GridListTile>
        <Card className={classes.titleBar}>
				<CardContent>
					<Typography variant="h5">Text</Typography>
						</CardContent>
			</Card><Card className={classes.titleBar}>
				<CardContent>
					<Typography variant="h5">Text</Typography>
						</CardContent>
			</Card><Card className={classes.titleBar}>
				<CardContent>
					<Typography variant="h5">Text</Typography>
						</CardContent>
			</Card>
        </GridListTile>
      </GridList>
    </div>
  )
}