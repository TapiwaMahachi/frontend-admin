import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Navbar from '../components/Navbars/Navbar';
import Sidebar from '../components/Sidebar/Sidebar';

import adminStyles from '../assets/tss/layouts/adminStyles';
import routes from '../routes';

function Admin(): React.ReactElement {
  const classes = adminStyles();
  return (
    <div className={classes.wrapper}>
      <Sidebar routes={routes} />
      <div className={classes.mainPanel}>
        <Navbar />
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
