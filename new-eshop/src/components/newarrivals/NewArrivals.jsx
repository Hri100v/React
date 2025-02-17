import React from "react";
import { Card } from "./Card";

export const NewArrivals = () => {
  return (
    <>
      <section className="newarrivals background">
        <div className="container">
          <div className="heading d_flex">
            <div className="heading-left row f_flex">
              <img
                src="https://img.icons8.com/glyph-neue/64/26e07f/new.png"
                alt="New Arrivals"
              />
              <h2>New Arrivals</h2>
            </div>
            <div className="heading-right row">
              <span>View all</span>
              <i className="fa fa-caret-right"></i>
            </div>
          </div>
          <Card />
        </div>
      </section>
    </>
  );
};
