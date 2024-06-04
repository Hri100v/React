import React from "react";

export const Card = ({ cardItem, addToCard }) => {
  console.log("-Card.jsx-");
  console.log(cardItem);
  
  return (
    <>
      <section className="card-items">
        <div className="container d_flex">
          <div className="card-details">
            {cardItem.length === 0 && (
              <h1 className="no-items product">
                No items are added to the Card
              </h1>
            )}
            {cardItem.map((item) => {
              console.log(4114, item);
              const productQty = item.price * item.productQty;
              console.log(productQty);

              return (
                <div className="card-list product d_flex">
                  <div className="img">
                    <img src={item.cover} alt="{item.name}" />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  );
};
