import { createStyles } from '@material-ui/core';
import
{
  container,
} from '../../globalStyles';

const navbarStyles = createStyles({
  appBar: {
    background: 'transparent',
    boxShadow: 'none',
    position: 'absolute',
    width: '100%',
    zIndex: 1000,
    borderRadius: '3px',
  },
  container: {
    ...container,
    minHeight: '50px',
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
