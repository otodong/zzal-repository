import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  }
}));

export function MainContent() {
  const classes = useStyles();
  return (
      <div className={classes.root}>
        <Typography paragraph>Main Page</Typography>
      </div>
  );
}
