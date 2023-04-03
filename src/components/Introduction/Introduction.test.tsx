import { render, screen } from "@testing-library/react";
import Introduction from "./Introduction";

describe("Introduction", () => {
  test("all Introduction elements are rendered", () => {
    render(<Introduction />);

    const registerButton = screen.getByRole("button");
    const title = screen.getByRole("heading");

    expect(title).toBeInTheDocument();
    expect(title.textContent).toBe("Build The Community Your Fans Will Love");
    expect(registerButton).toBeInTheDocument();
    expect(registerButton.textContent).toBe("Register");
  });
});
