import React from "react";
import teamMemberPic from "../../../assets/TeamMemberPic.png";
import NestleLogo from "../../../assets/NestleLogo.png";
import EricssonLogo from "../../../assets/EricssonLogo.png";

import classes from "./TeamMemberProfile.module.css";

const TeamMemberProfile = () => {
  return (
    <div className="col-md-6 mt-4">
      <div className="card custom-card">
        <div className="card-body">
          <div className="row no-gutters">
            <div className="col-md-4">
              <img className="rounded-circle" src={teamMemberPic} width="100" />
            </div>
            <div className="col-md-8">
              <div>CJ</div>
              <div>(5675473)</div>
              <span className={`text-black-50 ${classes.designation}`}>
                <i className="bi bi-envelope"></i>&nbsp;
                cj@email.com&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <i className="bi bi-telephone"></i>&nbsp;+800-12 12 23 52
              </span>
            </div>
          </div>
          <div className="row no-gutters">
            <span>
              <label>
                Role:&nbsp;<b>Team Lead</b>
              </label>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <label>
                Account:&nbsp;
                <img src={NestleLogo} alt="Logo" width="30px" />
                &nbsp;&nbsp;
                <b>Nestle</b>
              </label>
            </span>
          </div>
          <div className="row no-gutters">
            <label>What are they doing/working on?</label>
          </div>
          <div className="row no-gutters">
            <label>What is their area of interests?</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberProfile;
