import FilterInput from "../FilterInput";
import styled from "./style.module.css";

const OptionsArea = () => {
  return (
    <article className={styled.optionArea}>
      <FilterInput />
      <div>Adicionar novo</div>
    </article>
  );
};

export default OptionsArea;