import React from 'react';
import { Link } from 'react-router-dom';

// component
import CustButton from 'components/Button';

// nav-top and main-nav component
import dropdownGray from 'assets/images/icon/dropdowngray.svg';

import logoNavbar from 'assets/images/header/logo.png';

const Navbar = () => {
  return (
    <>
      <div className="nav-top">
        <div className="container">
          <div className="d-flex flex-column flex-sm-row justify-content-between">
            <div className="nav-top-left-content">
              <a href="/">Home</a>
              <a className="active" href="/">
                About
              </a>
              <a href="/">Help</a>
              <a href="/">Contact</a>
            </div>

            <div className="nav-top-right-content">
              <div className="first-content mr-3">
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/255px-Flag_of_the_United_Kingdom.svg.png"
                  alt="flag"
                  title="flag"
                  className="mr-2"
                />
                <span>English</span>
                <img
                  src={dropdownGray}
                  alt="dropdowngray"
                  title="dropdowngray"
                />
              </div>
              <div className="second-content">
                <span>Hi Username!</span>
                <img
                  src={dropdownGray}
                  alt="dropdowngray"
                  title="dropdowngray"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-nav">
        <div className="container">
          <div className="d-flex justify-content-between">
            <div className="main-nav-left">
              <div className="container-logo">
                <Link to="/">
                  <img
                    src={logoNavbar}
                    alt="logo-main-nav"
                    title="logo-main-nav"
                  />
                </Link>
                {/* <CustButton
                  type="success"
                  className="my-button green-button d-block d-sm-none"
                  value="+ ADD LISTING"
                /> */}
              </div>
              <nav>
                <a className="active" href="/search">
                  Buy
                </a>
                <a href="/">Sell</a>
                <a href="/">News</a>
                <a href="/">Service</a>
              </nav>
            </div>
            <div className="main-nav-right my-md-auto">
              <CustButton
                type="success"
                className="my-button green-button"
                value="+ ADD LISTING"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
