import { screen, render } from "@testing-library/react";
import Header from "./Header";

describe("Header", () => {
  test("all Header images are rendered", () => {
    render(<Header />);

    const huddleImage = screen.getByLabelText("huddle logo");
    const illustrationImage = screen.getByLabelText("illustration mockup");

    expect(huddleImage).toBeInTheDocument();
    expect(illustrationImage).toBeInTheDocument();
  });
});
