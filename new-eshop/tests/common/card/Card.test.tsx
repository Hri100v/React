import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import { describe, it, expect, afterEach } from "vitest";
import { Card } from "../../../src/common/card/Card";
import "@testing-library/jest-dom/vitest";

afterEach(cleanup);

describe("Card Component", () => {
  it("should render the Card component", () => {
    // <Card cardItem={cardItem} addToCard={addToCard} decreaseQty={decreaseQty} />
    const cardItem = [
      {
        id: 2,
        discount: 40,
        cover: "./images/flash/flash-2.png",
        name: "Mulching mower",
        price: 900,
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

  it("should show correct 'Total Price' - $0.00 when no item", () => {
    // <Card cardItem={cardItem} addToCard={addToCard} decreaseQty={decreaseQty} />
    const cardItem = [
      {
        // id: 2,
        // discount: 40,
        // cover: "./images/flash/flash-2.png",
        // name: "Mulching mower",
        // price: 900,
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
    expect(cardElement).toHaveTextContent("$0.00");
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
      },
      {
        id: 3,
        discount: 40,
        cover: "./images/flash/flash-3.png",
        name: "Corn seeder",
        price: 750,
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

    screen.debug();

    const cardElement = screen.getByRole("card");
    // console.log(cardElement);

    // expect(cardElement).toBeInTheDocument();
    expect(cardElement).toHaveTextContent("$0.00");
  });
});
