import React from "react";
import { Home } from "../components/mainpage/Home";
import { FlashDeals } from "../components/flashDeals/FlashDeals";

export const Pages = ({ productItems, cardItem, addToCard }) => {
  return (
    <>
      <Home cardItem={cardItem} />
      <FlashDeals productItems={productItems} addToCard={addToCard} />
    </>
  );
};
