import React, {useContext} from "react";
import { Typography } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import { TempContext } from '../contexts';

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
}));

export function MainContent() {
  const classes = useStyles();
  const value = useContext(TempContext);
  return (
      <div className={classes.root}>
        <Typography paragraph>Main Page</Typography>
        {/* <Typography paragraph>{value.count}</Typography> */}
      </div>
  );
}
