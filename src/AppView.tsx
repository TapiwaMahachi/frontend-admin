import * as React from 'react';
import {
  Route, Switch, Redirect, useHistory,
} from 'react-router-dom';

import { useAppSelector } from './redux/hooks';
import { accessToken } from './views/Pages/Login/LoginRedux';

// module imports
import Auth from './layouts/Auth';
import Admin from './layouts/Admin';

function AppView(): React.ReactElement {
  const token = useAppSelector(accessToken);
  const history = useHistory();

  React.useEffect(() => {
    if (!token) { history.push('/auth/login'); }
  }, [token, history]);

  return (
    <Switch>
      <Route path="/admin" component={Admin} />
      <Route path="/auth" component={Auth} />
      <Redirect from="/" to="/admin/dashboard" />
    </Switch>
  );
}

export default AppView;
