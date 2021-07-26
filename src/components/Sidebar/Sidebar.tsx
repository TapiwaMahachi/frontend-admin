import React from 'react';
import classNames from 'classnames';
import
{
  Drawer,
  Hidden,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { WithStyles, withStyles } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';

import sidebarStyles from './SidebarStyles';
import type { routeTypes } from '../../routes';

interface SidebarProps extends WithStyles
{
  routes: routeTypes,
  open: boolean,
  drawerOpen: boolean,
  handleDrawerToggle: ()=>void,
}
function Sidebar({
  routes,
  classes,
  open,
  drawerOpen,
  handleDrawerToggle,
}: SidebarProps): React.ReactElement {
  const links = (
    <List className={classes.list}>
      {routes.map((prop) => (
        <NavLink
          to={prop.layout + prop.path}
          activeClassName="active"
          key={prop.path}
          className={classes.item}
          activeStyle={{
            backgroundColor: '#21a1c4',
          }}
        >
          <ListItem button className={classes.itemLink}>
            <prop.icon
              className={classNames(classes.itemIcon)}
            />
            <ListItemText
              className={classNames(classes.itemText)}
              primary={prop.name}
              disableTypography
            />
          </ListItem>
        </NavLink>
      ))}
    </List>
  );

  const brand = (
    <div className={classes.logo}>
      <div className={classes.logoImage}>
        <HomeIcon className={classes.img} />
      </div>
      <h1 className={classes.logoText}>Admin</h1>
    </div>
  );

  return (
    <div>
      <Hidden mdUp implementation="css">
        <Drawer
          variant="temporary"
          anchor="right"
          open={open}
          classes={{
            paper: classNames(classes.drawerPaper),
          }}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // better open perfomance on mobile
          }}
        >
          {brand}
          <div className={classes.sidebarWrapper}>
            {links}
          </div>
        </Drawer>
      </Hidden>
      <Hidden smDown implementation="css">
        <Drawer
          className={classNames(classes.drawer, {
            [classes.drawerPaper]: drawerOpen,
            [classes.drawerClose]: !drawerOpen,
          })}
          classes={{
            paper: classNames({
              [classes.drawerPaper]: drawerOpen,
              [classes.drawerClose]: !drawerOpen,
            }),
          }}
          variant="permanent"
          anchor="left"
          open
        >
          {brand}
          <div className={classes.sidebarWrapper}>
            {links}
          </div>
        </Drawer>
      </Hidden>
    </div>
  );
}

export default withStyles(sidebarStyles)(Sidebar);
