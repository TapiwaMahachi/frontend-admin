import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { withStyles, WithStyles } from '@material-ui/core/styles';

import Navbar from '../components/Navbars/Navbar';
import Sidebar from '../components/Sidebar/Sidebar';

import adminStyles from './AdminStyles';
import routes from '../routes';

function Admin({ classes }: WithStyles): React.ReactElement {
  const [open, setOpen] = React.useState(false);
  const [drawerOpen, setDrawerOpen] = React.useState(true);

  const handleDrawerToggle = (): void => {
    setOpen(!open);
  };
  const handleClick = (): void => {
    setDrawerOpen(!drawerOpen);
  };
  return (
    <div className={classes.wrapper}>
      <Sidebar
        routes={routes}
        handleDrawerToggle={handleDrawerToggle}
        open={open}
        drawerOpen={drawerOpen}

      />
      <div className={classes.mainPanel}>
        <Navbar
          handleDrawerToggle={handleDrawerToggle}
          handleClick={handleClick}
          drawerOpen={drawerOpen}
          routes={routes}
        />
        <div className={classes.content}>
          <div className={classes.container}>
            <Switch>
              {routes.filter((props) => props.layout === '/admin')
                .map((prop) => (
                  <Route
                    exact
                    path={prop.layout + prop.path}
                    component={prop.component}
                    key={prop.path}
                  />
                ))}
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withStyles(adminStyles)(Admin);
