import React , { useContext } from "react";
import {
  Grid,
  Paper,
  Divider,
  Button,
  TextField,
  Typography,
  Link
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { useHistory } from 'react-router'

import { TempContext } from '../contexts'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 400,
    margin: "0 auto",
    marginTop: 30
  },
  container: {
    minHeight: 600
  },
  topWrapper: {
    height: 400,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: theme.spacing(3)
  },
  bottomWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: theme.spacing(3)
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 300
  },
  button: {
    width: 200,
    margin: theme.spacing(3)
  }
}));

export function SignUpPage() {
  const classes = useStyles();
  const value = useContext(TempContext)
  const { signin, onChangeSign } = value;
  const history = useHistory();
  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item lg>
          <Paper className={classes.container}>
            <form noValidate autoComplete="off">
              <div className={classes.topWrapper}>
                <div style={{ height: 120 }}>
                  <Typography variant="h5" component="h3">
                    Signup page
                  </Typography>
                </div>
                <TextField
                  id="outlined-name"
                  label="Name"
                  className={classes.textField}
                  // value={values.name}
                  // onChange={handleChange("name")}
                  margin="normal"
                  // variant="outlined"
                />
                <TextField
                  id="outlined-name"
                  label="Password"
                  className={classes.textField}
                  type="password"
                  // value={values.name}
                  // onChange={handleChange("name")}
                  margin="normal"
                  // variant="outlined"
                />
                <TextField
                  id="outlined-name"
                  label="Password"
                  className={classes.textField}
                  type="password"
                  // value={values.name}
                  // onChange={handleChange("name")}
                  margin="normal"
                  // variant="outlined"
                />
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  onClick={() => onChangeSign(true)}
                >
                  Sign up
                </Button>
                {/* <Link
                  component="button"
                  variant="body2"
                  onClick={() => history.push('/signup')}
                >
                  아이디가 없으신가요?
                </Link> */}
              </div>
            </form>
            {/* <Divider variant="middle" />
            <div className={classes.bottomWrapper}>
              <Typography paragraph>Option area</Typography>
            </div> */}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
