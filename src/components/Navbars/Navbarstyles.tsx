import { createStyles } from '@material-ui/core';

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
