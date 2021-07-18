import { createStyles, StyleRules, Theme } from '@material-ui/core/styles';
import { drawerWidth, container } from '../globalStyles';

const adminStyles = ({ breakpoints }: Theme)
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
});

export default adminStyles;
