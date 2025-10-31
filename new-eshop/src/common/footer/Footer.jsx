import React /*, { useState } */ from "react";
import "./Footer.css";

// const LikeComponent = function (startValue = 0) {
//   return (
//     <>
//       <p>
//         <span>Like</span> {startValue}
//       </p>
//       <button>Adding</button>
//     </>
//   );
// };

export const Footer = () => {
  // const [count, setCount] = useState(0);

  // const increase = (defaultValue = 0) => {
  //   setCount((previous) => previous + 1);
  // };

  // const decrease = () => {
  //   setCount(count - 1);
  // };

  return (
    <>
      <footer>
        <div className=" footer container grid2">
          <div className="box">
            <h1>XSolid</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero
              beatae officiis incidunt sapiente ea architecto voluptates
              voluptatibus nulla dolorem, minus dicta deleniti quos et quas
              culpa? Corrupti quaerat saepe ad.
            </p>
            <div className="icon d_flex">
              <div className="img d_flex">
                <i className="fa-brands fa-google-play"></i>
                <span>Google Play</span>
              </div>
              <div className="img d_flex">
                <i className="fa-brands fa-app-store-ios"></i>
                <span>App Store</span>
              </div>
            </div>
          </div>
          <div className="box">
            <h2>About Us</h2>
            <ul>
              <li>Farming</li>
              <li>Careers</li>
              <li>Our Stores</li>
              <li>Our Cars</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="box">
            <h2>Customer Care</h2>
            <ul>
              <li>Help Center</li>
              <li>How to Buy</li>
              <li>Track Your Order</li>
              <li>Corporate & Bulk Purchasing</li>
              <li>Returns & Refunds</li>
            </ul>
        </div>
          <div className="box">
            <h2>Contact Us</h2>
            <ul>
              <li>Livade 1, Troyan, Lovech, Bulgaria</li>
              <li>Email: xsolidoffice@gmail.com</li>
              <li>Phone: +359 888 1234 56</li>
            </ul>
          </div>
        </div>
      </footer>

      {/* <div className="container">
        <div className="block">
          <label>First {count}</label>
          <button onClick={increase(0)}>Increase</button>
          <button onClick={decrease}>Decrease</button>

          <div className="newblock">
            <LikeComponent />
          </div>
        </div>

        <div className="block">
          <label>Second {count}</label>
          <button onClick={increase(1)}>Increase</button>
          <button onClick={decrease}>Decrease</button>
        </div>
      </div> */}
    </>
  );
};
