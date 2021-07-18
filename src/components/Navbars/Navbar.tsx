import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import { Menu } from '@material-ui/icons';
import {
  AppBar, Button, Hidden, Toolbar,
} from '@material-ui/core';
import { WithStyles, withStyles } from '@material-ui/core/styles';
import { useLocation } from 'react-router-dom';

import navbarStyles from './Navbarstyles';
import AdminNavbarLinks from './AdminNavbarLinks';
import { routeTypes } from '../../routes';

interface NavbarProps extends WithStyles
{
  handleDrawerToggle: () => void,
  routes : routeTypes
}

function Navbar({ routes, classes, handleDrawerToggle }
  : NavbarProps): React.ReactElement {
  const location = useLocation();

  function makeBrand(): string {
    let name = '';
    routes.map((prop) => {
      if (prop.layout + prop.path === location.pathname) {
        name = prop.name;
      }
      return null;
    });
    return name;
  }
  return (
    <AppBar className={classes.appBar}>
      <Toolbar className={classes.container}>
        <div className={classes.flex}>
          <Button className={classes.title}>
            {makeBrand()}
          </Button>
        </div>
        <Hidden smDown implementation="css">
          <AdminNavbarLinks />
        </Hidden>
        <Hidden mdUp implementation="css">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
          >
            <Menu />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}

export default withStyles(navbarStyles)(Navbar);
