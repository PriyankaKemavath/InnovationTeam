import React from "react";
import teamMemberPic from "../../../assets/TeamMemberPic.png";
import EricssonLogo from "../../../assets/EricssonLogo.png";
import NestleLogo from "../../../assets/NestleLogo.png";
import MemberProfileModal from "../../Modals/MemberProfileModal/MemberProfileModal";

import classes from "./TeamMemberDetails.module.css";

const TeamMemberDetails = ({ name, designation }) => {
  return (
    /* <div className="row">
        <div className="col-md-3">
          <img src={teamMemberPic} alt="Team Member Pic" width="50px" />
        </div>
        <div
          className="col-md-9"
          style={{ verticalAlign: "middle", textAlign: "left" }}
        >
          <span style={{ fontSize: "16px" }}>{name}</span>
          <p style={{ fontSize: "12px" }}>{designation}</p>
        </div>
      </div> */
    /* <div className="bg-white p-2">
      <div className="d-flex flex-row user-info">
        <div style={{ height: "80px", width: "80px" }}>
          <img className="rounded-circle w-25" src={teamMemberPic} />
        </div>
        <div className="d-flex flex-column justify-content-start ml-2">
          <span className={`d-block name ${classes.name}`}>{name}</span>
          <span className={`date text-black-50 ${classes.designation}`}>
            {designation}
          </span>
        </div>
      </div>
    </div> */
    <div
      className={classes.teamcontainer}
      data-toggle="modal"
      data-target="#memberProfileModal"
    >
      <MemberProfileModal />
      <div className={classes.imgcontainer}>
        <img src={teamMemberPic} alt="Team Member Pic" width="50px" />
      </div>
      <div className={classes.detailscontainer}>
        <span className={classes.name}>{name}</span>
        <span className={classes.designation}>{designation}</span>
      </div>
      <div className={classes.iconcontainer}>
        <img src={NestleLogo} alt="Team Member Pic" width="30px" />
      </div>
    </div>
  );
};

export default TeamMemberDetails;
