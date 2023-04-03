import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer", () => {
  test("all Footer icons are rendered", () => {
    render(<Footer />);

    const facebookIcon = screen.getByLabelText("facebook icon");
    const twitterIcon = screen.getByLabelText("twitter icon");
    const instagramIcon = screen.getByLabelText("twitter icon");

    expect(facebookIcon).toBeInTheDocument();
    expect(twitterIcon).toBeInTheDocument();
    expect(instagramIcon).toBeInTheDocument();
  });
});
