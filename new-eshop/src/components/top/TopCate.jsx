import React from "react";
import { TopCard } from "./TopCard";
import "./style.css";

export const TopCate = () => {
  return (
    <>
      <section className="topCat background">
        <div className="container">
            <div className="heading d_flex">
                <div className="heading-left row f_flex">
                    <i className="fa fa-border-all"></i>
                    <h2>Top Categories</h2>
                </div>
                <div className="heading-right row">
                    <span>View all</span>
                    <i className="fa fa-caret-right"></i>
                </div>
            </div>
            <TopCard />
        </div>
      </section>
    </>
  );
};
