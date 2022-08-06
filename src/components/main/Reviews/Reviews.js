import React from "react";
import Slider from "react-slick";
import { SETTINGS } from '../../../constants/reviews';

import './Reviews.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Reviews() {

  const reviews = [
    { id: 20, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', title: 'David Lee', nickname: 'davidlee@', additionalClass: 'david' },
    { id: 21, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing.', title: 'Ravi Shankor', nickname: 'ravishankor@', additionalClass: 'ravi' },
    { id: 22, text: 'Lorem ipsum dolor sit amet, consectetur.', title: 'Thomas Lew', nickname: 'thomaslew@', additionalClass: 'thomas' },
    { id: 23, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Ultrices.', title: 'Frank Goslar', nickname: 'frank98@', additionalClass: 'frank' },
    { id: 24, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing.', title: 'Tobias Black', nickname: 'tob5@', additionalClass: 'tobias' },
  ];
  
  return (
    <Slider className="reviews" {...SETTINGS}>
      {reviews.map((review) => (
        <div key={review.id} className='reviews__content'>
          <p className='reviews__text'>{review.text}</p>
          <h5 className={`reviews__author ${review.additionalClass}`}>{review.title}</h5>
          <span className="reviews__nickname">{review.nickname}</span>
        </div>
      ))}
    </Slider>
  );
}