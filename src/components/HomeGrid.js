import React from 'react';
import {Grid, Card, CardContent, CardActionArea, Typography, makeStyles} from '@material-ui/core'
import {Link} from 'react-router-dom';

import ImageChords from '../img/chords.jpg'; // Import using relative path
import ImageInters from '../img/intervals1.jpg';
import ImageProgs from '../img/sheet-music.jpg';

const card =  (theme) => ({
	paddingTop: "25px",
	textAlign: 'center',
  height:170,
  opacity:0.6,
	color: theme.palette.grey[50],
	'&:hover':{
      color: 'white',
      backgroundColor: theme.palette.grey[800]
  },
  backgroundColor: theme.palette.grey[900]
});


const useStyles = makeStyles((theme) => ({
	grid: {
		marginTop:"10%",
		width:700,
		justifyContent:"center",
	},
	cardChord: card(theme),
	cardProg: Object.assign({}, card(theme), {"backgroundImage": `url(${ImageInters})`}),
  cardInters: Object.assign({}, card(theme), {"backgroundImage": `url(${ImageProgs})`}),
  text: {
    color: 'white',
    opacity:1
  }
}));

function gridComp(classes, xs, text) {
	return (
	<Grid item xs={xs}>
		<CardActionArea component={Link} to={`theory/${text}`}>
			<Card className={classes.cardChord}>
				<CardContent>
					<Typography className={classes.text} variant="h5">{text}</Typography>
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
				{gridComp(classes, 12, "Intervals")}
				{gridComp(classes, 6, "Progressions")}
				{gridComp(classes, 6, "Chords")}
			</Grid>
		</div>
	);
};
