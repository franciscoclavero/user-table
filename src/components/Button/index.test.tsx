import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import Button from ".";

describe("Button component ", () => {
  it("- render", () => {
    const { container } = render(
      <Provider store={store}>
        <Button />
      </Provider>
    );

    const buttonNode = container.getElementsByClassName("buttonAdd");
    const buttonImageNode = container.getElementsByClassName("imgAdd");
    
    const buttonScreen = screen.getByText("Cadastrar");


    expect(buttonNode.length).toBe(1);
    expect(buttonImageNode.length).toBe(1);
    expect(buttonScreen).toBeInTheDocument;
  });
  it(" - Button Click", () => {
    const { container } = render(
      <Provider store={store}>
        <Button />
      </Provider>
    );

    const buttonNode = container.getElementsByClassName("buttonAdd");
    fireEvent.click(buttonNode[0]);
  });
});
