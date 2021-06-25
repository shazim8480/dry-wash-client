import React from "react";

const Navbar = () => {
  return (
    <nav style={{ zIndex: "2" }} class="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link ms-5 text-white" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link ms-5 text-white" href="#">
                Admin
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link ms-5 text-white" href="#">
                Our Services
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link ms-5 text-white" href="#">
                Reviews
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link ms-5 text-white" href="#">
                Contact Us
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link ms-5 text-white" href="#">
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
