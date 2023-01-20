import { MouseEventHandler } from "react";
import styled from "./style.module.css";

interface InterfacePagination {
  pages: number;
  currentPage: number;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const Pagination = ( {pages, currentPage, onClick }:InterfacePagination ) => {
  return (
    <div className={styled.pagination}>
      {
        Array.from(Array(pages), (item, index) => {
          return <button className={index === currentPage ? styled.active : ''} key={index} value={index} onClick={onClick}> {index + 1} </button>
        })
      }
    </div>
  );
};

export default Pagination;