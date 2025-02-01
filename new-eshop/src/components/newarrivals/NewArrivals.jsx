import React from "react";
import { Card } from "./Card";
// import "./style.css";

// import "jqwidgets-scripts/jqwidgets/styles/jqx.base.css";


// import JqxTree from "jqwidgets-scripts/jqwidgets-react-tsx/jqxtree";

// const sourceData = [
//   {
//     label: "Fashion",
//     icon: "https://img.icons8.com/glyph-neue/64/26e07f/new.png",
//     expanded: true,
//     items: [
//       { label: "Brand New" }
//     ]
//   },
//   {
//     label: "Farming",
//     // icon: "https://img.icons8.com/glyph-neue/64/26e07f/new.png",
//     expanded: true,
//     items: [
//       { label: "Articles" },
//       { label: "Interviews" }
//     ]
//   },
//   {
//     label: "Tractors",
//     items: [
//       { label: "Hobby-tractors" },
//       { label: "Small 20-40 hp" },
//       { label: "Multifunctional tractors" },
//       { label: "Heavy tractors" }
//     ]
//   },
//   {
//     label: "Mowers",
//     selected: true
//   },
//   { label: "Seeders" },
//   { label: "Tillers" },
//   { label: "Harvesters" },
//   // { label: "Mower" },
//   // { label: "Mower" }
// ];

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
