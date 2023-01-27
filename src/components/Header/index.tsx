import styled from "./style.module.css";

const Header = () => {
  return (
    <header className={styled.header}>
      <h1 className={styled.title}> Lista de Pessoas</h1>
    </header>
  );
};

export default Header;