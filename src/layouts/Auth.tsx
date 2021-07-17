import React from 'react';
import { Switch, Route } from 'react-router-dom';

import routes from '../routes';
import authStyles from './AuthStyles';

function Auth(): React.ReactElement {
  const classes = authStyles();

  return (
    <div className={classes.container}>
      <Switch>
        {routes.filter((props) => props.layout === '/auth')
          .map((prop) => (
            <Route
              path={prop.layout + prop.path}
              component={prop.component}
              key={prop.path}
            />
          ))}
      </Switch>
    </div>
  );
}

export default Auth;
