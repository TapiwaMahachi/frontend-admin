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
  routes: routeTypes
}
function Sidebar({ routes, classes }: SidebarProps): React.ReactElement {
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
      <a
        className={classes.logoLink}
        href="/"
      >
        <div className={classes.logoImage}>
          <HomeIcon className={classes.img} />
        </div>
        Admin
      </a>
    </div>
  );

  return (
    <div>
      <Hidden mdUp implementation="css">
        <Drawer
          variant="temporary"
          anchor="right"
          classes={{
            paper: classNames(classes.drawerPaper),
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
          classes={{
            paper: classNames(classes.drawerPaper),
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
