import React from "react";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { describe, it, expect, afterEach, beforeAll } from "vitest";
import { Card } from "../../../src/common/card/Card";
import "@testing-library/jest-dom/vitest";

let container: HTMLElement;
// let menu: HTMLElement;
let decreaseButton: HTMLElement;

// beforeAll(() => {
//   const renderResult = render(
//     <Card cardItem={[]} addToCard={() => {}} decreaseQty={() => {}} />
//   );
    
//   container = renderResult.container;
//   // menu = screen.getByRole("list");
//   decreaseButton = screen.getByRole("card");
  
//   console.log(decreaseButton);
//   console.table(decreaseButton);
  
// });

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

  // it("should calculate correct 'Total Price' correctly - $0.00 when no item", () => {
  //   // // <Card cardItem={cardItem} addToCard={addToCard} decreaseQty={decreaseQty} />
  //   // const cardItem = [
  //   //   {
  //   //     id: 2,
  //   //     discount: 40,
  //   //     cover: "./images/flash/flash-2.png",
  //   //     name: "Mulching mower",
  //   //     price: 900,
  //   //     qty: 1
  //   //   },
  //   // ];
  //   // const addToCard = () => {};
  //   // const decreaseQty = () => {};
  //   // render(
  //   //   <Card
  //   //     cardItem={cardItem}
  //   //     addToCard={addToCard}
  //   //     decreaseQty={decreaseQty}
  //   //   />
  //   // );

  //   // screen.debug();

  //   // function decreaseFunction() {
  //   //   return [];
  //   // };

  //   // // function sum() {
  //   // //   return 1 + 1;
  //   // // }

  //   // const cardElement = screen.getByRole("card");
  //   // // console.log(cardElement);

  //   // expect(cardElement).toBeInTheDocument();
  //   // expect(cardElement).toHaveTextContent("$900.00");

  //   // const decreaseButton = screen.getAllByRole("button")
  //   // const totalPriceContainer = cardElement.querySelector(".card-total h3");

  //   // console.log(1001, decreaseButton[1].toString());
    
  //   // fireEvent.click(decreaseButton[1]);

  //   // expect(totalPriceContainer).toHaveTextContent("$0.00");

  //   // Създаваме mock функция, която всъщност променя данните
  // let testCardItem = [
  //   {
  //     id: 2,
  //     discount: 40,
  //     cover: "./images/flash/flash-2.png",
  //     name: "Mulching mower",
  //     price: 900,
  //     qty: 1
  //   },
  // ];

  // const decreaseQty = (product: cardItemType) => {
  //   // Симулираме реалната логика - премахваме продукта
  //   testCardItem = testCardItem.filter(item => item.id !== product.id);
  // };

  // const { rerender } = render(
  //   <Card
  //     cardItem={testCardItem}
  //     addToCard={() => {}}
  //     decreaseQty={decreaseQty}
  //   />
  // );

  // // Проверяваме началното състояние
  // // expect(screen.getByText("$900.00")).toBeInTheDocument();
  // // expect(screen.getByRole("span")).toBeInTheDocument();
  
  // // rerender.

  // // Намираме и кликаме бутона за намаляване
  // const decreaseButtons = screen.getAllByRole("button");
  // screen.debug();
  // fireEvent.click(decreaseButtons[1]);
  // screen.debug();

  // // ПРЕЗАРЕЖДАМЕ компонента със новите данни
  // rerender(
  //   <Card
  //     cardItem={testCardItem}
  //     addToCard={() => {}}
  //     decreaseQty={decreaseQty}
  //   />
  // );

  //   // Сега вече трябва да виждаме $0.00
  //   // expect(screen.getByText("$0.00")).toBeInTheDocument();
  // });

  it("should calculate correct 'Total Price' correctly - $0.00 when no item", () => {
    let testCardItem = [
      {
        id: 2,
        discount: 40,
        cover: "./images/flash/flash-2.png",
        name: "Mulching mower",
        price: 900,
        qty: 1
      },
    ];

  const decreaseQty = (product: cardItemType) => {
    testCardItem = testCardItem.filter(item => item.id !== product.id);
  };

  const { rerender } = render(
    <Card
      cardItem={testCardItem}
      addToCard={() => {}}
      decreaseQty={decreaseQty}
    />
  );

    const decreaseButtons = screen.getAllByRole("button");
    // screen.debug();
    fireEvent.click(decreaseButtons[2]);

    // console.log(9009);
    // console.log(decreaseButtons[2]);
    // console.table(decreaseButtons);
    
    
    rerender(
      <Card
        cardItem={testCardItem}
        addToCard={() => {}}
        decreaseQty={() => [{ qty: 0 }]}
      />
    );
    // screen.debug();

    expect(screen.getByText("$0.00")).toBeInTheDocument();
  });

  // it("should show correct 'Total Price' - $0.00 when no item", () => {
  //   // <Card cardItem={cardItem} addToCard={addToCard} decreaseQty={decreaseQty} />
  //   const cardItem = [
  //     {
  //       id: 2,
  //       discount: 40,
  //       cover: "./images/flash/flash-2.png",
  //       name: "Mulching mower",
  //       price: 900,
  //       qty: 2
  //     },
  //     {
  //       id: 3,
  //       discount: 40,
  //       cover: "./images/flash/flash-3.png",
  //       name: "Corn seeder",
  //       price: 750,
  //       qty: 1
  //     }
  //   ];
  //   const addToCard = () => {};
  //   const decreaseQty = () => {};
  //   render(
  //     <Card
  //       cardItem={cardItem}
  //       addToCard={addToCard}
  //       decreaseQty={decreaseQty}
  //     />
  //   );

  //   // screen.debug();

  //   const cardElement = screen.getByRole("card");
  //   // console.log(cardElement);

  //   // expect(cardElement).toBeInTheDocument();
  //   // expect(cardElement).toHaveTextContent("$0.00");
  //   expect(screen.getByText('$2550.00')).toBeInTheDocument();
  // });

  // function textMatcher(totalPrice: string) {
  //   return (content: string, element: Element) => {
  //     const hasText = (node: Element) => node.textContent === totalPrice;
  //     const nodeHasText = hasText(element);
  //     const childrenDontHaveText = Array.from(element.children).every(
  //       (child) => !hasText(child)
  //     );
  //     return nodeHasText && childrenDontHaveText;
  //   };
  // };

  // it("should handle decimal prices correctly", () => {
  //   const cardItem = [
  //     {
  //       id: 1,
  //       name: "Test Product", 
  //       price: 99.99,
  //       qty: 2,
  //       cover: "./test.jpg"
  //     }
  //   ];

  //   render(<Card cardItem={cardItem} addToCard={() => {}} decreaseQty={() => {}} />);
    
  //   // expect(screen.getByText("$199.98")).toBeInTheDocument();
  //   // expect(textMatcher(screen.getByText("$199.98"))).toBeInTheDocument();
  //   // const totalPriceContainer = screen.getByText("Card Summary").parentElement;
  //   // const totalPriceText = totalPriceContainer?.children[1].textContent;
  //   // console.log(totalPriceText);
    

  //   // console.log(1001);
    
  // });
});
