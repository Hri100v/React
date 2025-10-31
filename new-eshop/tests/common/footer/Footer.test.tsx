import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import { it, expect, describe, afterEach } from "vitest";
import { Footer } from "../../../src/common/footer/Footer";
import "@testing-library/jest-dom/vitest";

afterEach(() => {
  cleanup();
});

describe("Footer", () => {
  it("should render 'Footer'", () => {
    const { container } = render(<Footer />);
    expect(container.getElementsByClassName("footer")).toBeTruthy();
  });

  it("should render 'Footer' with text 'Bulgaria'", () => {
    render(<Footer />);
    const footerElement = screen.getByText(/Bulgaria|България/i);
    expect(footerElement).toBeInTheDocument();
  });
});
