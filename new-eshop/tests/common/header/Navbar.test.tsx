<<<<<<< HEAD
=======
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { describe, it, expect, afterEach, beforeEach } from "vitest";
import { Navbar } from "../../../src/common/header/Navbar";
>>>>>>> master
import React from "react";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { describe, it, expect, afterEach, beforeEach } from "vitest";
import { Navbar } from "../../../src/common/header/Navbar";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom/vitest";
<<<<<<< HEAD

describe("Navbar", () => {
  let container: HTMLElement;
  let menu: HTMLElement;
  let toggleButton: HTMLElement;

  beforeEach(() => {    
    const renderResult = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    
    container = renderResult.container;
    menu = screen.getByRole("list");
    toggleButton = screen.getByRole("button", { name: "" });
  });

  afterEach(() => {
    cleanup();
  });

=======
// import { render, screen } from "@testing-library/react";
// import { Navbar } from "../../../src/common/header/Navbar";
// import { expect } from "@jest/globals";

// afterEach(cleanup);

describe("Navbar", () => {

  let container: HTMLElement;
  let menu: HTMLElement;
  let toggleButton: HTMLElement;

  beforeEach(() => {    
    const renderResult = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    
    container = renderResult.container;
    menu = screen.getByRole("list");
    toggleButton = screen.getByRole("button", { name: "" });

    // Object.defineProperty(window, 'innerWidth', {
    //   writable: true,
    //   configurable: true,
    //   value: 500,
    // });
    // window.dispatchEvent(new Event('resize'));
  });

  afterEach(() => {
    cleanup();
    // console.log("Cleaned");
  });

  // it("should render the Navbar component", () => {
  //   // render(<Navbar />);
  //   render(
  //     <MemoryRouter>
  //       <Navbar />
  //     </MemoryRouter>
  //   );
  //   const navbarElement = screen.getAllByRole("ul");
  //   expect(navbarElement[0]).toBeInTheDocument();
  //   // screen.debug();
  // });

>>>>>>> master
  it("should render 'Navbar'", () => {
    expect(container.getElementsByClassName("navlink")).toBeTruthy();
  });

<<<<<<< HEAD
=======
  // it('should display the logo', () => {
  //     // render(<Navbar />);
  //     const logoElement = screen.getByAltText('logo');
  //     expect(logoElement).toBeInTheDocument();
  // });

>>>>>>> master
  it("should have a link to the 'home' page", () => {
    const homeLinks = screen.getAllByRole("link", { name: /home/i });
    expect(homeLinks.length).toBeGreaterThan(0);
    expect(homeLinks[0]).toHaveAttribute("href", "/");
  });

  it("should have a link to the 'contact' page", () => {
    const contactLink = screen.getAllByRole("link", { name: /contact/i });
    expect(contactLink.length).toBeGreaterThan(0);
    expect(contactLink[0]).toHaveAttribute("href", "/contact");
  });

  it("should have a toggle button", () => {
    expect(toggleButton).toBeInTheDocument();
    expect(toggleButton).toHaveClass("toggle");
  });

  it("should close menu when link is clicked", () => {
    fireEvent.click(toggleButton);
    expect(menu).toHaveClass("nav-links-MobileMenu");

    const homeLink = screen.getAllByRole("link", { name: /home/i })[0];
    fireEvent.click(homeLink);

    expect(menu).not.toHaveClass("nav-links-MobileMenu");
    expect(menu).toHaveClass("link", "f_flex", "capitalize");
  });
<<<<<<< HEAD
=======
  
>>>>>>> master
});
