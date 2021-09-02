import React from 'react';
import { Link } from 'react-router-dom';

import Rating from 'components/Rating';

// icon component grid and list view
import iconCalendar from 'assets/images/icon/ic_calendar.png';
import iconEngine from 'assets/images/icon/ic_engine.png';
import iconFeatures from 'assets/images/icon/search/ic_features.png';
import iconFuel from 'assets/images/icon/search/ic_fuel.png';
import iconSedan from 'assets/images/icon/search/ic_sedan.png';
import iconSeller from 'assets/images/icon/search/ic_seller.png';
import iconTypeCar from 'assets/images/icon/search/ic_type_car.png';
import iconUsage from 'assets/images/icon/search/ic_usage.png';

const ProductView = ({ view, vehicleList }) => {
  const RenderListView = () => {
    return (
      <div className="list-view">
        <div className="row mx-0">
          <div className="col-md-12 px-0">
            {vehicleList &&
              vehicleList.map((vehicleItem) => {
                const {
                  manufacturer,
                  model,
                  yearProduction,
                  engine,
                  price,
                  thumbnailPicture,
                  slug,
                  rating,
                  type: typeCar,
                  usage,
                  fuel,
                  createdAt,
                  seller,
                  location,
                  locAcro,
                  productId,
                } = vehicleItem;

                return (
                  <div key={`${productId}List`} className="card-view">
                    <Link to={`/product/${slug}`}>
                      <div className="row mx-0">
                        <div className="col-md-5 px-0">
                          <img
                            src={thumbnailPicture}
                            className="thumbnail"
                            alt="thumbnail"
                            title="thumbnail"
                          />
                        </div>
                        <div className="col-md-7 pr-0">
                          <p className="mb-0">
                            {manufacturer}{' '}
                            <span className="highlight">{model}</span>
                          </p>
                          <div className="row mx-0 my-1">
                            <div className="col-md-6 px-0">
                              <p className="location mb-0">
                                {location}, <span>{locAcro}</span>
                              </p>
                            </div>

                            <div className="col-md-6 px-0 my-1">
                              <div className="box-image mb-0">
                                <img
                                  src={iconSeller}
                                  alt="ic_cal"
                                  title="ic_cal"
                                />
                                <span className="ml-2">{seller}</span>
                              </div>
                            </div>
                          </div>

                          <div className="features-box row mx-0">
                            <div className="col-md-6 px-0">
                              <div className="box-image mb-0">
                                <img
                                  src={iconCalendar}
                                  alt="ic_cal"
                                  title="ic_cal"
                                />
                                <span className="ml-2">{yearProduction}</span>
                              </div>
                              <div className="box-image mb-0">
                                <img
                                  src={iconSedan}
                                  alt="ic_cal"
                                  title="ic_cal"
                                />
                                <span className="ml-2">Sedan</span>
                              </div>
                              <div className="box-image mb-0">
                                <img
                                  src={iconFeatures}
                                  alt="ic_cal"
                                  title="ic_cal"
                                />
                                <span className="ml-2">Front-wheel</span>
                              </div>
                              <div className="box-image mb-0">
                                <img
                                  src={iconEngine}
                                  alt="ic_cal"
                                  title="ic_cal"
                                />
                                <span className="ml-2">{engine}</span>
                              </div>
                            </div>

                            <div className="col-md-6 px-0">
                              <div className="box-image mb-0">
                                <img
                                  src={iconTypeCar}
                                  alt="ic_cal"
                                  title="ic_cal"
                                />
                                <span className="ml-2">{typeCar}</span>
                              </div>
                              <div className="box-image mb-0">
                                <img
                                  src={iconFuel}
                                  alt="ic_cal"
                                  title="ic_cal"
                                />
                                <span className="ml-2">{fuel}</span>
                              </div>
                              <div className="box-image mb-0">
                                <img
                                  src={iconUsage}
                                  alt="ic_cal"
                                  title="ic_cal"
                                />
                                <span className="ml-2">
                                  {usage.toLocaleString()}
                                </span>
                              </div>
                            </div>
                          </div>

                          <div className="d-flex justify-content-between mt-2 pr-2">
                            <p className="price my-auto">
                              ${price.toLocaleString()}
                            </p>
                            <p className="created my-auto">{createdAt}</p>
                            <div>
                              <Rating
                                ratingProduk={rating}
                                productId={productId}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    );
  };

  const RenderGridView = () => {
    return (
      <div className="grid-view">
        <div className="row mx-0">
          {vehicleList &&
            vehicleList.map((vehicleItem) => {
              const {
                manufacturer,
                model,
                yearProduction,
                engine,
                price,
                thumbnailPicture,
                slug,
                rating,
                type: typeCar,
                usage,
                // fuel,
                // createdAt,
                seller,
                location,
                locAcro,
                productId,
              } = vehicleItem;
              return (
                <div
                  key={`${productId}Grid`}
                  className="col-md-6 col-lg-4 px-0 px-sm-2 px-lg-0"
                >
                  <Link to={`/product/${slug}`}>
                    <div className="card-view">
                      <img
                        src={thumbnailPicture}
                        className="thumbnail"
                        alt="img-thumb"
                        title="img-thumb"
                      />
                      <div className="row mx-0 mt-2">
                        <div className="col-8 px-0">
                          <p className="mb-0">{manufacturer}</p>

                          <p className="highlight mb-0">{model}</p>
                        </div>
                        <div className="col-4 px-0 text-right">
                          <img src={iconSeller} alt="ic_cal" title={seller} />
                        </div>
                      </div>

                      <p className="location">
                        {location}, <span>{locAcro}</span>
                      </p>

                      <div className="box-image mb-0">
                        <img src={iconCalendar} alt="ic_cal" title="ic_cal" />
                        <span className="ml-2">{yearProduction}</span>
                      </div>

                      <div className="box-image mb-0">
                        <img src={iconEngine} alt="ic_cal" title="ic_cal" />
                        <span className="ml-2">{engine}</span>
                      </div>

                      <div className="box-image mb-0">
                        <img src={iconTypeCar} alt="ic_cal" title="ic_cal" />
                        <span className="ml-2">{typeCar}</span>
                      </div>

                      <div className="box-image mb-3">
                        <img src={iconUsage} alt="ic_cal" title="ic_cal" />
                        <span className="ml-2">
                          {usage.toLocaleString()} miles
                        </span>
                      </div>

                      <p className="price">${price.toLocaleString()}</p>

                      <div className="d-block text-right">
                        <Rating ratingProduk={rating} productId={productId} />
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
    );
  };

  return <>{view === 'grid' ? <RenderGridView /> : <RenderListView />}</>;
};

export default ProductView;
