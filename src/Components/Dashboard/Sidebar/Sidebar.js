import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCog,
  faSignOutAlt,
  faGripHorizontal,
} from "@fortawesome/free-solid-svg-icons";
import { faFileAlt } from "@fortawesome/free-regular-svg-icons";

const Sidebar = () => {
  return (
    <div
      className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4"
      style={{ height: "100vh" }}
    >
      <ul className="list-unstyled">
        <li>
          <Link to="/orders" className="text-white">
            <FontAwesomeIcon icon={faGripHorizontal} /> <span>Orders</span>
          </Link>
        </li>
        <li>
          <Link to="/manageServices" className="text-white">
            <FontAwesomeIcon icon={faFileAlt} /> <span>Manage Services</span>
          </Link>
        </li>
        <li>
          <Link to="/dashboard" className="text-white">
            <FontAwesomeIcon icon={faCog} /> <span>Setting</span>
          </Link>
        </li>
      </ul>
      <div>
        <Link to="/" className="text-white">
          <FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
