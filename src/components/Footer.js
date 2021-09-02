import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faFacebookF,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';

import logoFooter from 'assets/images/footer/logo.png';

const Footer = () => {
  return (
    <>
      <footer className="footer-box">
        <div className="container d-flex flex-column flex-lg-row">
          <div className="box-content">
            <h5>Motor</h5>
            <a href="/">Home</a>
            <a href="/">Privacy Policy</a>
            <a href="/">Sitemap</a>
            <a href="/">News</a>
          </div>
          <div className="box-content">
            <h5>About</h5>
            <a href="/">Latest News</a>
            <a href="/">Press Release</a>
            <a href="/">Careers</a>
            <a href="/">Terms of Use</a>
          </div>
          <div className="box-content">
            <h5>Help</h5>
            <a href="/">Contact Us</a>
            <a href="/">Online Support</a>
            <a href="/">FAQ</a>
          </div>
          <div className="box-content-2 mr-5">
            <h5>Twitter</h5>
            <p>
              <a href="/">@bestwebsoft</a> velit, vitae tincidunt orci. Proin
              vitae auctor le
            </p>
            <a href="/">www.bestwebsoft.com</a>
            <p className="post-time">posted 2 days ago</p>
          </div>
          <div className="box-content-2">
            <h5>Contact Info</h5>
            <p>Fusce nec gravida risus. Pellentesque eros magna, lobortis</p>
            <div className="mt-3">
              <p className="contact-item">
                <span>P.:</span> (555) 366 - 00 - 00
              </p>
              <p className="contact-item">
                <span>E.:</span> sales@bestwebsoft.com
              </p>
            </div>
          </div>
        </div>
      </footer>

      <div className="main-nav d-none d-sm-block">
        <div className="container">
          <div className="d-flex justify-content-between">
            <div className="main-nav-left">
              <Link to="/">
                <img
                  src={logoFooter}
                  alt="logo-main-nav"
                  title="logo-main-nav"
                />
              </Link>
              <nav>
                <a className="active-top" href="/search">
                  Buy
                </a>
                <a href="/">Sell</a>
                <a href="/">News</a>
                <a href="/">Service</a>
              </nav>
            </div>
            <div className="main-nav-right-footer my-auto">
              <div className="d-flex">
                <a href="/">
                  <FontAwesomeIcon color="#FFFFFF" icon={faTwitter} />
                </a>
                <a href="/">
                  <FontAwesomeIcon color="#FFFFFF" icon={faLinkedinIn} />
                </a>
                <a href="/">
                  <FontAwesomeIcon color="#FFFFFF" icon={faFacebookF} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
