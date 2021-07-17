import { makeStyles } from '@material-ui/core';

const loginPageStyle = makeStyles((theme) => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '400px',
    margin: 'auto',
    marginTop: theme.spacing(30),
    padding: theme.spacing(1),
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  inputControl: {
    marginBottom: theme.spacing(1),
  },
  btnContainer: {
    margin: 'auto',
    marginTop: theme.spacing(1),
  },
}));

export default loginPageStyle;
