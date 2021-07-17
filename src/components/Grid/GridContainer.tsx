import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import
{
  createStyles,
  withStyles,
  WithStyles,
} from '@material-ui/core/styles/';

const style = createStyles({
  grid: {
    margin: '0 -15px !important',
    width: 'unset',
    justifyContent: 'center',
  },
});
interface GridProps extends WithStyles
{
  children: React.ReactNode,
}
function GridContainer({ children, classes }: GridProps)
    : React.ReactElement {
  return (
    <Grid container className={classes.grid}>
      {children}
    </Grid>
  );
}

export default withStyles(style)(GridContainer);
