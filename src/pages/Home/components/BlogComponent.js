import React from 'react';

import iconCalendar from 'assets/images/icon/ic_calendar.png';
import iconComment from 'assets/images/icon/ic_comment.png';

const BlogComponent = ({ blogList }) => {
  return (
    <>
      <div className="main-blog divider">
        <div className="main-content">
          <img
            src={blogList[0].thumbnailPicture}
            alt="post-img"
            title="post-img"
          />
          <div className="d-flex flex-column">
            <p className="title">{blogList[0].title}</p>
            <div className="box-image">
              <img src={iconCalendar} alt="ic_cal" title="ic_cal" />
              <span className="ml-1 my-auto">{blogList[0].createdAt}</span>
            </div>
            <p>{blogList[0].shortDescription}</p>
            <div className="comment-box mt-auto">
              <img src={iconComment} alt="ic_cal" title="ic_cal" />
              <span>{blogList[0].totalComment}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex">
        <div className="main-blog divider-right">
          <div className="d-flex flex-column justify-content-between">
            {blogList.map((blogItem, id) => {
              if (id !== 0 && id < 4) {
                return (
                  <div key={blogItem.title} className="main-content mb-3">
                    <img
                      src={blogItem.thumbnailPicture}
                      className="secondary-blog-img"
                      alt="post-img"
                      title="post-img"
                    />
                    <div className="d-flex flex-column justify-content-between">
                      <p className="title">{blogItem.title}</p>
                      <div className="box-image">
                        <img src={iconCalendar} alt="ic_cal" title="ic_cal" />
                        <span className="ml-1 my-auto">
                          {blogItem.createdAt}
                        </span>
                      </div>
                      <div className="comment-box">
                        <img src={iconComment} alt="ic_cal" title="ic_cal" />
                        <span>{blogItem.totalComment}</span>
                      </div>
                    </div>
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
        <div className="main-blog">
          <div className="d-flex flex-column justify-content-between">
            {blogList.map((blogItem, id) => {
              if (id !== 0 && id >= 4) {
                return (
                  <div key={blogItem.title} className="main-content mb-3">
                    <img
                      src={blogItem.thumbnailPicture}
                      className="secondary-blog-img"
                      alt="post-img"
                      title="post-img"
                    />
                    <div className="d-flex flex-column justify-content-between">
                      <p className="title">{blogItem.title}</p>
                      <div className="box-image">
                        <img src={iconCalendar} alt="ic_cal" title="ic_cal" />
                        <span className="ml-1 my-auto">
                          {blogItem.createdAt}
                        </span>
                      </div>
                      <div className="comment-box">
                        <img src={iconComment} alt="ic_cal" title="ic_cal" />
                        <span>{blogItem.totalComment}</span>
                      </div>
                    </div>
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogComponent;
