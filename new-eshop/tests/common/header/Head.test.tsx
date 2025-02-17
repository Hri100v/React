import React from "react";
import { render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
// import "@testing-library/jest-dom/extend-expect";
import { Head } from "../../../src/common/header/Head";
import { cleanup } from "@testing-library/react";
import { log } from "console";

afterEach(() => {
    cleanup();
});

describe("Head", () => {
  it("should render 'Head'", () => {
    const { container } = render(<Head />);
    expect(container.getElementsByClassName("head")).toBeTruthy();
  });

  it("should render title \"Bulgaria\"", () => {
    render(<Head />);
    // screen.debug();
    const title = screen.getByTitle("Bulgaria");
    expect(title).toBeTruthy();
  });
});
