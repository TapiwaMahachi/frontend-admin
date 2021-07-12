import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// module imports
import Auth from './layouts/Auth';
import Admin from './layouts/Admin';

function AppView(): React.ReactElement {
  return (
    <Switch>
      <Route path="/admin" component={Admin} />
      <Route path="/auth" component={Auth} />
      <Redirect from="/" to="/auth/login" />
    </Switch>
  );
}

export default AppView;
