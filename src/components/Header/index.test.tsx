import { render, screen } from "@testing-library/react";
import Header from ".";

describe("Header component ", () => {
  it("- render", () => {
    const { container } = render(<Header />);

    const headerNode = screen.getByText("Pessoas");

    expect(headerNode).toBeInTheDocument;
  });
});
