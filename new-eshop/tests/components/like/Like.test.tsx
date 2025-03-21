import React from "react";
import { describe, it, expect, afterEach } from "vitest";
import { cleanup, /* fireEvent, */ render, screen } from "@testing-library/react";
import { Like } from "../../../src/components/like/Like";
import "@testing-library/jest-dom/vitest";
// import { jest, test} from '@jest/globals';
import userEvent from "@testing-library/user-event";

afterEach(cleanup);

describe("Like Component", () => {
  it("should render the like component", () => {
    render(
      <>
        <Like />
      </>
    );

    // screen.debug();

    const likeButton = screen.getByRole("like-button");
    expect(likeButton).toBeInTheDocument();
    expect(likeButton.getElementsByTagName("i")[0]).toHaveClass("fa-heart");
  });

  it("click on the like button should count '1' in the label", async () => {
    const user = userEvent.setup();

    render(
      <>
        <Like />
      </>
    );

    const likeButton = screen.getByRole("like-button");
    expect(likeButton).toBeInTheDocument();
    const iTag = likeButton.getElementsByTagName("i")[0];
    expect(iTag).toHaveClass("fa-heart");

    await user.click(iTag);

    // screen.debug();
    
    const label = likeButton.getElementsByTagName("label")[0];
    expect(label).toHaveTextContent("1");
  });
});
