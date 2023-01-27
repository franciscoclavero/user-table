import { render, screen } from "@testing-library/react";
import FilterInput from ".";

describe("Filter Input ", () => {
  it("- render", () => {
    const { container } = render(<FilterInput onChange={() => {}}/>);

    const filterNode = screen.findAllByPlaceholderText('Pesquisar');

    expect(filterNode).toBeInTheDocument;
  });
});
