import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import {Link, Typography, makeStyles} from '@material-ui/core'


function Copyright(classes) {
  return (
    <Typography className={classes.text} variant="body2" color="textSecondary">
      {'Copyright © '}
      <Link color="inherit" href="#">
        My Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    // backgroundColor:theme.palette.grey[700],
  },
  text: {
    color: 'white',
    opacity: 0.6
  }
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body1" className={classes.text}>A simple music theory guide</Typography>
          {Copyright(classes)}
        </Container>
      </footer>
    </div>
  );
}