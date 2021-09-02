import React, { useState, useEffect } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import renderHTML from 'react-render-html';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

import vehicleData from 'helper/vehicleData.json';

import Sidebar from 'components/Sidebar';
import Rating from 'components/Rating';
import CustButton from 'components/Button';

import iconCalendar from 'assets/images/icon/ic_calendar.png';
import iconEngine from 'assets/images/icon/ic_engine.png';
import iconFeatures from 'assets/images/icon/search/ic_features.png';
import iconFuel from 'assets/images/icon/search/ic_fuel.png';
import iconSedan from 'assets/images/icon/search/ic_sedan.png';
import iconSeller from 'assets/images/icon/search/ic_seller.png';
import iconTypeCar from 'assets/images/icon/search/ic_type_car.png';
import iconUsage from 'assets/images/icon/search/ic_usage.png';
import iconExterior from 'assets/images/icon/ic_exterior.png';
import iconInterior from 'assets/images/icon/ic_interior.png';

const ProductPage = () => {
  const params = useParams();
  const [commentView, setCommentView] = useState([]);
  const [hideComment, setHideComment] = useState(true);
  const [redirect, setRedirect] = useState(false);
  const [productDetail, setProductDetail] = useState(null);

  useEffect(() => {
    if (params.slug) {
      const findProduct = vehicleData.list.find(
        (vehicleItem) => vehicleItem.slug === params.slug,
      );

      if (findProduct) {
        const { comment } = findProduct;

        if (comment.length >= 3) {
          setCommentView(comment.slice(0, 3));
        } else {
          setCommentView(comment);
        }
        setProductDetail(findProduct);
      } else {
        setRedirect(true);
      }
    }
  }, [params]);

  useEffect(() => {
    if (productDetail) {
      if (!hideComment) {
        setCommentView(productDetail.comment);
      } else {
        setCommentView(productDetail.comment.slice(0, 3));
      }
    }
  }, [hideComment, productDetail]);

  const hours = 5;

  if (redirect) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      {productDetail && (
        <div className="container">
          <div className="row mx-0">
            <div className="col-lg-8 pl-0">
              <div className="breadcrumb-product">
                <p>
                  BUY - CARS - <span>{productDetail.manufacturer}</span>
                </p>
              </div>

              <div className="product-main-box">
                <div className="my-card">
                  <div className="title">
                    <div className="d-flex justify-content-between">
                      <p>
                        {productDetail.manufacturer} {productDetail.model}
                      </p>
                      <div>
                        <Rating
                          ratingProduk={productDetail.rating}
                          productId={productDetail.productId}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="content">
                    <div className="row mx-0">
                      <div className="col-lg-6 col-xl-7 pl-0">
                        <div className="image-product-box">
                          <img
                            className="main-image"
                            src={productDetail.thumbnailPicture}
                            alt="main-product-img"
                            title="main-product-img"
                          />
                          <div className="second-image-box">
                            {productDetail.productPictures.map(
                              (pictureItem) => {
                                return (
                                  <img
                                    key={pictureItem}
                                    className="secondary-image"
                                    src={pictureItem}
                                    alt="secondary-product-img"
                                    title="secondary-product-img"
                                  />
                                );
                              },
                            )}
                          </div>

                          <p className="highlight">[+] View all photos</p>
                        </div>
                      </div>
                      <div className="col-lg-6 col-xl-5 pr-0">
                        <div className="product-data-box">
                          <p className="mb-0">
                            {productDetail.manufacturer}{' '}
                            <span className="highlight">
                              {productDetail.model}
                            </span>
                          </p>
                          <div className="row mx-0 my-1">
                            <div className="col-md-6 px-0">
                              <p className="location my-1">
                                {productDetail.location},{' '}
                                <span>{productDetail.locAcro}</span>
                              </p>
                              <div className="box-image mb-0">
                                <img
                                  src={iconSeller}
                                  alt="ic_cal"
                                  title="ic_cal"
                                />
                                <span className="ml-2">
                                  {productDetail.seller}
                                </span>
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
                                <span className="ml-2">
                                  {productDetail.yearProduction}
                                </span>
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
                                <span className="ml-2">
                                  {productDetail.engine}
                                </span>
                              </div>
                              <div className="box-image mb-0">
                                <img
                                  src={iconTypeCar}
                                  alt="ic_cal"
                                  title="ic_cal"
                                />
                                <span className="ml-2">
                                  {productDetail.type}
                                </span>
                              </div>
                              <div className="box-image mb-0">
                                <img
                                  src={iconFuel}
                                  alt="ic_cal"
                                  title="ic_cal"
                                />
                                <span className="ml-2">
                                  {productDetail.fuel}
                                </span>
                              </div>
                            </div>

                            <div className="col-md-6 px-0">
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
                                  src={iconUsage}
                                  alt="ic_cal"
                                  title="ic_cal"
                                />
                                <span className="ml-2">
                                  {productDetail.usage.toLocaleString()} miles
                                </span>
                              </div>

                              <div className="box-image mb-0">
                                <img
                                  src={iconExterior}
                                  alt="ic_cal"
                                  title="ic_cal"
                                />
                                <span className="ml-2">Grey metallic</span>
                              </div>

                              <div className="box-image mb-0">
                                <img
                                  src={iconInterior}
                                  alt="ic_cal"
                                  title="ic_cal"
                                />
                                <span className="ml-2">Black</span>
                              </div>
                            </div>
                          </div>

                          <div className="price-box">
                            <div className="d-flex justify-content-between">
                              <p className="price my-auto">
                                ${productDetail.price.toLocaleString()}
                              </p>
                              <CustButton
                                type="danger"
                                className="my-button red-button"
                                value="BUY THIS VEHICLE"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="product-information-box">
                <div className="my-card">
                  <div className="title">INFO</div>
                  <div className="content">
                    {renderHTML(productDetail.description)}
                  </div>
                </div>
              </div>

              <div className="product-seller-box">
                <div className="my-card">
                  <div className="title">VENDOR</div>
                  <div className="content">
                    <div className="row mx-0">
                      <div className="col-md-6 pl-0">
                        <div className="d-flex flex-column flex-sm-row">
                          <img
                            src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/137409052/original/d472c30361632da1c8d8fa780f572807d78abd9f/cartoon-profile-picture-or-avatar.png"
                            alt="con-per-img"
                            title="con-per-img"
                          />
                          <div className="d-flex flex-column">
                            <p className="seller-name">
                              {productDetail.seller}
                            </p>
                            <p className="mb-0">
                              City:{' '}
                              <span>
                                {productDetail.location},{' '}
                                {productDetail.locAcro}
                              </span>
                            </p>
                            <p className="mb-0">
                              Propositions: <span>2</span>
                            </p>
                            <p className="mb-0">
                              Last Visited: <span>5 hours ago</span>
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6 pr-0 text-center">
                        <p className="highlight">See full vendor&apos;s info</p>
                        <CustButton
                          type="info"
                          className="my-button blue-button w-75 mt-3"
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
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="product-comment-box">
                <div className="my-card">
                  <div className="title">
                    {productDetail.comment.length}
                    {productDetail.comment.length > 1
                      ? ' Comments'
                      : ' Comment'}
                  </div>
                  <div className="content">
                    <div className="comment-box">
                      <div className="row mx-0">
                        <div className="col-md-6 pl-0">
                          <div className="d-flex d-md-none user-comment-box mb-3">
                            <img
                              src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/137409052/original/d472c30361632da1c8d8fa780f572807d78abd9f/cartoon-profile-picture-or-avatar.png"
                              alt="con-per-img"
                              title="con-per-img"
                            />
                            <p>Guest One</p>
                          </div>
                          <form>
                            <div className="form-group">
                              <textarea
                                className="form-control"
                                placeholder="Enter your comment"
                                rows="5"
                              />
                            </div>
                          </form>
                        </div>

                        <div className="col-md-6 pr-0">
                          <div className="d-none d-md-flex user-comment-box">
                            <img
                              src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/137409052/original/d472c30361632da1c8d8fa780f572807d78abd9f/cartoon-profile-picture-or-avatar.png"
                              alt="con-per-img"
                              title="con-per-img"
                            />
                            <p>Guest One</p>
                          </div>

                          <div className="button-comment-box">
                            <CustButton
                              type="alert"
                              className="my-button red-button"
                              value="LEAVE COMMENT"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="divider" />
                  {commentView.length > 0 &&
                    commentView.map((commentItem, id) => {
                      const {
                        commentId,
                        name,
                        comment: userComment,
                        reply,
                      } = commentItem;
                      return (
                        <div key={commentId} className="list-user-comment-box">
                          <div className="row parent-comment mx-0">
                            <div className="col-2 col-md-1 px-0">
                              <img
                                src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/137409052/original/d472c30361632da1c8d8fa780f572807d78abd9f/cartoon-profile-picture-or-avatar.png"
                                alt="con-per-img"
                                title="con-per-img"
                              />
                            </div>
                            <div className="col-10 col-md-11 pr-0">
                              <div className="d-flex justify-content-between">
                                <div>
                                  <p className="user-comment">{name}</p>
                                  <span>{hours + id} hours ago</span>
                                </div>

                                <p className="my-auto reply">Reply</p>
                              </div>
                              <p className="mt-3">{userComment}</p>
                            </div>
                          </div>

                          {/* Reply Section */}
                          {reply.length > 0 &&
                            reply.map((replyItem, childId) => {
                              return (
                                <div
                                  // eslint-disable-next-line react/no-array-index-key
                                  key={`${commentId}${childId}`}
                                  className="row child-comment mx-0"
                                >
                                  <div className="col-2 col-md-1  px-0" />
                                  <div className="col-10 col-md-11 pr-0">
                                    <div className="row mx-0">
                                      <div className="col-2 col-md-1  px-0">
                                        <img
                                          src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/137409052/original/d472c30361632da1c8d8fa780f572807d78abd9f/cartoon-profile-picture-or-avatar.png"
                                          alt="con-per-img"
                                          title="con-per-img"
                                        />
                                      </div>
                                      <div className="col-10 col-md-11 pr-0">
                                        <div className="d-flex justify-content-between">
                                          <div>
                                            <p className="user-comment">
                                              {replyItem.name}
                                            </p>
                                            <span>{hours + id} hours ago</span>
                                          </div>

                                          <p className="my-auto reply">Reply</p>
                                        </div>
                                        <p className="mt-3">
                                          {replyItem.comment}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                        </div>
                      );
                    })}

                  <div className="list-user-comment-box">
                    {productDetail.comment.length > 3 && (
                      <div className="see-all-comment-box">
                        <CustButton
                          type="danger"
                          onClick={() => setHideComment(!hideComment)}
                          className="my-button red-button"
                          value={`${
                            hideComment
                              ? `SEE ALL ${productDetail.comment.length}
                        ${
                          productDetail.comment.length > 1
                            ? ' COMMENTS'
                            : ' COMMENT'
                        }`
                              : 'HIDE COMMENTS'
                          }`}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 pl-0 pl-lg-4 pr-0">
              <Sidebar code="product1" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
