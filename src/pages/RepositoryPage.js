import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
}));

export function RepositoryPage() {
  const classes = useStyles();
  return (
      <div className={classes.root}>
        <Typography paragraph>Repository Page</Typography>
      </div>
  );
}
