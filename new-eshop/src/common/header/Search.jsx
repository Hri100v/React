import React from "react";
// import logo from '../../logo.svg'
import logo from "../../components/assets/images/reshot-icon-mill-K5DQVANU3P.svg";
import { Link } from "react-router-dom";

export const Search = ({ cardItem }) => {
  window.addEventListener("scroll", () => {
    const search = document.querySelector(".search");
    if (search) {
      search.classList.toggle("active", window.scrollY > 100);
    }
  });
  
  return (
    <>
      <section className="search">
        <div className="container c_flex">
          <div className="logo width">
            <img src={logo} alt="" style={{ width: 80, height: 80 }} />
          </div>

          <div role="search-item" className="search-box f_flex">
            <i className="fa fa-search"></i>
            <input type="text" placeholder="Search and hit enter" list="searchItems" />
            {/* TODO: clear all - additional - start */}
            <datalist id="searchItems">
              {/* <option value="Item 1"></option>
              <option value="Item 2"></option>
              <option value="3">Item 3</option>
              <option value="4">Item 4</option> */}
            </datalist>
            {/* additional - end */}
            <span>All Categories</span>
          </div>

          <div className="icon f_flex width">
            <i className="fa fa-user icon-circle"></i>
            <div className="cart">
              <Link to="/card">
                <i className="fa fa-shopping-bag icon-circle"></i>
                <span>{cardItem.length === 0 ? "" : cardItem.length}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
