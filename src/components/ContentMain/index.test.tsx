import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import ContentMain from ".";

describe("ContentMain component ", () => {
  it("- Render", () => {
    const { container } = render(
      <Provider store={store}>
        <ContentMain />
      </Provider>
    );

    const contentMainNode = container.getElementsByClassName('content');

    expect(contentMainNode.length).toBe(1);
  });
});
