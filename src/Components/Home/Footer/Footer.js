import React from "react";
import "./Footer.css";
import FooterCol from "../FooterCol/FooterCol";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faGooglePlusG,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const noNamed = [
    { name: "Wash & Dry", link: "/emergency" },
    { name: "Emergency Delivery", link: "/checkup" },
    { name: "Treatment of Personal Laundries", link: "/personal-treatment" },
    { name: "Home Cleaning", link: "/tooth-extract" },
    { name: "Business Blogs", link: "/checkup" },
  ];
  const ourAddress = [
    { name: "New York - 101010 Hudson", link: "//google.com/map" },
    { name: "Yards", link: "//google.com/map" },
  ];
  const categories = [
    { name: "Laundry", link: "/emergency" },
    { name: "Wash & Dry", link: "/checkup" },
    { name: "Dry Cleaning", link: "/personal-treatment" },
    { name: "Wash & Fold", link: "/tooth-extract" },
    { name: "Check Up", link: "/checkup" },
  ];
  const services = [
    { name: "Emergency Delivery", link: "/emergency" },
    { name: "E-commerce", link: "/checkup" },
    { name: "Treatment of Personal Laundries", link: "/personal-treatment" },
    { name: "Tooth Extraction", link: "/tooth-extract" },
    { name: "Home Cleaning", link: "/checkup" },
    { name: "Check Up", link: "/checkup" },
    { name: "Efficitur sed faucibus", link: "/checkup" },
  ];
  return (
    <footer className="footer-area clear-both">
      <div className="container pt-5">
        <div className="row py-5">
          <FooterCol
            key={1}
            menuTitle={"Featured Service"}
            menuItems={noNamed}
          />
          <FooterCol key={2} menuTitle="Services" menuItems={services} />
          <FooterCol key={3} menuTitle="Categories" menuItems={categories} />
          <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}>
            <ul className="social-media list-inline">
              <li className="list-inline-item">
                <a href="//facebook.com">
                  <FontAwesomeIcon
                    className="icon active-icon"
                    icon={faFacebookF}
                  />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="//google.com">
                  <FontAwesomeIcon className="icon" icon={faGooglePlusG} />
                </a>
              </li>
              <li className="list-inline-item ">
                <a href="//instagram.com">
                  <FontAwesomeIcon className="icon" icon={faInstagram} />
                </a>
              </li>
            </ul>
            <div className="mt-5">
              <h6>Call now</h6>
              <button className="btn btn-brand text-white">+2025550295</button>
            </div>
          </FooterCol>
        </div>
        <div className="copyRight text-center text-white my-3">
          <p>Copyright {new Date().getFullYear()} All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
