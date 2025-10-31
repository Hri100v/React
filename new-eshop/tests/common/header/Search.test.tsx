// tests/common/header/Search.test.tsx
import React from "react";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach} from "vitest";
import { Mock } from "vitest";
import { Search } from "../../../src/common/header/Search";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom/vitest";

const mockAddEventListener = vi.fn();
const mockRemoveEventListener = vi.fn();

beforeEach(() => {
  window.addEventListener = mockAddEventListener;
  window.removeEventListener = mockRemoveEventListener;
});

afterEach(() => {
  cleanup();
  vi.clearAllMocks();
});

describe("Search Component", () => {
  it("should render Search component with logo", () => {
    const cardItem: any[] = [];
    render(
      <MemoryRouter>
        <Search cardItem={cardItem} />
      </MemoryRouter>
    );

    const logo = screen.getByAltText("");
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("src", expect.stringContaining("reshot-icon-mill-K5DQVANU3P.svg"));
  });

  it("should render search box with input and categories", () => {
    const cardItem: any[] = [];
    const searchComponent = render(
      <MemoryRouter>
        <Search cardItem={cardItem} />
      </MemoryRouter>
    );

    const searchInput = screen.getByPlaceholderText("Search and hit enter");
    expect(searchInput).toBeInTheDocument();

    // screen.debug();

    // const allIComponents = screen.queryAllByRole('i');
    // const allIComponents = screen.getAllByRole('div');
    // const allIComponents = screen.getByRole('search-item');
    // console.log('All <i> components found:', allIComponents.length);
    // console.log(allIComponents, '---', typeof allIComponents, "allIComponents.children", allIComponents.children, 1771, searchComponent.findAllByRole('i'));
    
    // console.table(allIComponents);

    // const sC = screen.getByRole('search-item');
    const iList = searchComponent.container.getElementsByTagName("i");
    // console.log(iList);
    // console.table(iList);
    expect(iList[0]).toHaveClass("fa-search");
    

    // const searchIcon = screen.getByRole('i', { name: /search/i });
    // expect(searchIcon).toBeInTheDocument();
    // expect(sC.children![0].toHaveClass("fa-search")).toBeTruthy();
    // expect(iList[0].toHaveClass("fa-search")).toBeTruthy();

    const categories = screen.getByText("All Categories");
    expect(categories).toBeInTheDocument();
  });

//   it("should render user and cart icons", () => {
//     const cardItem: any[] = [];
//     render(
//       <MemoryRouter>
//         <Search cardItem={cardItem} />
//       </MemoryRouter>
//     );

//     const userIcon = screen.getByRole('i', { name: /user/i });
//     expect(userIcon).toBeInTheDocument();

//     const cartIcon = screen.getByRole('i', { name: /shopping-bag/i });
//     expect(cartIcon).toBeInTheDocument();
//   });

  it("should display cart item count when cart is not empty", () => {
    const cardItem: any[] = [
      { id: 1, name: "Product 1", price: 100, qty: 1 },
      { id: 2, name: "Product 2", price: 200, qty: 2 },
    ];
    render(
      <MemoryRouter>
        <Search cardItem={cardItem} />
      </MemoryRouter>
    );

    const cartCount = screen.getByText("2");
    expect(cartCount).toBeInTheDocument();
  });

  it("should not display cart count when cart is empty", () => {
    const cardItem: any[] = [];
    render(
      <MemoryRouter>
        <Search cardItem={cardItem} />
      </MemoryRouter>
    );

    const cartCount = screen.queryByText(/[0-9]+/);
    screen.debug;
    expect(cartCount).not.toBeInTheDocument();
  });

  it("should add scroll event listener on mount", () => {
    const cardItem: any[] = [];
    render(
      <MemoryRouter>
        <Search cardItem={cardItem} />
      </MemoryRouter>
    );

    expect(mockAddEventListener).toHaveBeenCalledWith("scroll", expect.any(Function));
  });

  it("should handle search input changes", () => {
    const cardItem: any[] = [];
    render(
      <MemoryRouter>
        <Search cardItem={cardItem} />
      </MemoryRouter>
    );

    const searchInput = screen.getByPlaceholderText("Search and hit enter");
    fireEvent.change(searchInput, { target: { value: "test search" } });

    expect(searchInput).toHaveValue("test search");
  });

  it("should have cart link to /card", () => {
    // const cardItem: any[] = [];
    const cardItem: any = [
      {
        id: 2,
        discount: 40,
        cover: "./images/flash/flash-2.png",
        name: "Mulching mower",
        price: 900,
        qty: 1
      },
    ];

    render(
      <MemoryRouter>
        <Search cardItem={cardItem} />
      </MemoryRouter>
    );

    // const cartLink = screen.getByRole('link', { name: /shopping-bag/i });
    const cartLink = screen.getByRole('link');
    expect(cartLink).toHaveAttribute('href', '/card');
  });
});

describe("Search Component Scroll Behavior", () => {
  let originalQuerySelector: typeof document.querySelector;

  beforeEach(() => {
    originalQuerySelector = document.querySelector;
    document.querySelector = vi.fn();
  });

  afterEach(() => {
    document.querySelector = originalQuerySelector;
  });

  // it("should toggle 'active' class on scroll", () => {
  //   const cardItem: any[] = [];
  //   render(
  //     <MemoryRouter>
  //       <Search cardItem={cardItem} />
  //     </MemoryRouter>
  //   );

  //   // Взимаме scroll event handler-а
  //   // const scrollHandler = mockAddEventListener.mock.calls.find(
  //   //   call => call[0] === "scroll"
  //   // )[1];
  //   const scrollCall = mockAddEventListener.mock.calls.find(
  //     call => call[0] === "scroll"
  //   );
  //   expect(scrollCall).toBeDefined();
  //   const scrollHandler = scrollCall![1] as () => void;

  //   // Mock-ваме .search елемент
  //   const mockSearchElement = {
  //     classList: {
  //       toggle: vi.fn()
  //     }
  //   };
  //   (document.querySelector as vi.Mock).mockReturnValue(mockSearchElement);

  //   // Тестваме при scrollY > 100
  //   Object.defineProperty(window, 'scrollY', { value: 150, writable: true });
  //   scrollHandler();

  //   expect(mockSearchElement.classList.toggle).toHaveBeenCalledWith("active", true);

  //   // Тестваме при scrollY <= 100
  //   Object.defineProperty(window, 'scrollY', { value: 50, writable: true });
  //   scrollHandler();

  //   expect(mockSearchElement.classList.toggle).toHaveBeenCalledWith("active", false);
  // });

  it("should handle missing search element gracefully", () => {
    const cardItem: any[] = [];
    render(
      <MemoryRouter>
        <Search cardItem={cardItem} />
      </MemoryRouter>
    );

    // Взимаме scroll event handler-а
    // const scrollHandler = mockAddEventListener.mock.calls.find(
    //   call => call[0] === "scroll"
    // )[1];

    const scrollCall = mockAddEventListener.mock.calls.find(
      call => call[0] === "scroll"
    );
    const scrollHandler = (scrollCall ? (scrollCall[1] as () => void) : (() => {}));

    // Mock-ваме липса на .search елемент
    (document.querySelector as Mock).mockReturnValue(null);

    // Това не трябва да хвърли грешка
    expect(() => {
      scrollHandler();
    }).not.toThrow();
  });
});
