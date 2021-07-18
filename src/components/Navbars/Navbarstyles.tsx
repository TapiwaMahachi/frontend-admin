import { createStyles, StyleRules, Theme } from '@material-ui/core';
import zIndex from '@material-ui/core/styles/zIndex';
import { drawerWidth } from '../../globalStyles';

const navbarStyles = ({ transitions }: Theme)
  : StyleRules<string> => createStyles({
  // appBar: {
  //   background: 'transparent',
  //   boxShadow: 'none',
  //   position: 'absolute',
  //   width: '100%',
  //   zIndex: 1000,
  //   borderRadius: '3px',
  // },
  appBar: {
    zIndex: zIndex.drawer + 1,
    background: 'transparent',
    boxShadow: 'none',
    marginLeft: '25px',
    transition: transitions.create(['width', 'margin'], {
      easing: transitions.easing.sharp,
      duration: transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: transitions.create(['width', 'margin'], {
      easing: transitions.easing.sharp,
      duration: transitions.duration.enteringScreen,
    }),
  },
  container: {
    paddingTop: '15px',
    paddingBottom: '15px',
    minHeight: '50px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  flex: {
    flex: 1,
  },
  title: {
    lineHeight: '30px',
    fontSize: '18px',
    borderRadius: '3px',
    textTransform: 'none',
    color: 'inherit',
    margin: '0',
    '&:hover,&:focus': {
      background: 'transparent',
    },
  },
});

export default navbarStyles;
