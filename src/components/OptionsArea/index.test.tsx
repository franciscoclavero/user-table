import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import OptionsArea from ".";

describe("OptionArea ", () => {
  it("- render", () => {
    const { container } = render(
      <Provider store={store}>
        <OptionsArea />
      </Provider>
    );

    const optionAreaNode = container.getElementsByClassName('optionArea');

    expect(optionAreaNode.length).toBe(1);
  });
});
