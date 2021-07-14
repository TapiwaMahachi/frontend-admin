/* eslint-disable react/require-default-props */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import classNames from 'classnames';
import { WithStyles, withStyles } from '@material-ui/core/styles';

import cardIconStyle from '../../assets/tss/components/cardIconStyle';

interface cardIconProps extends WithStyles
{
  children: React.ReactNode,
  color: string,
  className?: any,
}
function CardIcon({
  children, color, className, classes,
}: cardIconProps)
  : React.ReactElement {
  const cardIconClasses = classNames({
    [classes.cardIcon]: true,
    [classes[`${color}CardHeader`]]: color,
    [className]: className !== undefined,
  });
  return (
    <div className={cardIconClasses}>
      {children}
    </div>
  );
}

export default withStyles(cardIconStyle)(CardIcon);
