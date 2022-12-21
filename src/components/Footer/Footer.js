import React from "react";
import HCLTechLogo from "../../assets/HCLTech.png";
import "./Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <span>Contact Us</span>
      <img className="float-right" src={HCLTechLogo} alt="HCLTech_Logo" />
    </footer>
  );
};

export default Footer;

{
  /* <footer className="mainfooter" role="contentinfo">
      <div className="footer-middle">
        <div className="container">
          <div className="row">
            <div className="col-md-12 copy">
              <p className="text-center">
                &#169; 2022 All rights reserved. Privacy Policy
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer> */
}
