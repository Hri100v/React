import { cleanup, render, screen } from "@testing-library/react";
import { describe, it, expect, afterEach } from "vitest";
import { Navbar } from "../../../src/common/header/Navbar";
import React from "react";
import { MemoryRouter } from "react-router-dom";
// import "@testing-library/jest-dom";
import "@testing-library/jest-dom/vitest";
// import { render, screen } from "@testing-library/react";
// import { Navbar } from "../../../src/common/header/Navbar";
// import { expect } from "@jest/globals";

afterEach(cleanup);

describe("Navbar", () => {
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

  it("should have a link to the 'home' page", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    const homeLinks = screen.getAllByRole("link", { name: /home/i });
    expect(homeLinks.length).toBeGreaterThan(0);
    expect(homeLinks[0]).toHaveAttribute("href", "/");
  });

  it("should have a link to the 'contact' page", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    const contactLink = screen.getAllByRole("link", { name: /contact/i });
    expect(contactLink.length).toBeGreaterThan(0);
    expect(contactLink[0]).toHaveAttribute("href", "/contact");
  });

  it("should have a toggle button", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    const toggleButton = screen.getByRole("button");
    expect(toggleButton).toBeInTheDocument();
    expect(toggleButton).toHaveClass("toggle");
  });
});
