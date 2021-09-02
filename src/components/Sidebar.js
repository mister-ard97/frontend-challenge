import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLocation } from 'react-router-dom';
import {
  faCar,
  faBus,
  faMotorcycle,
  faTruck,
  faCaravan,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';

import CustButton from 'components/Button';

import socmedImage from 'assets/images/social.png';

const Sidebar = ({ code }) => {
  const [hideContent, setHideContent] = useState(false);
  const location = useLocation();
  const dataCategories = [
    {
      img: faCar,
      name: 'Cars',
      value: 2687,
    },
    {
      img: faTruck,
      name: 'Trucks',
      value: 724,
    },
    {
      img: faMotorcycle,
      name: 'Motobikes',
      value: 290,
    },
    {
      img: faBus,
      name: 'Buses',
      value: 147,
    },
    {
      img: faCaravan,
      name: 'Campers',
      value: 89,
    },
  ];
  useEffect(() => {
    if (location.pathname === '/search') {
      setHideContent(true);
    }
  }, [location.pathname]);
  return (
    <>
      {!hideContent && (
        <div className="social-media-box">
          <img
            src={socmedImage}
            alt="social-box-icon"
            title="social-box-icon"
          />
        </div>
      )}

      {!hideContent && (
        <div className="category-section">
          <div className="my-card">
            <div className="title">CATEGORIES</div>
            <div className="content">
              {dataCategories.map((categoryItem) => {
                return (
                  <div key={categoryItem.name} className="cat-box">
                    <div className="cat-name justify-content-between">
                      <div>
                        <FontAwesomeIcon
                          color="#000000"
                          icon={categoryItem.img}
                          className="mr-3 my-auto"
                        />
                        <span className="my-auto">{categoryItem.name}</span>
                      </div>

                      <div className="cat-value">
                        <span>{categoryItem.value.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      <div className="contact-section">
        <div className="my-card">
          <div className="title">ONLINE SUPPORT</div>
          <div className="content">
            <div className="contact-box">
              <div className="d-flex flex-column flex-sm-row">
                <img
                  src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/137409052/original/d472c30361632da1c8d8fa780f572807d78abd9f/cartoon-profile-picture-or-avatar.png"
                  alt="con-per-img"
                  title="con-per-img"
                />
                <div className="d-flex flex-column">
                  <p>Reza Ardi</p>
                  <span>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry
                  </span>
                </div>
              </div>
              <CustButton
                type="info"
                className="my-button blue-button w-100 my-3"
                value={
                  <div className="d-flex justify-content-center">
                    <FontAwesomeIcon
                      color="#eeeeee"
                      icon={faPhone}
                      className="mr-3 my-auto"
                    />
                    <p className="my-auto">+1 (555) 555 - 35 - 55</p>
                  </div>
                }
              />
              <p className="contact">Contact Support Team</p>
              <p className="learn">
                Learn more about <span className="bold">Motor</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="newsletter-section">
        <div className="my-card">
          <div className="title">NEWSLETTER SIGNUP</div>
          <div className="content">
            <div className="newsletter-box">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
              </p>
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id={`${code}-exampleInputname1`}
                    aria-describedby="nameHelp"
                    placeholder="Name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    id={`${code}-exampleInputEmail1`}
                    aria-describedby="emailHelp"
                    placeholder="Email"
                  />
                </div>

                <div className="my-3">
                  <label className="checkbox my-auto">
                    <span className="checkbox__input my-auto">
                      <input type="checkbox" name="checkbox" />
                      <span className="checkbox__control">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          focusable="false"
                        >
                          <path
                            fill="none"
                            stroke="#000000"
                            strokeWidth="3"
                            d="M1.73 12.91l6.37 6.37L22.79 4.59"
                          />
                        </svg>
                      </span>
                    </span>
                    <span className="checkbox-text ml-3">
                      Receive special offers
                    </span>
                  </label>
                </div>

                <div className="text-center">
                  <CustButton
                    type="success"
                    className="my-button red-button"
                    value="SIGN UP"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {!hideContent && (
        <div className="my-card">
          <div className="title">ABOUT MOTOR</div>
          <div className="content">
            <div className="about-box-section">
              <p className="mb-0">
                <span className="strong">Ut enim ad minima</span> veniam, quis
                nostrum exercitationem ullam corporis suscipit esse quam nihil{' '}
                <span className="highlight">
                  molestiae consequatur, vel illum
                </span>{' '}
                qui dolorem eum fugiat quo voluptas nulla pariatur
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
