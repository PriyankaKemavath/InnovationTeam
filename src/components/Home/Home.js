import { Link } from "react-router-dom";
import teamupdatesBg from "../../assets/TeamUpdatesBgNew.png";
import TeamMemberDetails from "./TeamMemberDetails/TeamMemberDetails";
import Discussions from "./Discussions/Discussions";
import IdeaSubmissionModal from "../Modals/IdeaSubmissionModal/IdeaSubmissionModal";

import classes from "./Home.module.css";

const Home = () => {
  return (
    <div className="container p-4">
      <IdeaSubmissionModal />
      <div className="row">
        <div className="col-3">
          <div className="card custom-card border-0">
            <div
              className={`card-header custom-card-header rounded ${classes.ideacard}`}
              data-toggle="modal"
              data-target="#ideaSubmissionModal"
            >
              <span className="text-left">
                <i className="bi bi-lightbulb"></i>&nbsp;Submit Idea/Use
                Case/Innovation
              </span>
            </div>
          </div>
          <div className="card custom-card mt-3">
            <div className="card-header custom-card-header text-left">
              Top Focus
            </div>
            <div className="card-body">
              <h5 className="card-title">Supercharging progress</h5>
              <p className="card-text">
                Supercharging progress is not just about the work we do for our
                customers –– it’s also the work we do for the people and our
                planet.{" "}
                {/* HCLTech is focused on bringing together the best of
                technology in digital, engineering and cloud, and the best of
                our people to supercharge progress across all the ecosystems and
                geographies in which we work. */}
              </p>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="card custom-card">
            <div className="card-body">
              <input
                className="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </div>
          </div>
          <div className="card custom-card img-fluid text-white border-0 mt-3">
            <img
              className="card-img-top img-fluid rounded"
              src={teamupdatesBg}
              alt="TeamUpdatesBG"
            />
            <div className="card-img-overlay">
              <p className="card-text text-left mt-4">
                <strong>About Us</strong>
              </p>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card custom-card">
            <div className="card-header custom-card-header text-left">
              <Link className="nav-link text-white p-0" to="/home/team">
                Team
              </Link>
            </div>
            <div className="card-body custom-card-body">
              <TeamMemberDetails name="CJ" designation="Delivery lead" />
              <TeamMemberDetails name="CJ" designation="Account lead" />
              <TeamMemberDetails name="CJ" designation="Project lead" />
              <TeamMemberDetails name="CJ" designation="Team lead" />
            </div>
          </div>
          <div className="card custom-card mt-3">
            <div className="card-header custom-card-header text-left">
              Dicussions
            </div>
            <div className="card-body">
              <Discussions />
              <hr />
              <Discussions />
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-3"></div>
        <div className="col-md-6"></div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
};

export default Home;
