import { Link, useLocation } from "react-router-dom";
import classes from "./SubNavBar.module.css";

const SubNavBar = () => {
  const location = useLocation();

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light p-0 ${classes.navbar}`}
    >
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li
            className={`nav-item ${
              location.pathname.includes("/home") && "active" && classes.active
            }`}
          >
            <Link className="nav-link text-white pl-3 pr-3" to="/home">
              Home
            </Link>
          </li>
          <li
            className={`nav-item ${
              location.pathname === "/kms" && "active" && classes.active
            }`}
          >
            <Link className="nav-link text-white pl-3 pr-3" to="/kms">
              KMS
            </Link>
          </li>
          <li
            className={`nav-item ${
              location.pathname === "/solutions" && "active" && classes.active
            }`}
          >
            <Link className="nav-link text-white pl-3 pr-3" to="/solutions">
              Solutions
            </Link>
          </li>
          <li
            className={`nav-item ${
              location.pathname === "/accounts" && "active" && classes.active
            }`}
          >
            <Link className="nav-link text-white pl-3 pr-3" to="/accounts">
              Accounts
            </Link>
          </li>

          {/* <li className="nav-item">
            <a className="nav-link" href="#">
              Placeholder1
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Placeholder2
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Placeholder3
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Placeholder4
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Placeholder5
            </a>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default SubNavBar;
