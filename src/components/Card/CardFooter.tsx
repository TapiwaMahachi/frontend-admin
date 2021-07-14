/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/require-default-props */
import * as React from 'react';
import classNames from 'classnames';
import { WithStyles, withStyles } from '@material-ui/core/styles';

import cardFooterStyle from '../../assets/tss/components/cardFooterStlye';

interface cardFooterProps extends WithStyles
{
  children: React.ReactNode,
  stats: boolean,
  className?: string | any,
}
function CardFooter({
  children, classes, stats, className,
}: cardFooterProps)
  : React.ReactElement {
  const cardFooterClasses = classNames({
    [classes.cardFooter]: true,
    [classes.cardFooterStats]: stats,
    [className]: className !== undefined,
  });
  return (
    <div className={cardFooterClasses}>
      {children}
    </div>
  );
}

export default withStyles(cardFooterStyle)(CardFooter);
