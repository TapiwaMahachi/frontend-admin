import { createStyles, Theme, StyleRules } from '@material-ui/core';
import
{
  drawerWidth,
  grayColor,
  hexToRgb,
  whiteColor,
} from '../../globalStyles';

const sidebarStyles = ({
  breakpoints, palette, transitions, spacing,
}: Theme)
  : StyleRules<string> => createStyles({
  drawerPaper: {
    width: drawerWidth,
    position: 'fixed',
    display: 'flex',
    flexDirection: 'column',
    top: 0,
    left: 0,
    bottom: 0,
    border: 'none',
    zIndex: 1,
    background: palette.primary.light,
    transition: transitions.create('width', {
      easing: transitions.easing.sharp,
      duration: transitions.duration.enteringScreen,
    }),
    [breakpoints.up('md')]: {
      width: drawerWidth,
      position: 'fixed',
      height: '100%',
    },
    [breakpoints.down('sm')]: {
      width: drawerWidth,
      position: 'fixed',
      display: 'block',
      top: '0',
      height: '100vh',
      left: 'auto',
      right: '0',
      zIndex: '1032',
      visibility: 'visible',
      overflowY: 'visible',
      borderTop: 'none',
      textAlign: 'left',
      paddingRight: '0px',
      paddingLeft: '0',
      transform: `translate3d(${drawerWidth}px, 0, 0)`,
    },
  },
  drawerClose: {
    transition: transitions.create('width', {
      easing: transitions.easing.sharp,
      duration: transitions.duration.leavingScreen,
    }),
    border: 'none',
    background: palette.primary.light,
    overflow: 'hidden',
    width: spacing(5),
    [breakpoints.up('sm')]: {
      width: spacing(8),
    },
    '& h1': {
      display: 'none',
    },
  },
  title: {
    color: '#FFF',
    height: 70,
    borderBottom: '1px solid rgb(218, 210, 210)',
    alignItems: 'center',
  },
  sidebarWrapper: {
    position: 'relative',
    height: 'calc(100vh - 75px)',
    overflow: 'auto',
    width: '260px',
    zIndex: 4,
    WebkitOverflowScrolling: 'touch',
  },
  logo: {
    position: 'relative',
    padding: '15px 15px',
    display: 'flex',
    alignItems: 'center',
    height: '70px',
    zIndex: 4,
    color: whiteColor,
    backgroundColor: palette.primary.dark,
    '&:after': {
      content: '""',
      position: 'absolute',
      bottom: '0',

      height: '1px',
      right: '15px',
      width: 'calc(100% - 30px)',
      backgroundColor: `rgba(${hexToRgb(grayColor[6])}, 0.3)`,
    },
  },
  logoText: {
    margin: '0',
  },
  logoImage: {
    width: '30px',
    display: 'inline-block',
    maxHeight: '30px',
    marginLeft: '10px',
    marginRight: '15px',
  },
  img: {
    width: '35px',
    top: '25px',
    position: 'absolute',
    verticalAlign: 'middle',
    border: '0',
  },
  list: {
    marginTop: '20px',
    paddingLeft: '0',
    paddingTop: '0',
    paddingBottom: '0',
    marginBottom: '0',
    listStyle: 'none',
    position: 'unset',
    width: '100%',
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    textDecoration: 'none',
    color: 'whitesmoke',
  },
  itemIcon: {
    width: '24px',
    height: '30px',
    fontSize: '24px',
    lineHeight: '30px',
    float: 'left',
    marginRight: '15px',
    textAlign: 'center',
    verticalAlign: 'middle',
  },
  itemText: {
    margin: '0',
    lineHeight: '30px',
    fontSize: '18px',
    whiteSpace: 'nowrap',
  },
  itemLink: {
    width: '95%',
    transition: 'all 300ms linear',
    margin: '0 15px',
    borderRadius: '3px',
    position: 'relative',
    display: 'flex',
    padding: '10px 15px',
    backgroundColor: 'transparent',
  },
});
export default sidebarStyles;
