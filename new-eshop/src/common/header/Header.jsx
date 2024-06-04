import React from "react";
import "./Header.css";
import { Head } from "./Head";
import { Search } from "./Search";
import { Navbar } from "./Navbar";

export const Header = ({ cardItem }) => {
  return (
    <>
      <Head />
      <Search cardItem={cardItem} />
      <Navbar />
    </>
  );
};
