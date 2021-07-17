import { makeStyles } from '@material-ui/core';

const adminStyles = makeStyles((theme) => ({
  wrapper: {
    position: 'relative',
    top: 0,
    height: '100vh',
  },
  mainPanel: {
    width: 'calc(100% - 300px)',
    position: 'relative',
    float: 'right',
    minHeight: '100vh',
    top: 0,
  },
  content: {
    width: '100%',
    height: '100%',
    padding: theme.spacing(1),
    marginTop: '70px',
  },
}));

export default adminStyles;
