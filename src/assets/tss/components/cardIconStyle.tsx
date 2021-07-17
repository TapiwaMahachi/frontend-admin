/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { createStyles } from '@material-ui/core';

import
{
  successCardHeader,
  primaryCardHeader,
  infoCardHeader,
  dangerCardHeader,
  grayColor,
} from '../globalStyles';

function cardIconStyle() {
  return createStyles({
    cardIcon: {
      '&$successCardHeader,&$primaryCardHeader,&$infoCardHeader,&$dangerCardHeader': {
        borderRadius: '3px',
        padding: '15px',
        marginTop: '-20px',
        marginRight: '15px',
        backgroundColor: grayColor[0],
        width: '100px',
        float: 'left',
      },
    },
    successCardHeader,
    primaryCardHeader,
    infoCardHeader,
    dangerCardHeader,

  });
}

export default cardIconStyle;
