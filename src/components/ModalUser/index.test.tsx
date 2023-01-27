import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../redux/store";

import ModalUser from ".";

describe("ModalUser component ", () => { 
  type TestElement = Document | Element | Window | Node

  function hasInputValue(e: TestElement, inputValue: string) {
    return screen.getByDisplayValue(inputValue) === e
  }
  it("- Render", () => {
    const { container } = render(
      <Provider store={store}>
        <ModalUser display="block"/>
      </Provider>
    );

    const modalUserNode = container.getElementsByClassName('modalBody');

    expect(modalUserNode.length).toBe(1);
  });
  it("- Render Input nameUser", () => {
    const { container } = render(
      <Provider store={store}>
        <ModalUser display="block"/>
      </Provider>
    );

    const nameUserNode = screen.getByPlaceholderText('Nome do usuário');

    expect(nameUserNode).toBeInTheDocument();
  });
  it("- NameUser input", () => {
    const { container } = render(
      <Provider store={store}>
        <ModalUser display="block"/>
      </Provider>
    );

    const nameUserNode = screen.getByPlaceholderText('Nome do usuário');

    fireEvent.change(nameUserNode, { target: { value: 'Usuário' } });
    expect(hasInputValue(nameUserNode, "Usuário")).toBe(true);
  });
  it("- Render Input birthdate", () => {
    const { container } = render(
      <Provider store={store}>
        <ModalUser display="block"/>
      </Provider>
    );

    const bithdateNode = screen.getByPlaceholderText('Data de Nascimento');

    expect(bithdateNode).toBeInTheDocument();
  });
  it("- Birthdate input", () => {
    const { container } = render(
      <Provider store={store}>
        <ModalUser display="block"/>
      </Provider>
    );

    const birthdateNode = screen.getByPlaceholderText('Data de Nascimento');

    fireEvent.change(birthdateNode, { target: { value: '2023-01-06T10:48' } });
    expect(hasInputValue(birthdateNode, "2023-01-06T10:48")).toBe(true);
  });
  it("- Render Input country", () => {
    const { container } = render(
      <Provider store={store}>
        <ModalUser display="block"/>
      </Provider>
    );

    const countryNode = screen.getByPlaceholderText('País');

    expect(countryNode).toBeInTheDocument();
  });
  it("- Country input", () => {
    const { container } = render(
      <Provider store={store}>
        <ModalUser display="block"/>
      </Provider>
    );

    const countryNode = screen.getByPlaceholderText('País');

    fireEvent.change(countryNode, { target: { value: 'Brazil' } });
    expect(hasInputValue(countryNode, "Brazil")).toBe(true);
  });
  it("- Render Input city", () => {
    const { container } = render(
      <Provider store={store}>
        <ModalUser display="block"/>
      </Provider>
    );

    const cityNode = screen.getByPlaceholderText('Cidade');

    expect(cityNode).toBeInTheDocument();
  });
  it("- City input", () => {
    const { container } = render(
      <Provider store={store}>
        <ModalUser display="block"/>
      </Provider>
    );

    const cityNode = screen.getByPlaceholderText('Cidade');

    fireEvent.change(cityNode, { target: { value: 'Teste' } });
    expect(hasInputValue(cityNode, "Teste")).toBe(true);
  });
  it("- ButtonCreate Render", () => {
    const { container } = render(
      <Provider store={store}>
        <ModalUser display="block"/>
      </Provider>
    );

    const buttonCreateNode = container.getElementsByClassName('buttonCreate');

    expect(buttonCreateNode.length).toBe(1);
  });
  it("- ButtonCreate click", () => {
    const { container } = render(
      <Provider store={store}>
        <ModalUser display="block"/>
      </Provider>
    );

    const buttonCreateNode = container.getElementsByClassName('buttonCreate');
    fireEvent.click(buttonCreateNode[0]);
  });
  it("- ButtonCancel Render", () => {
    const { container } = render(
      <Provider store={store}>
        <ModalUser display="block"/>
      </Provider>
    );

    const buttonCancelNode = container.getElementsByClassName('buttonCancel');

    expect(buttonCancelNode.length).toBe(1);
  });
  it("- ButtonCancel click", () => {
    const { container } = render(
      <Provider store={store}>
        <ModalUser display="block"/>
      </Provider>
    );

    const buttonCancelNode = container.getElementsByClassName('buttonCancel');
    fireEvent.click(buttonCancelNode[0]);
  });
});