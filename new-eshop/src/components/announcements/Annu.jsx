import React from "react";

export const Annu = () => {
  const mystyle = {
    width: "30%",
    height: "340px",
  };

  const mystyle1 = {
    width: "68%",
    height: "340px",
  };

  return (
    <>
      <section className="announce background">
        <div className="container d_flex">
          <div className="img" style={mystyle}>
            <img src="./images/banner-1.png" alt="banner" width="100%" height="100%" />
          </div>
          <div className="img" style={mystyle1}>
            <img src="./images/banner-2.png" alt="banner" width="100%" height="100%" />
          </div>
        </div>
      </section>
    </>
  );
};
