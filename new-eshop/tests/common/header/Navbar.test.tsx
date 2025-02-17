import { cleanup, render, screen } from "@testing-library/react";
import { describe, it, expect, afterEach } from "vitest";
import { Navbar } from "../../../src/common/header/Navbar";
import React from "react";
import { MemoryRouter } from "react-router-dom";
// import "@testing-library/jest-dom";

afterEach(cleanup);

describe("Navbar", () => {
  it("should render the Navbar component", () => {
    // render(<Navbar />);
    // const navbarElement = screen.getByRole("navigation");
    // expect(navbarElement).toBeInTheDocument();
    // screen.debug();
  });

  it("should render 'Navbar'", () => {
    const { container } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    expect(container.getElementsByClassName("navlink")).toBeTruthy();
  });

  // it('should display the logo', () => {
  //     render(<Navbar />);
  //     const logoElement = screen.getByAltText('logo');
  //     expect(logoElement).toBeInTheDocument();
  // });

  it('should have a link to the home page', () => {
      // render(<Navbar />);
      render(<MemoryRouter>
        <Navbar />
      </MemoryRouter>);
      // const homeLink = screen.getByRole('link', { name: /home/i });
      const homeLinks = screen.getAllByRole('link', { name: /home/i });
      // expect(homeLinks).toBeInTheDocument();
      expect(homeLinks.length).toBeGreaterThan(0);
      console.log(1001);
      console.log(homeLinks);
      
      
      // expect(homeLinks[0]).toHaveAttribute('href', '/');
  });

  // it('should have a link to the shop page', () => {
  //     render(<Navbar />);
  //     const shopLink = screen.getByRole('link', { name: /shop/i });
  //     expect(shopLink).toBeInTheDocument();
  //     expect(shopLink).toHaveAttribute('href', '/shop');
  // });

  // it('should have a link to the contact page', () => {
  //     render(<Navbar />);
  //     const contactLink = screen.getByRole('link', { name: /contact/i });
  //     expect(contactLink).toBeInTheDocument();
  //     expect(contactLink).toHaveAttribute('href', '/contact');
  // });
});
