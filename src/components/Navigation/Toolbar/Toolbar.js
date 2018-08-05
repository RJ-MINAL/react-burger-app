import React from "react";
import classes from "./Toolbar.css";
import SideDrawerToogle from "../SideDrawer/SideDrawerToogle/SideDrawerToogle";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

const toolbar = props => (
  <header className={classes.Toolbar}>
    <SideDrawerToogle clicked={props.sideDrawerToogleClicked} />
    <div className={classes.Logo}>
      <Logo />
    </div>
    <div className={classes.DesktopOnly}>
      <NavigationItems />
    </div>
  </header>
);

export default toolbar;
