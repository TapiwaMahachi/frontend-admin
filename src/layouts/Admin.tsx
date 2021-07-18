import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Navbar from '../components/Navbars/Navbar';
import Sidebar from '../components/Sidebar/Sidebar';

import adminStyles from './AdminStyles';
import routes from '../routes';

function Admin(): React.ReactElement {
  const classes = adminStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawerToggle = (): void => {
    setOpen(!open);
  };
  return (
    <div className={classes.wrapper}>
      <Sidebar
        routes={routes}
        handleDrawerToggle={handleDrawerToggle}
        open={open}

      />
      <div className={classes.mainPanel}>
        <Navbar
          handleDrawerToggle={handleDrawerToggle}
          routes={routes}
        />
        <div className={classes.content}>
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
  );
}

export default Admin;
