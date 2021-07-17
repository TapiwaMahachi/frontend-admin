import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles, WithStyles } from '@material-ui/core/styles';

const style = {
  grid: {
    padding: '0 15px !important',
  },
};
interface GridItemProps extends WithStyles
{
  children: React.ReactNode,
}
function GridItem({ children, classes }: GridItemProps)
    : React.ReactElement {
  return (
    <Grid item className={classes.grid} xs={12} sm={6} md={3}>
      {children}
    </Grid>
  );
}

export default withStyles(style)(GridItem);
