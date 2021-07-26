import {
  createStyles, StyleRules, Theme,
} from '@material-ui/core/styles';
import zIndex from '@material-ui/core/styles/zIndex';
import { drawerWidth, container } from '../globalStyles';

const adminStyles = ({ breakpoints, transitions }: Theme)
  : StyleRules<string> => createStyles({
  wrapper: {
    position: 'relative',
    top: 0,
    height: '100vh',
  },
  mainPanel: {
    [breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
    overflow: 'auto',
    width: '100%',
    overflowScrolling: 'touch',
    position: 'relative',
    float: 'right',
    maxHeight: '100%',
    top: 0,
  },
  content: {
    padding: '30px 15px',
    minHeight: 'calc(100vh - 123px)',
    marginTop: '70px',
  },
  container,
  appBar: {
    zIndex: zIndex.drawer + 1,
    background: 'transparent',
    boxShadow: 'none',
    marginLeft: '25px',
    paddingLeft: '40px',
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
    [breakpoints.down('sm')]: {
      width: '100%',
      marginLeft: '0px',
    },
    paddingLeft: '0px',
  },
});

export default adminStyles;
