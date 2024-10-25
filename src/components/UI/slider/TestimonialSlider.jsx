import React from "react";
import Slider from "react-slick";

import ava01 from "../../../assets/images/ava-1.jpg";
import ava02 from "../../../assets/images/ava-2.jpg";
import ava03 from "../../../assets/images/ava-3.jpg";

import "../../../styles/slider.css";

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <p className="review__text">
        I had a fantastic experience with Foodtastic! The food was incredibly fresh and bursting with flavor. Each dish was expertly prepared, and the variety was impressive. The quick delivery made it even better.I highly recommend Foodtastic for anyone looking to enjoy delicious meals from the comfort of home!
        </p>
        <div className=" slider__content d-flex align-items-center gap-3 ">
          <img src={ava01} alt="avatar" className=" rounded" />
          <h6>Akshay</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
        I recently ordered from Foodtastic, and I was blown away by the quality! The food was incredibly fresh and bursting with flavor. Each dish exceeded my expectations, and the quick delivery made the experience even better. Highly recommend for anyone craving delicious meals!
        </p>
        <div className="slider__content d-flex align-items-center gap-3 ">
          <img src={ava02} alt="avatar" className=" rounded" />
          <h6>Yashna</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
        I recently tried Foodtastic, and I was thoroughly impressed! The selection of cuisines was diverse, and each dish I ordered was packed with flavor. The presentation was appealing, and everything arrived warm and fresh. Plus, the ordering process was super easy. I’ll definitely be coming back for more!
        </p>
        <div className="slider__content d-flex align-items-center gap-3 ">
          <img src={ava03} alt="avatar" className=" rounded" />
          <h6>Harsha</h6>
        </div>
      </div>
    </Slider>
  );
};

export default TestimonialSlider;