/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { createStyles } from '@material-ui/core';

import
{
  successCardHeader,
  primaryCardHeader,
  grayColor,
} from '../globalStyles';

function cardIconStyle() {
  return createStyles({
    cardIcon: {
      '&$successCardHeader,&$primaryCardHeader': {
        borderRadius: '3px',
        padding: '15px',
        marginTop: '-20px',
        marginRight: '15px',
        backgroundColor: grayColor[0],
      },
    },
    successCardHeader,
    primaryCardHeader,

  });
}

export default cardIconStyle;
