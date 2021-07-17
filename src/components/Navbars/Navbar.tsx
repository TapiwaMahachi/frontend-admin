import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import { Menu } from '@material-ui/icons';
import {
  AppBar, Button, Hidden, Toolbar,
} from '@material-ui/core';
import { WithStyles, withStyles } from '@material-ui/core/styles';

import navbarStyles from './Navbarstyles';
import AdminNavbarLinks from './AdminNavbarLinks';

function Navbar({ classes }: WithStyles): React.ReactElement {
  return (
    <AppBar className={classes.appBar}>
      <Toolbar className={classes.container}>
        <div className={classes.flex}>
          <Button className={classes.title}>
            Brand
          </Button>
        </div>
        <Hidden smDown implementation="css">
          <AdminNavbarLinks />
        </Hidden>
        <Hidden mdUp implementation="css">
          <IconButton
            color="inherit"
            aria-label="open drawer"
          >
            <Menu />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}

export default withStyles(navbarStyles)(Navbar);
