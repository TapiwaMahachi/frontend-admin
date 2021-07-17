import * as React from 'react';
import { useHistory } from 'react-router-dom';
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

import { login } from './LoginRedux';
import { useAppDispatch } from '../../../redux/hooks';

import loginPageStyle from './LoginPageStyle';

function LoginPage(): React.ReactElement {
  const classes = loginPageStyle();
  const dispatch = useAppDispatch();
  const history = useHistory();
  const [details, setDetails] = React.useState({
    email: '',
    password: '',
  });
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
    <Card className={classes.card}>
      <div className={classes.header}>
        <h1>Admin</h1>
      </div>
      <CardContent>
        <form className={classes.form} onSubmit={handleSubmit}>
          <FormControl className={classes.inputControl}>
            <InputLabel>Email</InputLabel>
            <Input
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
            <InputLabel>Password</InputLabel>
            <Input
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
