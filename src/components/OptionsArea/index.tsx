import { useDispatch } from "react-redux";
import { setFilterText } from "../../redux/reducer/filterReducer";
import Button from "../Button";
import FilterInput from "../FilterInput";
import styled from "./style.module.css";


const OptionsArea = () => {
  const dispatch = useDispatch();
  
  return (
    <article className={styled.optionArea}>
      <FilterInput onChange={(e) => { dispatch(setFilterText(e.target.value)) }}/>
      <Button />
    </article>
  );
};

export default OptionsArea;