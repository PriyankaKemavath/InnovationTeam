import React from "react";
import EiTLogo from "../../assets/Ei&T_Logo.png";
import SubNavBar from "./SubNavBar/SubNavBar";

import classes from "./Header.module.css";

const Header = () => {
  return (
    <React.Fragment>
      <nav className={`navbar navbar-expand-lg navbar-light ${classes.navBg}`}>
        <a className="navbar-brand" href="/home">
          <span className={classes.title}>
            Digital Transformation &amp; Automation Europe
          </span>
        </a>
        <a className="navbar-brand ml-auto">
          <img src={EiTLogo} alt="Ei&T_Logo" width="80" />
        </a>
      </nav>
      {/* <SubNavBar /> */}
    </React.Fragment>
  );
};

export default Header;
