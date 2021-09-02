import React from 'react';
import iconStarFilled from 'assets/images/icon/search/ic_star_filled.png';
import iconEmptyStar from 'assets/images/icon/search/ic_star_empty.png';

const Rating = ({ ratingProduk, productId }) => {
  if (ratingProduk) {
    const emptyStar = 5 - ratingProduk;
    const arrJSX = [];
    for (let i = 1; i <= ratingProduk; i += 1) {
      arrJSX.push(
        <img
          key={`${productId}${i}rating`}
          src={iconStarFilled}
          alt="star"
          title="star"
        />,
      );
    }

    if (emptyStar !== 0) {
      for (let i = 1; i <= emptyStar; i += 1) {
        arrJSX.push(
          <img
            key={`${productId}${i}emptyrating`}
            src={iconEmptyStar}
            alt="empty_star"
            title="empty_star"
          />,
        );
      }
    }

    return arrJSX;
  }

  return null;
};

export default Rating;
