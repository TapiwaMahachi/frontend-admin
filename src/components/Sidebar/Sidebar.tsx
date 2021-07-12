import React from 'react';
import { List, ListItem } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

import sidebarStyles from '../../assets/tss/components/sidebarStyles';
import type { routeTypes } from '../../routes';

interface sidebarProps
{
  routes: routeTypes
}
function Sidebar({ routes }: sidebarProps): React.ReactElement {
  const classes = sidebarStyles();

  return (
    <div className={classes.wrapper}>
      <div className={classes.title}>
        <h1>Admin Site</h1>
      </div>
      <br />
      <div className={classes.sidebarWrapper}>
        <List className={classes.list}>
          {routes.filter((props) => props.layout === '/admin')
            .map((prop) => (
              <NavLink
                key={prop.path}
                className={classes.item}
                activeClassName="active"
                activeStyle={{
                  backgroundColor: '#21a1c4',
                }}
                to={prop.layout + prop.path}
              >
                <ListItem button className={classes.itemLink}>
                  <prop.icon className={classes.itemIcon} />
                  <h2 className={classes.itemText}>{prop.name}</h2>
                </ListItem>
              </NavLink>
            ))}
        </List>
      </div>
    </div>
  );
}

export default Sidebar;
