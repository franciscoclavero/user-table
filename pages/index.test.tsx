import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../src/redux/store";
import Home from ".";

describe("Index component ", () => {
  it("- render", () => {
    const { container } = render(
      <Provider store={store}>
      <Home />
      </Provider>
    );

    const homeNode = container.getElementsByClassName("main");

    expect(homeNode.length).toBe(1);
  });
});
