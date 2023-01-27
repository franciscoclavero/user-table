import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import TableUser from ".";

describe("Table User ", () => {
  it("- render", () => {
    const { container } = render(
      <Provider store={store}>
        <TableUser />
      </Provider>
    );

    const tableNode = container.getElementsByClassName("table");
    const tableDivNode = container.getElementsByClassName("tableDiv");

    expect(tableDivNode.length).toBe(1);
    expect(tableNode.length).toBe(1);
  });
});
