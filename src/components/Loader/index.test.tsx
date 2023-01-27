import { render, screen } from "@testing-library/react";
import Loader from ".";

describe("Loader component ", () => {
  it("- Render", () => {
    const { container } = render(<Loader loading="block" />);

    const loaderBodyNode = container.getElementsByClassName('loaderBody');
    const loaderContentNode = container.getElementsByClassName('contentLoader');
    const loaderNode = container.getElementsByClassName('loader');
    const loaderTextNode = screen.getByText('Carregando.');

    expect(loaderBodyNode.length).toBe(1);
    expect(loaderContentNode.length).toBe(1);
    expect(loaderNode.length).toBe(1);
    expect(loaderTextNode).toBeInTheDocument;
  });
});
