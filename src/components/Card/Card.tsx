/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/require-default-props */
import * as React from 'react';
import classNames from 'classnames';
import { WithStyles, withStyles } from '@material-ui/core/styles';

import cardStyle from '../../assets/tss/components/cardStyle';

interface cardProps extends WithStyles
{
  children: React.ReactNode,
}
function Card({
  children,
  classes,
}: cardProps): React.ReactElement {
  const cardClasses = classNames({
    [classes.card]: true,
  });
  return (
    <div className={cardClasses}>
      {children}
    </div>
  );
}

export default withStyles(cardStyle)(Card);
