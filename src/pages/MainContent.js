import React, { useContext } from "react";
import { Button, Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import { TempContext } from "../contexts";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 1000,
    margin: "0 auto",
    marginTop: 30
  },
  container: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.primary
  },
  paper: {
    flexGrow: 1,
    minHeight: 300,
    margin: theme.spacing(1),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: 'column'
  },
  cardContent: {
    minHeight: 230
  },
  button: {
    margin: 30
  }
}));

export function MainContent() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={12} lg={4} className={classes.container}>
          <Card />
          <Card />
        </Grid>
        <Grid item xs={12} sm={12} lg={4} className={classes.container}>
          <Card />
        </Grid>
        <Grid item xs={12} sm={12} lg={4} className={classes.container}>
          <Card />
        </Grid>
      </Grid>
    </div>
  );
}

const Card = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <div className={classes.cardContent}>
        <Typography>컨텐츠영역</Typography>
      </div>
      <Button variant="contained" color="primary" className={classes.button}>
        Primary
      </Button>
    </Paper>
  );
};
