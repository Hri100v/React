import React from "react";
import { Home } from "../components/mainpage/Home";
import { FlashDeals } from "../components/flashDeals/FlashDeals";
import { TopCate } from "../components/top/TopCate";
import { NewArrivals } from "../components/newarrivals/NewArrivals";
import { Discount } from "../components/discount/Discount";
import { Shop } from "../components/shop/Shop";
import { Annu } from "../components/announcements/Annu";
import { Wrapper } from "../components/wrapper/Wrapper";

export const Pages = ({ productItems, cardItem, addToCard, shopItems }) => {
  return (
    <>
      <Home cardItem={cardItem} />
      <FlashDeals productItems={productItems} addToCard={addToCard} />
      <TopCate />
      <NewArrivals />
      <Discount />
      <Shop shopItems={shopItems} addToCard={addToCard} />
      <Annu />
      <Wrapper />
    </>
  );
};
