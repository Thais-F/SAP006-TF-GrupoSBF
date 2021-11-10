import React from 'react';

const Rating = ({items}) => {
  return (
    <div>
    <div className="rate">
      <span>
        <i
          className={
            items.rate >= 1
              ? 'fa fa-star'
              : items.rate >= 0.5
              ? 'fa fa-star-half-o'
              : 'fa fa-star-o'
          }
        ></i>
      </span>
      <span>
        <i
          className={
            items.rate >= 2
              ? 'fa fa-star'
              : items.rate >= 1.5
              ? 'fa fa-star-half-o'
              : 'fa fa-star-o'
          }
        ></i>
      </span>
      <span>
        <i
          className={
            items.rate >= 3
              ? 'fa fa-star'
              : items.rate >= 2.5
              ? 'fa fa-star-half-o'
              : 'fa fa-star-o'
          }
        ></i>
      </span>
      <span>
        <i
          className={
            items.rate >= 4
              ? 'fa fa-star'
              : items.rate >= 3.5
              ? 'fa fa-star-half-o'
              : 'fa fa-star-o'
          }
        ></i>
      </span>
      <span>
        <i
          className={
            items.rate >= 5
              ? 'fa fa-star'
              : items.rate >= 4.5
              ? 'fa fa-star-half-o'
              : 'fa fa-star-o'
          }
        ></i>
      </span>
      <span> ({items.reviews})</span>
    </div>
        </div>
  );
}

export default Rating