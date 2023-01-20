import { render, screen } from "@testing-library/react";
import Pagination from ".";

describe("Pagination ", () => {
  it("- render", () => {
    const { container } = render(<Pagination pages={3} currentPage={1} onClick={() => {}}/>);

    const page_1 = screen.findByText('1');
    const page_2 = screen.findByText('2');
    const page_3 = screen.findByText('3');

    expect(page_1).toBeInTheDocument;
    expect(page_2).toBeInTheDocument;
    expect(page_3).toBeInTheDocument;
  });
});
