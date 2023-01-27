import { fireEvent, render, screen } from "@testing-library/react";
import FilterInput from ".";

describe("Filter Input ", () => {  
  type TestElement = Document | Element | Window | Node

  function hasInputValue(e: TestElement, inputValue: string) {
    return screen.getByDisplayValue(inputValue) === e
  }
  it("- render", () => {
    const { container } = render(<FilterInput onChange={() => {}}/>);

    const filterNode = screen.findAllByPlaceholderText('Pesquisar');

    expect(filterNode).toBeInTheDocument;
  });
  it("- Render Input Filter", () => {
    const { container } = render(<FilterInput onChange={() => {}}/>);

    const filterNode = screen.getByPlaceholderText('Pesquisar');

    expect(filterNode).toBeInTheDocument();
  });
  it("- Filter input vale", () => {
    const { container } = render(<FilterInput onChange={() => {}}/>);

    const filterNode = screen.getByPlaceholderText('Pesquisar');

    fireEvent.change(filterNode, { target: { value: 'Teste' } });
    expect(hasInputValue(filterNode, "Teste")).toBe(true);
  });
});
