import { ChangeEventHandler } from "react";
import Icon from "../Icon";
import styled from "./style.module.css";

interface InterfaceFilterInput {
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const FilterInput = ( { onChange }:InterfaceFilterInput ) => {
  return (
    <div className={styled.bodyFilter}>
      <div className={styled.imgArea}>
        <Icon type="search" classObject={{'width':"24px", 'margin': '4px', 'opacity': 0.5}} />
      </div>
      <input className={styled.input} onChange={onChange} type="text" placeholder="Pesquisar"/>
    </div>
  );
};

export default FilterInput;