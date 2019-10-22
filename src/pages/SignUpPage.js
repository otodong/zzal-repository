import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
}));

export function SignUpPage() {
  const classes = useStyles();
  return (
      <div className={classes.root}>
        <Typography paragraph>Signup Page</Typography>
      </div>
  );
}
