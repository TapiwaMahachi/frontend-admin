import React from 'react';
import
{
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  IconButton,
  Button,
  Card,
  CardContent,
  CardActions,
} from '@material-ui/core';
import
{
  Email,
  Visibility,
  LockOpen,
} from '@material-ui/icons';

import loginPageStyle from '../../assets/tss/views/loginPageStyle';

function LoginPage(): React.ReactElement {
  const classes = loginPageStyle();
  return (
    <Card className={classes.card}>
      <div className={classes.header}>
        <h1>Admin</h1>
      </div>
      <CardContent>
        <form className={classes.form}>
          <FormControl className={classes.inputControl}>
            <InputLabel>Email</InputLabel>
            <Input
              type="email"
              endAdornment={(
                <InputAdornment
                  position="end"
                >
                  <IconButton>
                    <Email />
                  </IconButton>
                </InputAdornment>
        )}
            />
          </FormControl>
          <FormControl>
            <InputLabel>Password</InputLabel>
            <Input
              type="password"
              endAdornment={(
                <InputAdornment
                  position="end"
                >
                  <IconButton>
                    <Visibility />
                  </IconButton>
                </InputAdornment>
        )}
            />
          </FormControl>
          <CardActions className={classes.btnContainer}>
            <Button
              color="primary"
              variant="outlined"
              type="submit"
              startIcon={<LockOpen />}
            >
              Login
            </Button>
          </CardActions>
        </form>
      </CardContent>
    </Card>
  );
}

export default LoginPage;
