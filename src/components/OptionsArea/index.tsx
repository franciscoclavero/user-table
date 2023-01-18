import Button from "../Button";
import FilterInput from "../FilterInput";
import styled from "./style.module.css";

const OptionsArea = () => {
  return (
    <article className={styled.optionArea}>
      <FilterInput />
      <Button />
    </article>
  );
};

export default OptionsArea;