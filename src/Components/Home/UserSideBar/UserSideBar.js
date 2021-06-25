import React from "react";
import { Link } from "react-router-dom";
import "./UserSideBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCog,
  faSignOutAlt,
  faGripHorizontal,
} from "@fortawesome/free-solid-svg-icons";
import { faFileAlt } from "@fortawesome/free-regular-svg-icons";

const UserSideBar = () => {
  return (
    <div
      className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4"
      style={{ height: "100vh" }}
    >
      <ul className="list-unstyled">
        <li>
          <Link to="/checkOut" className="text-white">
            <FontAwesomeIcon icon={faGripHorizontal} /> <span>Checkout</span>
          </Link>
        </li>
        <li>
          <Link to="/review" className="text-white">
            <FontAwesomeIcon icon={faFileAlt} /> <span>Add Review</span>
          </Link>
        </li>
        <li>
          <Link to="#" className="text-white">
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

export default UserSideBar;
