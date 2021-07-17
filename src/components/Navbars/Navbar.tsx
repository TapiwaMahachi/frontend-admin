import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import { Menu, AccountCircle } from '@material-ui/icons';

import navbarStyles from './Navbarstyles';

function Navbar(): React.ReactElement {
  const classes = navbarStyles();
  return (
    <div className={classes.nav}>
      <IconButton
        color="primary"
        aria-label="hamburger menu"
      >
        <Menu />
      </IconButton>
      <IconButton
        aria-label="user account"
        color="primary"
      >
        <AccountCircle />
      </IconButton>
    </div>
  );
}

export default Navbar;
