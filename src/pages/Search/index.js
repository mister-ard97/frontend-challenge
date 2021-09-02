import React, { useState, useEffect } from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import CustSelect from 'components/Select';
import CustButton from 'components/Button';

import vehicleData from 'helper/vehicleData.json';

import gridViewIcon from 'assets/images/icon/ic_grid_view.png';
import listViewIcon from 'assets/images/icon/ic_list_view.png';

import Sidebar from 'components/Sidebar';
import ProductView from './components/ProductView';

const SearchPage = () => {
  const [view, setView] = useState('grid');
  const [pages, setPages] = useState(1);
  const [type, setType] = useState('cars');
  const [vehicleList, setVehicleList] = useState(null);
  const totalPage = 10;

  useEffect(() => {
    if (vehicleData.list) {
      setVehicleList(vehicleData.list.slice(0, 15));
    }
  }, []);

  useEffect(() => {
    if (view === 'grid') {
      setVehicleList(vehicleData.list.slice(0, 15));
    } else {
      setVehicleList(vehicleData.list.slice(0, 7));
    }
  }, [view]);

  const RenderPagePagination = () => {
    if (totalPage !== 0) {
      const arrJSX = [];
      const dot = [];

      const functionPushDataToArray = (i) => {
        arrJSX.push(
          <PaginationItem key={i} active={i === pages}>
            <PaginationLink onClick={() => setPages(i)} style={{ zIndex: 0 }}>
              {i < 10 ? `0${i}` : i}
            </PaginationLink>
          </PaginationItem>,
        );
      };

      for (let i = 1; i <= totalPage; i += 1) {
        if (pages <= 5) {
          if (i <= 5) {
            functionPushDataToArray(i);
          } else {
            dot.push(i);
          }

          if (i === totalPage) {
            if (dot.length >= 1) {
              arrJSX.push(
                <PaginationItem key="dot">
                  <PaginationLink className="dot-pages">...</PaginationLink>
                </PaginationItem>,
              );
            }
            functionPushDataToArray(i);
          }
        } else {
          if (i === 1) {
            arrJSX.push(
              <PaginationItem key="dot">
                <PaginationLink className="dot-pages">...</PaginationLink>
              </PaginationItem>,
            );
          }
          if (i > 5 || i === totalPage) {
            functionPushDataToArray(i);
          }
        }
      }

      return arrJSX;
    }

    return null;
  };

  return (
    <div>
      <div className="container">
        <div className="row mx-0">
          <div className="col-lg-8 px-0 order-2 order-lg-1">
            <div className="search-page-view">
              <div className="row mx-0">
                <div className="col-md-4 my-auto px-0">
                  <h6 className="mb-0">SEARCH RESULTS</h6>
                </div>
                <div className="col-md-8 px-0">
                  <div className="d-flex justify-content-between">
                    <div className="d-flex">
                      <p className="my-auto">SORT BY:</p>
                    </div>

                    <div className="d-flex right-content">
                      <CustSelect>
                        <option value="">Price</option>
                      </CustSelect>
                      <CustButton
                        type="secondary"
                        className={`my-button gray-button ${
                          view === 'list' ? 'active-view' : ''
                        } half-left-capsule my-auto`}
                        value={
                          <img
                            src={listViewIcon}
                            alt="ic_list"
                            title="ic_list"
                          />
                        }
                        onClick={() => setView('list')}
                      />
                      <CustButton
                        type="secondary"
                        className={`my-button gray-button ${
                          view === 'grid' ? 'active-view' : ''
                        } half-right-capsule my-auto`}
                        value={
                          <img
                            src={gridViewIcon}
                            alt="ic_grid"
                            title="ic_grid"
                          />
                        }
                        onClick={() => setView('grid')}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="search-pagination top">
              <Pagination listClassName="m-0">
                <PaginationItem>
                  <PaginationLink
                    onClick={() => setPages(pages !== 1 ? pages - 1 : pages)}
                    style={{ zIndex: 0 }}
                    className="outer"
                  >
                    Previous
                  </PaginationLink>
                </PaginationItem>

                <RenderPagePagination />

                <PaginationItem>
                  <PaginationLink
                    onClick={() =>
                      setPages(pages !== totalPage ? pages + 1 : pages)
                    }
                    style={{ zIndex: 0 }}
                    className="outer"
                  >
                    Next
                  </PaginationLink>
                </PaginationItem>
              </Pagination>
            </div>

            <div className="search-data-view">
              <ProductView view={view} vehicleList={vehicleList} />
            </div>

            <div className="search-pagination top">
              <Pagination listClassName="m-0">
                <PaginationItem>
                  <PaginationLink
                    onClick={() => setPages(pages !== 1 ? pages - 1 : pages)}
                    style={{ zIndex: 0 }}
                    className="outer"
                  >
                    Previous
                  </PaginationLink>
                </PaginationItem>

                <RenderPagePagination />

                <PaginationItem>
                  <PaginationLink
                    onClick={() =>
                      setPages(pages !== totalPage ? pages + 1 : pages)
                    }
                    style={{ zIndex: 0 }}
                    className="outer"
                  >
                    Next
                  </PaginationLink>
                </PaginationItem>
              </Pagination>
            </div>

            <div className="d-block d-lg-none">
              <Sidebar code="search1" />
            </div>
          </div>

          <div className="col-lg-4 pl-0 pl-lg-4 pr-0 order-1 order-lg-2">
            <div className="search-list-box">
              <div className="my-card">
                <div className="title">
                  <FontAwesomeIcon
                    color="#444941"
                    icon={faSearch}
                    className="mr-2"
                  />{' '}
                  SEARCH FILTER
                </div>
                <div className="content">
                  <div className="search-items-box">
                    <span>TYPE</span>

                    <CustSelect
                      value={type}
                      onChange={(e) => {
                        setType(e.target.value);
                      }}
                    >
                      <option value="" disabled hidden>
                        Select Type
                      </option>
                      <option value="cars">&#xf1b9; Cars</option>
                      <option value="trucks">&#xf0d1; Trucks</option>
                      <option value="motorbikes">&#xf21c; Motorbikes</option>
                      <option value="buses">&#xf207; Buses</option>
                      <option value="campers">&#xf0d1; Campers</option>
                    </CustSelect>

                    <div className="second-box-content">
                      <div className="radio-item">
                        <input type="radio" name="item-type" />{' '}
                        <span>Used Items</span>
                      </div>
                      <div className="radio-item">
                        <input type="radio" name="item-type" />{' '}
                        <span>New Items</span>
                      </div>
                    </div>

                    <span>CATEGORIES</span>

                    <CustSelect>
                      <option value="sedan">Sedan</option>
                    </CustSelect>

                    <div className="second-box-content">
                      <div className="checkbox-container">
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
                          <span className="checkbox-text">With photos</span>
                        </label>
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
                          <span className="checkbox-text">With Videos</span>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="divider" />

                  <div className="search-items-box">
                    <div className="input-container">
                      <span>TRANSMISSION</span>

                      <CustSelect>
                        <option value="automatic">Automatic</option>
                      </CustSelect>
                    </div>

                    <div className="input-container">
                      <span>ENGINE</span>

                      <div className="d-flex flex-column flex-sm-row">
                        <CustSelect>
                          <option value="">1,6</option>
                        </CustSelect>

                        <span className="mx-3 my-auto"> - </span>

                        <CustSelect>
                          <option value="">2,0</option>
                        </CustSelect>
                      </div>
                    </div>

                    <div className="input-container">
                      <span>FUEL</span>

                      <CustSelect>
                        <option value="">Petrol</option>
                      </CustSelect>
                    </div>

                    <div className="input-container">
                      <span>DRIVE</span>

                      <CustSelect>
                        <option value="">Front-wheel</option>
                      </CustSelect>
                    </div>

                    <div className="input-container">
                      <span>MILEAGE</span>

                      <div className="d-flex flex-column flex-sm-row">
                        <CustSelect>
                          <option value="">5,000</option>
                        </CustSelect>

                        <span className="mx-3 my-auto"> - </span>

                        <CustSelect>
                          <option value="">12,000</option>
                        </CustSelect>
                      </div>
                    </div>

                    <div className="input-container">
                      <span>EXTERIOR COLOR</span>

                      <CustSelect>
                        <option value="">Black</option>
                      </CustSelect>
                    </div>

                    <div className="input-container">
                      <span>INTERIOR COLOR</span>

                      <CustSelect>
                        <option value="">Dark grey</option>
                      </CustSelect>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="d-none d-lg-block">
              <Sidebar code="search2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
