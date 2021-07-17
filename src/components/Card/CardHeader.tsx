/* eslint-disable react/require-default-props */
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import classNames from 'classnames';

import { WithStyles, withStyles } from '@material-ui/core/styles';
import cardHeaderStyle from './CardHeaderStyle';

interface cardHeaderProps extends WithStyles
{
  children: React.ReactNode,
  className?: string | any,
  color: string,
  stats: boolean,
  icon: boolean,
}
function CardHeader({
  children,
  classes,
  className,
  color,
  stats,
  icon,
}: cardHeaderProps)
  : React.ReactElement {
  const cardHeaderClasses = classNames({
    [classes.cardHeader]: true,
    [classes[`${color}CardHeader`]]: color,
    [classes.cardHeaderStats]: stats,
    [classes.cardHeaderIcon]: icon,
    [className]: className !== undefined,
  });
  return (
    <div className={cardHeaderClasses}>
      {children}
    </div>
  );
}

export default withStyles(cardHeaderStyle)(CardHeader);
