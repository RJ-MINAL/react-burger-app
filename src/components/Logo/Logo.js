import React from "react";
import classes from "./Logo.css";
import burgerLogo from "../../assets/burger-logo.png";

const Logo = props => (
  <div className={classes.Logo}>
    <img src={burgerLogo} alt="MyBurger" />
  </div>
);

export default Logo;