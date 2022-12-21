import axios from "axios";
import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getEmployeeDetails } from "../../../fetchers/getFetchers";
import TeamMemberProfile from "../TeamMemberProfile/TeamMemberProfile";

import classes from "./Team.module.css";

const Team = () => {
  const numbers = [1, 2, 3, 4];
  const [teamData, setTeamData] = useState([]);

  useEffect(() => {
    getEmployeeDetails()
      .then((data) => setTeamData(data))
      .catch((err) => console.log(err.message, err));

    console.log("TeamData: ", teamData);
  }, []);

  return (
    <div className="container">
      <div className={`row ${classes.header}`}>
        <Link className={`nav-link pr-0 pl-0 ${classes.link}`} to="/home">
          Home
        </Link>
        <span className="nav-link pr-0 pl-0">&gt;Team</span>
      </div>
      <br />
      <div className="row">
        <h5>Team</h5>
        {teamData.length > 0 && <img src={teamData[14].profilePic} />}
      </div>
      <div className="row">
        <div className="col-md-3">
          <div className="card custom-card">
            <div className="card-header custom-card-header">
              <span className="float-left">Filter</span>
              <span className="float-right">Clear All</span>
            </div>
            <div className="card-body text-left font-weight-bold">
              <p>Role</p>
              <p>Account</p>
              <p>Area of Interest</p>
            </div>
          </div>
        </div>
        <div className="col-md-9">
          <div className="row">
            <div className="col-md-12">
              <div className="card custom-card">
                <div className="card-body">
                  <div className="input-group ">
                    <input
                      className="form-control py-2 border-right-0 border"
                      type="search"
                      placeholder="Search by Name or SAP ID"
                    />
                    <span className="input-group-append">
                      <button
                        className="btn btn-outline-secondary border-left-0 border"
                        type="button"
                      >
                        <i className="bi bi-search"></i>
                      </button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            {numbers.map((num) => (
              <Fragment key={num}>
                <TeamMemberProfile />
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
