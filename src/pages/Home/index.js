import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';

import phoneImage from 'assets/images/home/phone-transaparant.png';

// data
import vehicleData from 'helper/vehicleData.json';
import blogData from 'helper/blogData.json';

// component
import CustButton from 'components/Button';

import Sidebar from 'components/Sidebar';
import SearchComponent from './components/SearchComponent';
import TypeCarComponent from './components/TypeCarComponent';
import BlogComponent from './components/BlogComponent';

const Home = () => {
  const [activeTab, setActiveTab] = useState('1');
  const [activeTypeTab, setActiveTypeTab] = useState('3');
  const [activeBlogTab, setActiveBlogTab] = useState('5');

  const vehicleList = vehicleData?.list || [];
  const blogList = blogData?.list || [];

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div>
      {/* Banner Home */}
      <div className="banner-home">
        <div className="background">
          <div className="container">
            <div className="d-flex justify-content-between">
              <div className="position-relative">
                <img
                  src={phoneImage}
                  alt="phone"
                  title="phone"
                  className="phone-image"
                />
              </div>
              <div className="banner-text-box">
                <h2>Lorem ipsum</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  standard dummy text ever since the 1500s, when an unknown
                </p>

                <CustButton
                  type="success"
                  className="my-button red-button"
                  value="VISIT MOBILE VERSION"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row mx-0">
          <div className="col-lg-8 pl-0">
            <div className="search-box">
              <Nav tabs>
                <NavItem>
                  <NavLink
                    className={`${activeTab === '1' ? 'active' : ''}`}
                    onClick={() => {
                      toggle('1');
                    }}
                  >
                    <FontAwesomeIcon
                      color={`${activeTab === '1' ? '#FFFFFF' : '#b3b3b3'}`}
                      icon={faSearch}
                      className="mr-2"
                    />{' '}
                    SEARCH
                  </NavLink>
                </NavItem>
                <NavItem className="ml-3">
                  <NavLink
                    className={`${activeTab === '2' ? 'active' : ''}`}
                    onClick={() => {
                      toggle('2');
                    }}
                  >
                    <FontAwesomeIcon
                      color={`${activeTab === '2' ? '#FFFFFF' : '#b3b3b3'}`}
                      icon={faPlus}
                      className="mr-2"
                    />{' '}
                    ADD LISTING
                  </NavLink>
                </NavItem>
              </Nav>
              <TabContent activeTab={activeTab}>
                <TabPane className="container-tab" tabId="1">
                  <SearchComponent />
                </TabPane>
                <TabPane className="container-tab" tabId="2">
                  <SearchComponent />
                </TabPane>
              </TabContent>
            </div>

            <div className="type-car-box">
              <Nav tabs>
                <NavItem>
                  <NavLink
                    className={`${activeTypeTab === '3' ? 'active' : ''}`}
                    onClick={() => {
                      setActiveTypeTab('3');
                    }}
                  >
                    USED
                  </NavLink>
                </NavItem>
                <NavItem className="ml-3">
                  <NavLink
                    className={`${activeTypeTab === '4' ? 'active' : ''}`}
                    onClick={() => {
                      setActiveTypeTab('4');
                    }}
                  >
                    NEW
                  </NavLink>
                </NavItem>
              </Nav>
              <TabContent activeTab={activeTypeTab}>
                <TabPane className="container-tab" tabId="3">
                  <TypeCarComponent vehicleData={vehicleList} />
                </TabPane>
                <TabPane className="container-tab" tabId="4">
                  <TypeCarComponent vehicleData={vehicleList} />
                </TabPane>
              </TabContent>
            </div>

            <div className="blog-box">
              <Nav tabs>
                <NavItem>
                  <NavLink
                    className={`${activeBlogTab === '5' ? 'active' : ''}`}
                    onClick={() => {
                      setActiveBlogTab('5');
                    }}
                  >
                    NEWS
                  </NavLink>
                </NavItem>
                <NavItem className="ml-3">
                  <NavLink
                    className={`${activeBlogTab === '6' ? 'active' : ''}`}
                    onClick={() => {
                      setActiveBlogTab('6');
                    }}
                  >
                    OFFERS
                  </NavLink>
                </NavItem>
                <NavItem className="ml-3">
                  <NavLink
                    className={`${activeBlogTab === '7' ? 'active' : ''}`}
                    onClick={() => {
                      setActiveBlogTab('7');
                    }}
                  >
                    POPULAR
                  </NavLink>
                </NavItem>
              </Nav>
              <TabContent activeTab={activeBlogTab}>
                <TabPane className="container-tab" tabId="5">
                  <BlogComponent blogList={blogList} />
                </TabPane>
                <TabPane className="container-tab" tabId="6">
                  <BlogComponent blogList={blogList} />
                </TabPane>
                <TabPane className="container-tab" tabId="7">
                  <BlogComponent blogList={blogList} />
                </TabPane>
              </TabContent>
            </div>
          </div>
          <div className="col-lg-4 pr-sm-0">
            <Sidebar />
          </div>
        </div>
      </div>

      {/* Download Section */}
      <div className="download-section">
        <div className="container">
          <div className="d-flex flex-column flex-sm-row justify-content-between">
            <div className="first-content">
              <h5>Lorem ipsinatus</h5>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <div className="second-content my-auto">
              <CustButton
                type="success"
                className="my-button green-button download"
                value="DOWNLOAD"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
