import { render, screen } from "@testing-library/react";
import TableUser from ".";

describe("Table User ", () => {
  it("- render", () => {
    const { container } = render(<TableUser />);

    const tableNode = container.getElementsByClassName("table");
    const tableDivNode = container.getElementsByClassName("tableDiv");

    expect(tableDivNode.length).toBe(1);
    expect(tableNode.length).toBe(1);
  });
});
