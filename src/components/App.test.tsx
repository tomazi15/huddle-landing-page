import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  test("renders learn react link", () => {
    render(<App />);

    const header = screen.getByRole("banner");
    const main = screen.getByRole("main");
    const footer = screen.getByRole("contentinfo");

    expect(header).toBeInTheDocument();
    expect(main).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
  });
});
