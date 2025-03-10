import React from "react";
import Tdata from "./Tdata";
import Slider from "react-slick";

export const TopCard = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <>
      <Slider {...settings}>
        {Tdata.map((value, index) => {
          return (
            <div className="box product" key={Math.random()}>
              <div className="nametop d_flex">
                <span className="tleft">{value.para}</span>
                <span className="tright">{value.desc}</span>
              </div>
              <div className="img"></div>
              <img src={value.cover} alt={value.para} />
            </div>
          );
        })}
      </Slider>
    </>
  );
};
