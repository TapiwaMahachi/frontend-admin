import { makeStyles } from '@material-ui/core';

const navbarStyles = makeStyles((theme) => ({
  nav: {
    position: 'fixed',
    width: 'calc(100% - 300px)',
    height: 70,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid rgb(218, 210, 210)',
    top: 0,
    right: 0,

  },
}));

export default navbarStyles;
