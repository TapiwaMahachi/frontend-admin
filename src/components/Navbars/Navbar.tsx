import React from 'react';
import classNames from 'classnames';
import { Menu } from '@material-ui/icons';
import {
  AppBar, Button, Hidden, Toolbar, IconButton,
} from '@material-ui/core';
import { WithStyles, withStyles } from '@material-ui/core/styles';
import { useLocation } from 'react-router-dom';

import navbarStyles from './Navbarstyles';
import AdminNavbarLinks from './AdminNavbarLinks';
import { routeTypes } from '../../routes';

interface NavbarProps extends WithStyles
{
  handleDrawerToggle: () => void,
  handleClick: ()=>void,
  routes: routeTypes
  drawerOpen: boolean,
}

function Navbar({
  routes, classes, handleDrawerToggle, handleClick, drawerOpen,
}
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
    <AppBar className={classNames(classes.appBar, {
      [classes.appBarShift]: drawerOpen,
    })}
    >
      <Toolbar className={classes.container}>
        <Hidden smDown implementation="css">
          <IconButton
            onClick={handleClick}
          >
            <Menu />
          </IconButton>
        </Hidden>
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
