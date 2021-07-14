import * as React from 'react';
import Grid from '@material-ui/core/Grid';

function GridContainer({ children }: { children: React.ReactNode })
    : React.ReactElement {
  return (
    <Grid container>
      {children}
    </Grid>
  );
}

export default GridContainer;
