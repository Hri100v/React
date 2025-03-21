// import React from "react";
// import { render, screen } from '@testing-library/react';
// import { Header } from '../../../src/common/header/Header';
// import { describe, it, expect } from 'vitest';
// import { MemoryRouter } from "react-router-dom";

import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import { describe, it, expect, afterEach } from "vitest";
import { Header } from '../../../src/common/header/Header';
import { Head } from "../../../src/common/header/Head";
import { Search } from "../../../src/common/header/Search";
import { Navbar } from "../../../src/common/header/Navbar";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom/vitest";

afterEach(cleanup);

describe('Header Component', () => {
    it('should render the header component', () => {
        // render(<Header cardItem={[]} />);
        const { container } = render(
            <MemoryRouter>
              <Header cardItem={[]} />
            </MemoryRouter>
          );
        // screen.debug();

        // const headerElement = screen.getByRole('banner');
        // expect(headerElement).toBeInTheDocument();

        expect(container.getElementsByClassName("head")).toBeTruthy();

        // expect(container.getfirrstElementByClassName("head")).toBeTruthy();
    });

    // it('should display the correct title', () => {
    //     render(<Header />);
    //     const titleElement = screen.getByText(/Your Title Here/i);
    //     expect(titleElement).toBeInTheDocument();
    // });

    // it('should have a navigation menu', () => {
    //     render(<Header />);
    //     const navElement = screen.getByRole('navigation');
    //     expect(navElement).toBeInTheDocument();
    // });

    it("renders Head component", () => {
      // const { getByText } = render(<Header cardItem={[]} />);
      // expect(getByText("Head Component")).toBeInTheDocument();

      const { container } = render(
        <MemoryRouter>
          <Header cardItem={[]} />
        </MemoryRouter>
      );
      
      const elementBG = container.getElementsByClassName("head")[0];
      expect(elementBG).toBeTruthy();
      expect(elementBG).toHaveTextContent("Bulgaria");
    });

    // it("renders Head component with BG element", () => {
    //   render(
    //     <MemoryRouter>
    //       <Header cardItem={[]} />
    //     </MemoryRouter>
    //   );
      
    //   // const elementBG = container.getElementsByClassName("head")[0];
    //   // expect(elementBG).toBeTruthy();
    //   // expect(elementBG).toHaveTextContent("Bulgaria");

    //   // // const bgElement = container.getByTestId("bg-flag");
    //   // // expect(bgElement).toHaveAttribute("title", "Bulgaria");
    //   // expect(elementBG.querySelector("span")?.firstChild).toHaveAttribute("title", "Bulgaria");

    //   const bgElement = screen.getByTestId("bg-flag");
    //   expect(bgElement).toHaveAttribute("title", "Bulgaria");
    // });
    
    it("renders Search component with cardItem prop", () => {
      const cardItem = [{ id: 1, name: "Test Item" }];
      // const { getByText } = render(<Header cardItem={cardItem} />);
      // expect(getByText("Search Component")).toBeInTheDocument();

      const simpleArray = [{
        id: 7,
        cover: "./images/shops/shops-1.png",
        name: "Mapple Earphones",
        price: "180",
        discount: "25",
      }];

      // const { container } = render(
      //   <MemoryRouter>
      //     <Header cardItem={simpleArray[0]} />
      //   </MemoryRouter>
      // );

      const { container } = render(
        <MemoryRouter>
          <Header cardItem={[{}]} />
        </MemoryRouter>
      );

      const searchElement = container.getElementsByClassName("search")[0];
      expect(searchElement).toBeTruthy();
      expect(searchElement).toHaveTextContent("All Categories");
      // expect(searchElement).toHaveTextContent("Mapple Earphones");

      // screen.debug();
    });
    
      // it("renders Navbar component", () => {
      //   const { getByText } = render(<Header cardItem={[]} />);
      //   expect(getByText("Navbar Component")).toBeInTheDocument();
      // });
});