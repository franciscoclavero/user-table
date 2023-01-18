import styled from "./style.module.css";


const FilterInput = () => {
  return (
    <div className={styled.bodyFilter}>
      <div className={styled.imgArea}>
        <img className={styled.img} src="assets/search.png" alt="search icon" />
      </div>
      <input className={styled.input} type="text" placeholder="Pesquisar"/>
    </div>
  );
};

export default FilterInput;