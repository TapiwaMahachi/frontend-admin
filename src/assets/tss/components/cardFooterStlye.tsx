import { createStyles, StyleRules } from '@material-ui/core/styles';
import
{
  grayColor,
} from '../globalStyles';

function cardFooterStyle(): StyleRules<string> {
  return createStyles({
    cardFooter: {
      padding: '0',
      paddingTop: '10px',
      margin: '0 15px 10px',
      borderRadius: '0',
      justifyContent: 'space-between',
      alignItems: 'center',
      display: 'flex',
      backgroundColor: 'transparent',
      border: '0',
    },
    cardFooterStats: {
      borderTop: `1px solid ${grayColor[10]}`,
      marginTop: '20px',
      '& svg': {
        position: 'relative',
        top: '4px',
        marginRight: '3px',
        marginLeft: '3px',
        width: '16px',
        height: '16px',
      },
      '& .fab,& .fas,& .far,& .fal,& .material-icons': {
        fontSize: '16px',
        position: 'relative',
        top: '4px',
        marginRight: '3px',
        marginLeft: '3px',
      },
    },
  });
}

export default cardFooterStyle;
