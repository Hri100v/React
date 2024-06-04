import React, { useState } from "react";
import Slider from "react-slick";

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <>
      <div className="control-btn" onClick={onClick}>
        <button className="next">
          <i className="fa fa-long-arrow-alt-right"></i>
        </button>
      </div>
    </>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <>
      <div className="control-btn" onClick={onClick}>
        <button className="prev">
          <i className="fa fa-long-arrow-alt-left"></i>
        </button>
      </div>
    </>
  );
};

export const FlashCard = ({ productItems, addToCard }) => {
  const [count, setCount] = useState(0);
  const increment = (prev) => {
    // console.log(prev, 5115, prev += 1);
    // setCount(count + 1);
    setCount(prev => prev += 1);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    // autoplay: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  return (
    <>
      <Slider {...settings}>
        {productItems.map((productItem) => {
          return (
            <div className="box" key={productItem.id}>
              <div className="product mtop">
                <div className="img">
                  <span className="discount">{productItem.discount}% Off</span>
                  <img src={productItem.cover} alt="" />
                  <div className="product-like">
                    <label>{count}</label>
                    <br />
                    <i className="fa-regular fa-heart" onClick={increment}></i>
                  </div>
                </div>
                <div className="product-details">
                  <h3>{productItem.name}</h3>
                  <div className="rate">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  <div className="price">
                    <h4>{productItem.price}.00</h4>
                    <button onClick={() => addToCard(productItem)}>
                      <i className="fa fa-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </>
  );
};
