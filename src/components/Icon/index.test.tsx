import { render, screen } from "@testing-library/react";
import Icon from ".";

describe("Icon Component ", () => {
  it("- render", () => {
    const { container } = render(<Icon type="search" classObject={{}} />);

    const iconNode = container.getElementsByTagName('img');

    expect(iconNode.length).toBe(1);
  });
});
