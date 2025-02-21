import React from "react";

import "jqwidgets-scripts/jqwidgets/styles/jqx.base.css";
// import 'jqwidgets-scripts/jqwidgets/styles/jqx.material-purple.css';
import "jqwidgets-scripts/jqwidgets/styles/jqx.material.css";

import JqxTree from "jqwidgets-scripts/jqwidgets-react-tsx/jqxtree";

export const Categories = () => {
  // const data = [
  //   // {
  //   //   categoryImg: "./images/category/cat1.png",
  //   //   categoryName: "Fashion",
  //   // },
  //   {
  //     categoryImg: "./images/category/cat1.png",
  //     categoryName: "Farming",
  //     children: [
  //       {
  //         categoryImg: "./images/category/categories-default.png",
  //         categoryName: "Sub-Tractors 1",
  //       },
  //       {
  //         categoryImg: "./images/category/categories-default.png",
  //         categoryName: "Sub-Tractors 2",
  //       },
  //     ],
  //   },
  //   {
  //     categoryImg: "./images/category/categories-default.png",
  //     categoryName: "Tractors",
  //     children: [],
  //   },
  //   {
  //     categoryImg: "./images/category/categories-default.png",
  //     categoryName: "Mowers",
  //     children: [],
  //   },
  //   {
  //     categoryImg: "./images/category/categories-default.png",
  //     categoryName: "Seeders",
  //     children: [],
  //   },
  //   {
  //     categoryImg: "./images/category/categories-default.png",
  //     categoryName: "Tillers",
  //   },
  //   {
  //     categoryImg: "./images/category/categories-default.png",
  //     categoryName: "Harvesters",
  //   },
  //   {
  //     categoryImg: "./images/category/categories-default.png",
  //     categoryName: "Spare parts",
  //     children: [
  //       {
  //         categoryImg: "./images/category/categories-default.png",
  //         categoryName: "Sub-SpareParts 1",
  //       },
  //       {
  //         categoryImg: "./images/category/categories-default.png",
  //         categoryName: "Sub-SpareParts 2",
  //       },
  //     ],
  //   },
  // ];

  const sourceData = [
    {
      label: "Fashion",
      icon: "https://img.icons8.com/glyph-neue/64/26e07f/new.png",
      expanded: true,
      items: [
        { label: "Brand New" }
      ]
    },
    {
      label: "Farming",
      // icon: "https://img.icons8.com/glyph-neue/64/26e07f/new.png",
      expanded: true,
      items: [
        { label: "Articles" },
        { label: "Interviews" }
      ]
    },
    {
      label: "Tractors",
      expanded: true,
      items: [
        { label: "Hobby-tractors", icon: "./images/category/categories-default.png" },
        { label: "Small 20-40 hp", icon: "./images/category/categories-default.png" },
        { label: "Multifunctional tractors", icon: "./images/category/categories-default.png" },
        { label: "Heavy tractors", icon: "./images/category/categories-default.png" }
      ]
    },
    {
      label: "Mowers",
      selected: true
    },
    { label: "Seeders" },
    { label: "Tillers" },
    { label: "Harvesters" },
    // { label: "Mower" },
    // { label: "Mower" }
  ];

  return (
    <>
      <div className="category">
        {/* <div className="box f_flex" key={index}>
              <img src={value.categoryImg} alt={value.categoryName} />
              <div className="cat-items">
                <span>{value.categoryName}</span>
                <span>Children: {childrenItem.length !== 0 ? "+" : "-=-="}</span>
              </div>
            </div> */}

        <JqxTree
          // ref={this.myTree}
          style={{ float: "left" }}
          // onSelect={this.myTreeOnSelect}
          // onExpand={this.myTreeOnExpand}
          // onCollapse={this.myTreeOnCollapse}
          theme={"material"}
          width={"100%"}
          height={"100%"}
          // source={sourceData2}
          source={sourceData}
          toggleMode={"none"}
        />
      </div>
    </>
  );
};

/*
 -= OLD FILE =-

import React from "react";

export const Categories = () => {
  const data = [
    {
      categoryImg: "./images/category/cat1.png",
      categoryName: "Fashion",
    },
    {
      categoryImg: "./images/category/cat1.png",
      categoryName: "Farming",
      children: [
        {
          categoryImg: "./images/category/categories-default.png",
          categoryName: "Sub-Tractors 1",
        },
        {
          categoryImg: "./images/category/categories-default.png",
          categoryName: "Sub-Tractors 2",
        }
      ],
    },
    {
      categoryImg: "./images/category/categories-default.png",
      categoryName: "Tractors",
      children: []
    },
    {
      categoryImg: "./images/category/categories-default.png",
      categoryName: "Mowers",
      children: []
    },
    {
      categoryImg: "./images/category/categories-default.png",
      categoryName: "Seeders",
      children: []
    },
    {
      categoryImg: "./images/category/categories-default.png",
      categoryName: "Tillers",
    },
    {
      categoryImg: "./images/category/categories-default.png",
      categoryName: "Harvesters",
    },
    {
      categoryImg: "./images/category/categories-default.png",
      categoryName: "Spare parts",
      children: [
        {
          categoryImg: "./images/category/categories-default.png",
          categoryName: "Sub-SpareParts 1",
        },
        {
          categoryImg: "./images/category/categories-default.png",
          categoryName: "Sub-SpareParts 2",
        }
      ]
    },
  ];

  return (
    <>
      <div className="category">
        {data.map((value, index) => {
          console.log(!value.children, value.children, value.children ? "Yes" : "No");
          console.log(!value.children, value.children ? "Yes" : "No");

          const {childrenItem = "nochild"} = value.children;
          const {childrenItem = []} = value.children;
          var childrenItem = [];
          if (value.children !== undefined) {
            childrenItem = value.children;
          }

          console.log("childrenItem:", childrenItem);
          { <span>Children: {childrenItem !== "nochild" ? "+" : "-=-="}</span> }

            <img src={value.categoryImg} alt={value.categoryName} />
              <span>{value.categoryName}</span>              
              <span>Children: {childrenItem.length !== 0 ? "+" : "-=-="}</span>

              return (
                <div className="box f_flex" key={index}>
                  <img src={value.categoryImg} alt={value.categoryName} />
                  <div className="cat-items">
                    <span>{value.categoryName}</span>
                    <span>Children: {childrenItem.length !== 0 ? "+" : "-=-="}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      );
    };
    
*/
