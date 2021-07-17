import { createStyles, StyleRules, Theme } from '@material-ui/core/styles';
import
{
  whiteColor,
  grayColor,
  primaryColor,
  primaryBoxShadow,
  defaultFont,
} from '../../globalStyles';

const adminNavbarStyles = ({ breakpoints }: Theme)
    : StyleRules<string> => createStyles({
  manager: {
    [breakpoints.up('sm')]: {
      width: '100%',
    },
    display: 'inline-block',
  },
  buttonLink: {
    [breakpoints.down('md')]: {
      display: 'flex',
      marginLeft: '30px',
      width: 'auto',
    },
  },
  popperClose: {
    pointerEvents: 'none',
  },
  popperNav: {
    [breakpoints.down('sm')]: {
      position: 'static !important',
      left: 'unset !important',
      top: 'unset !important',
      transform: 'none !important',
      willChange: 'none !important',
      '& > div': {
        boxShadow: 'none !important',
        marginLeft: '0rem',
        marginRight: '0rem',
        transition: 'none !important',
        marginTop: '0px !important',
        marginBottom: '0px !important',
        padding: '0px !important',
        backgroundColor: 'transparent !important',
        '& ul li': {
          color: `${whiteColor} !important`,
          margin: '10px 15px 0!important',
          padding: '10px 15px !important',
          '&:hover': {
            backgroundColor: 'hsla(0,0%,78%,.2)',
            boxShadow: 'none',
          },
        },
      },
    },
  },
  dropdownItem: {
    ...defaultFont,
    fontSize: '13px',
    padding: '10px 20px',
    margin: '0 5px',
    borderRadius: '2px',
    WebkitTransition: 'all 150ms linear',
    MozTransition: 'all 150ms linear',
    OTransition: 'all 150ms linear',
    MsTransition: 'all 150ms linear',
    transition: 'all 150ms linear',
    display: 'block',
    clear: 'both',
    fontWeight: 400,
    lineHeight: '1.42857143',
    color: grayColor[8],
    whiteSpace: 'nowrap',
    height: 'unset',
    '&:hover': {
      backgroundColor: primaryColor[0],
      color: whiteColor,
      ...primaryBoxShadow,
    },
  },
});

export default adminNavbarStyles;
