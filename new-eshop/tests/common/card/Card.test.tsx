import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import { describe, it, expect, afterEach } from "vitest";
import { Card } from "../../../src/common/card/Card";
import "@testing-library/jest-dom/vitest";

afterEach(cleanup);
// {
//   id: 7,
//   cover: "./images/shops/shops-1.png",
//   name: "Mapple Earphones",
//   price: "180",
//   discount: "25",
// },
type cardItemType = {
  id: number,
  cover?: string,
  name?: string,
  price: number,
  discount?: number,
  qty: number
};

describe("Card Component", () => {
  it('should render empty array Card component', () => {
    const cardItem: cardItemType[] = [];
    const addToCard = () => {};
    const decreaseQty = () => {};
    render(
      <Card
        cardItem={cardItem}
        addToCard={addToCard}
        decreaseQty={decreaseQty}
      />
    );

    // screen.debug();

    expect(screen.getByText(/no items/i)).toBeInTheDocument();
  });

  it("should render the Card component", () => {
    // <Card cardItem={cardItem} addToCard={addToCard} decreaseQty={decreaseQty} />
    const cardItem = [
      {
        id: 2,
        discount: 40,
        cover: "./images/flash/flash-2.png",
        name: "Mulching mower",
        price: 900,
        qty: 1
      },
    ];
    const addToCard = () => {};
    const decreaseQty = () => {};
    render(
      <Card
        cardItem={cardItem}
        addToCard={addToCard}
        decreaseQty={decreaseQty}
      />
    );

    // screen.debug();

    const cardElement = screen.getByRole("card");
    // console.log(cardElement);

    expect(cardElement).toBeInTheDocument();
    // expect(cardElement).toBeTruthy();
  });

  it("should render an item", () => {
    // <Card cardItem={cardItem} addToCard={addToCard} decreaseQty={decreaseQty} />
    const cardItem = [
      {
        id: 2,
        discount: 40,
        cover: "./images/flash/flash-2.png",
        name: "Mulching mower",
        price: 900,
        qty: 1
      },
    ];
    const addToCard = () => {};
    const decreaseQty = () => {};
    render(
      <Card
        cardItem={cardItem}
        addToCard={addToCard}
        decreaseQty={decreaseQty}
      />
    );

    // screen.debug();

    const cardElement = screen.getByRole("card");
    // console.log(cardElement);

    // expect(cardElement).toBeInTheDocument();
    expect(cardElement).toHaveTextContent("Mulching mower");
  });

  it("should calculate correct 'Total Price' correctly - $0.00 when no item", () => {
    // <Card cardItem={cardItem} addToCard={addToCard} decreaseQty={decreaseQty} />
    const cardItem = [
      {
        id: 2,
        discount: 40,
        cover: "./images/flash/flash-2.png",
        name: "Mulching mower",
        price: 900,
        qty: 1
      },
    ];
    const addToCard = () => {};
    const decreaseQty = () => {};
    render(
      <Card
        cardItem={cardItem}
        addToCard={addToCard}
        decreaseQty={decreaseQty}
      />
    );

    // screen.debug();

    const cardElement = screen.getByRole("card");
    // console.log(cardElement);

    // expect(cardElement).toBeInTheDocument();
    expect(cardElement).toHaveTextContent("$900.00");
  });

  it("should show correct 'Total Price' - $0.00 when no item", () => {
    // <Card cardItem={cardItem} addToCard={addToCard} decreaseQty={decreaseQty} />
    const cardItem = [
      {
        id: 2,
        discount: 40,
        cover: "./images/flash/flash-2.png",
        name: "Mulching mower",
        price: 900,
        qty: 2
      },
      {
        id: 3,
        discount: 40,
        cover: "./images/flash/flash-3.png",
        name: "Corn seeder",
        price: 750,
        qty: 1
      }
    ];
    const addToCard = () => {};
    const decreaseQty = () => {};
    render(
      <Card
        cardItem={cardItem}
        addToCard={addToCard}
        decreaseQty={decreaseQty}
      />
    );

    // screen.debug();

    const cardElement = screen.getByRole("card");
    // console.log(cardElement);

    // expect(cardElement).toBeInTheDocument();
    // expect(cardElement).toHaveTextContent("$0.00");
    expect(screen.getByText('$2550.00')).toBeInTheDocument();
  });
});
