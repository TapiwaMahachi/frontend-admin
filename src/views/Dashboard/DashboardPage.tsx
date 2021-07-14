import * as React from 'react';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import { DateRange, Store } from '@material-ui/icons';

import Card from '../../components/Card/Card';
import CardFooter from '../../components/Card/CardFooter';
import CardHeader from '../../components/Card/CardHeader';
import CardIcon from '../../components/Card/CardIcon';
import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';

import dashboardStyle from '../../assets/tss/views/dashboardStyle';

function Dashboard({ classes }: WithStyles): React.ReactElement {
  return (
    <div>
      <GridContainer>
        <GridItem>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <Store />
              </CardIcon>
              <p className={classes.cardCategory}>Revenue</p>
              <h3 className={classes.cardTitle}>434.37</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <DateRange />
                Last 24 hours
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default withStyles(dashboardStyle)(Dashboard);
