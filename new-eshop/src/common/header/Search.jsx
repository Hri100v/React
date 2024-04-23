import React from 'react'
// import logo from '../../logo.svg'
import logo from '../../components/assets/images/reshot-icon-mill-K5DQVANU3P.svg'
import { Link } from 'react-router-dom'

export const Search = () => {
  window.addEventListener("scroll", () => {
    const search = document.querySelector(".search");
    search.classList.toggle("active", window.scrollY > 100);
  })
  return (
    <>
        <section className="search">
          <div className="container c_flex">
            <div className="logo width">
              <img src={logo} alt="" style={{ width: 80, height: 80 }} />
            </div>

            <div className="search-box f_flex">
              <i className="fa fa-search"></i>
              <input type="text" placeholder="Search and hit enter" />
              <span>All Categories</span>
            </div>

            <div className="icon f_flex width">
              <i className="fa fa-user icon_circle"></i>
              <div className="cart">
                <Link to="/cart">
                  <i className="fa fa-shopping-bag icon_circle"></i>
                  <span>0</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}
