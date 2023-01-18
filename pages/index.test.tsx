import { render } from "@testing-library/react";
import Home from ".";

describe("Index component ", () => {
  it("- render", () => {
    const { container } = render(<Home />);

    const homeNode = container.getElementsByClassName("main");

    expect(homeNode.length).toBe(1);
  });
});
