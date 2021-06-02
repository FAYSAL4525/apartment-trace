import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
	faInstagram,
	faYoutube
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
	return (
    <>
      <div className="row bg-success p-5">
        <div className="col-md-3 text-white">
          H#340(4th Floor),Road #24,New DOHS,Mohakhali,Dhaka,Bangladesh
          phone:018XXXXXXXX E-mail:info@company.com
        </div>
        <div className="col-md-3 list-unstyled text-white ps-5">
          <h5>Company</h5>
          <li>About </li>
          <li>Site Map</li>
          <li>support Center</li>
          <li>Terms Conditions</li>
          <li>Submit Listing</li>
        </div>
        <div className="col-md-3 text-white list-unstyled">
          <h5>Quicks Links</h5>
          <li>Rentals</li>
          <li>Sales</li>
          <li>Contact</li>
          <li>Terms Conditions</li>
          <li>Our Blog</li>
        </div>
        <div className="col-md-3 text-white">
          <h5>About Us</h5>
          we are the top real estate agency in Sydney,with agents available to
          answer any question 24/7.
          <br />
          <br />
          <FontAwesomeIcon className="fa-2x" icon={faFacebook} />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <FontAwesomeIcon className="fa-2x" icon={faTwitter} />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <FontAwesomeIcon className="fa-2x" icon={faInstagram} />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <FontAwesomeIcon className="fa-2x" icon={faYoutube} />
        </div>
      </div>
    </>
  );
};

export default Footer;