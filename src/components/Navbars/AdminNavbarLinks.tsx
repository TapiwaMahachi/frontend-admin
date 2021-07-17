/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import classNames from 'classnames';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import
{
  Button,
  ClickAwayListener,
  Grow,
  Hidden,
  MenuItem,
  MenuList,
  Paper,
  Popper,
} from '@material-ui/core';
import { Person } from '@material-ui/icons';
import { NavLink } from 'react-router-dom';
import adminNavbarStyles from './AdminNavbarStyles';

function AdminNavbarLinks({ classes }: WithStyles)
    : React.ReactElement {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);
  const id = open ? 'profile-popper' : undefined;

  const handleClose = (): void => {
    setAnchorEl(null);
  };

  const handleToggleProfile = (event: React.MouseEvent<HTMLElement>): void => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  return (
    <div className={classes.manager}>
      <Button
        onClick={handleToggleProfile}
      >
        <Person />
        <Hidden mdUp implementation="css">
          <p>Profile</p>
        </Hidden>
      </Button>
      <Popper
        open={open}
        id={id}
        anchorEl={anchorEl}
        transition
        disablePortal
        className={`${classNames({ [classes.popperClose]: !open })}
         ${classes.popperNav}`}
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList>
                  <NavLink
                    to="/auth/login"
                  >
                    <MenuItem
                      className={classes.dropdownItem}
                    >
                      Profile
                    </MenuItem>
                  </NavLink>
                  <NavLink
                    to="/auth/login"
                  >
                    <MenuItem
                      className={classes.dropdownItem}
                    >
                      Settings
                    </MenuItem>
                  </NavLink>
                  <NavLink
                    to="/auth/login"
                  >
                    <MenuItem
                      className={classes.dropdownItem}
                    >
                      Logout
                    </MenuItem>
                  </NavLink>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
}

export default withStyles(adminNavbarStyles)(AdminNavbarLinks);
