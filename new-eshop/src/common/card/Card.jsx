import React from "react";
import "./styles.css";

export const Card = ({ cardItem, addToCard, decreaseQty }) => {
  console.log("-Card.jsx-");
  // console.log(cardItem);
  const totalPrice = cardItem.reduce(
    (price, item) => price + item.qty * item.price,
    0
  );

  return (
    <>
      <section role="card" className="card-items">
        <div className="container d_flex">
          <div className="card-details">
            {cardItem.length === 0 && (
              <h1 className="no-items product">
                No items are added to the Card
              </h1>
            )}

            {cardItem.map((item) => {
              const productQty = item.price * item.qty;
              return (
                <div className="card-list product d_flex">
                  <div className="img">
                    <img src={item.cover} alt={item.name} />
                  </div>
                  <div className="card-details">
                    <h3>{item.name}</h3>
                    <h4>
                      {item.price}.00 * {item.qty}
                      <br />
                      <span>${productQty}.00</span>
                    </h4>
                  </div>
                  <div className="card-items-function">
                    <div className="removeCard">
                      <button>
                        <i className="fa-solid fa-xmark"></i>
                      </button>
                    </div>
                    <div className="cardControl d_flex">
                      <button
                        className="incCard"
                        onClick={() => addToCard(item)}
                      >
                        <i className="fa fa-plus"></i>
                      </button>
                      <button
                        className="decCard"
                        onClick={() => decreaseQty(item)}
                      >
                        <i className="fa fa-minus"></i>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="card-total product">
            <h2>Card Summary</h2>
            <div className="d_flex">
              <h4>Total Price:</h4>
              {/* <h3>${totalPrice || "0"}.00</h3> */}
              <h3>${totalPrice.toFixed(2) || "0"}</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
