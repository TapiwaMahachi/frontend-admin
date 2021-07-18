import * as React from 'react';
import { useHistory } from 'react-router-dom';
import
{
  FormControl,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Button,
  Card,
  CardContent,
  CardActions,
  CardHeader,
} from '@material-ui/core';
import
{
  Email,
  Visibility,
  LockOpen,
} from '@material-ui/icons';
import { WithStyles, withStyles } from '@material-ui/core/styles';

import { login } from './LoginRedux';
import { useAppDispatch } from '../../../redux/hooks';

import loginPageStyle from './LoginPageStyle';

function LoginPage({ classes }: WithStyles): React.ReactElement {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const [details, setDetails] = React.useState({
    email: '',
    password: '',
  });
  const [error, setError] = React.useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    setDetails({
      ...details,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(login(details.email, details.password));
    history.push('/dashboard');
    setDetails({
      ...details,
      email: '',
      password: '',
    });
  };
  return (
    <div className={classes.card}>
      <div className={classes.header}>
        <h1>Admin</h1>
      </div>
      <CardContent>
        <form className={classes.form} onSubmit={handleSubmit}>
          <FormControl className={classes.inputControl}>
            <OutlinedInput
              error={error}
              placeholder="Enter Email"
              name="email"
              value={details.email}
              onChange={handleChange}
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
            <OutlinedInput
              error={error}
              placeholder="Enter Password"
              name="password"
              type="password"
              value={details.password}
              onChange={handleChange}
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
              className={classes.button}
              color="primary"
              variant="contained"
              type="submit"
              size="large"
              startIcon={<LockOpen />}
            >
              Login
            </Button>
          </CardActions>
        </form>
      </CardContent>
    </div>
  );
}

export default withStyles(loginPageStyle)(LoginPage);
