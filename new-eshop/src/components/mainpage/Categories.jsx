import React from "react";

export const Categories = () => {
  const data = [
    {
      categoryImg: "./images/category/cat1.png",
      categoryName: "Fashion",
    },
    {
      categoryImg: "./images/category/categories-default.png",
      categoryName: "Tractors",
    },
    {
      categoryImg: "./images/category/categories-default.png",
      categoryName: "Mowers",
    },
    {
      categoryImg: "./images/category/categories-default.png",
      categoryName: "Seeders",
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
    },
  ];

  return (
    <>
      <div className="category">
        {data.map((value, index) => {
          return (
            <div className="box f_flex" key={index}>
              <img src={value.categoryImg} alt={value.categoryName} />
              <span>{value.categoryName}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};
