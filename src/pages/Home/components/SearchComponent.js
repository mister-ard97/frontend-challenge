import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CustButton from 'components/Button';
import CustSelect from 'components/Select';

const SearchComponent = () => {
  const [type, setType] = useState('cars');
  return (
    <div className="row mx-0">
      <div className="col-12 px-0">
        <div className="first-section">
          <div className="d-flex flex-column flex-sm-row">
            <div className="box-content">
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
                  <input type="radio" name="item-type" /> <span>New Items</span>
                </div>
              </div>
            </div>

            <div className="box-content">
              <span>CATEGORY</span>

              <CustSelect>
                <option value="cars">Sedan</option>
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
                            stroke="#b83e3e"
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
                            stroke="#b83e3e"
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
          </div>
        </div>

        <div className="divider-dashed" />
      </div>

      <div className="col-12 p-0">
        <div className="first-section">
          <div className="d-flex flex-column flex-sm-row">
            <div className="box-content">
              <span>LOCATION</span>

              <CustSelect>
                <option value="">Indonesia</option>
              </CustSelect>
            </div>

            <div className="box-content">
              <span>BRAND</span>

              <CustSelect>
                <option value="">Subaru</option>
              </CustSelect>
            </div>
            <div className="box-content">
              <span>MODEL</span>

              <CustSelect>
                <option value="">All</option>
              </CustSelect>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-12 p-0">
        <div className="last-section">
          <div className="d-flex flex-column flex-sm-row">
            <div className="box-content">
              <span>PRICE</span>

              <div className="d-flex flex-column flex-sm-row">
                <CustSelect>
                  <option value="">$5,000</option>
                </CustSelect>

                <span className="mx-3 my-auto"> - </span>

                <CustSelect>
                  <option value="">$12,000</option>
                </CustSelect>
              </div>
            </div>

            <div className="box-content mt-sm-auto">
              <div className="d-flex justify-content-between">
                <p className="my-auto">X Clear all filters</p>

                <Link to="/search">
                  <CustButton
                    type="warning"
                    className="my-button yellow-button search-button  my-auto"
                    value="SEARCH"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchComponent;
