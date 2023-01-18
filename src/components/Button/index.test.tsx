import { render, screen } from "@testing-library/react";
import Button from ".";

describe("Button component ", () => {
  it("- render", () => {
    const { container } = render(<Button />);

    const buttonNode = container.getElementsByClassName("buttonAdd");
    const buttonImageNode = container.getElementsByClassName("imgAdd");
    
    const buttonScreen = screen.getByText("Cadastrar");


    expect(buttonNode.length).toBe(1);
    expect(buttonImageNode.length).toBe(1);
    expect(buttonScreen).toBeInTheDocument;
  });
});
