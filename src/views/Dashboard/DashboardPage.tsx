import * as React from 'react';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import {
  Accessibility, DateRange, LocalOffer, Store, Update, InfoOutlined,
  GroupAddOutlined,
} from '@material-ui/icons';

import Card from '../../components/Card/Card';
import CardFooter from '../../components/Card/CardFooter';
import CardHeader from '../../components/Card/CardHeader';
import CardIcon from '../../components/Card/CardIcon';
import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';

import dashboardStyle from './DashboardStyle';

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
              <p className={classes.cardCategory}>Mentors</p>
              <h3 className={classes.cardTitle}>7</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <DateRange />
                Last 24 hours
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem>
          <Card>
            <CardHeader color="danger" stats icon>
              <CardIcon color="danger">
                <InfoOutlined />
              </CardIcon>
              <p className={classes.cardCategory}>fixed issues</p>
              <h3 className={classes.cardTitle}>3</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <LocalOffer />
                Tracked from Github
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <Accessibility />
              </CardIcon>
              <p className={classes.cardCategory}>Followers</p>
              <h3 className={classes.cardTitle}>+4500</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />
                Just updated
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem>
          <Card>
            <CardHeader color="primary" stats icon>
              <CardIcon color="primary">
                <GroupAddOutlined />
              </CardIcon>
              <p className={classes.cardCategory}>Mentees</p>
              <h3 className={classes.cardTitle}>37</h3>
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
