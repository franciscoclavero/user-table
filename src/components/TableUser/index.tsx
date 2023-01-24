import { TypeUser } from "@/pages/index";
import { useAppStore } from "hooks/useAppStore";
import { deleteData } from "hooks/useExternalApi";
import { MouseEvent, useState } from "react";
import { useDispatch } from "react-redux";
import getFilterArray from "src/functions/filterArray";
import getSortAsc from "src/functions/sortAsc";
import getSortDesc from "src/functions/sortDesc";
import { setSort } from "src/redux/reducer/filterReducer";
import { setDisplay, setUserData, setUserList } from "src/redux/reducer/userReducer";
import Icon from "../Icon";
import Pagination from "../Pagination";

import styled from "./style.module.css";

interface InterfaceEvent {
  target: MouseEvent<HTMLButtonElement, MouseEvent> | null;
}

const TableUser = () => {
  const dispatch = useDispatch();
  const { userList } = useAppStore(state => state.userList);
  const { filterText } = useAppStore(state => state.filterText);
  const { sort } = useAppStore(state => state.filterText);

  const [ itensPerPage ] = useState(8);
  const [ currentPage, setCurrentPage ] = useState(0);

  const pages = Math.ceil(userList.length / itensPerPage);
  const startIndex = currentPage * itensPerPage;
  const endIndex = startIndex + itensPerPage;
  let userListFiltered = getFilterArray(userList, filterText);
  const currentItens = userListFiltered.slice(startIndex, endIndex);

  const handleClickPagination = (page: number = 0, e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => { 
    let changePage = 0;
    const valueTarget = (e.target as HTMLInputElement).value;

    if (e.target) {
      changePage = (valueTarget) ? Number(valueTarget) : (currentPage + page);
    }
    setCurrentPage(changePage);
  };
  const handleClickUpdateUserOpen = (item: TypeUser) => {
    dispatch( setUserData(item) );
    dispatch( setDisplay('block') );
  };
  const handleClickDeleteUserOpen = (userId: number) => {
    deleteData(userId.toString());
  }
  const handleClickSort = (header: string) => {
    dispatch(
      setUserList(
        (sort === 'asc') ? getSortDesc([...userList], header) : getSortAsc([...userList], header) 
      )
    );
    dispatch( setSort( (sort === 'asc') ? 'desc' : 'asc' ) );
  }
  return (
    <div className={styled.tableDiv}>
      <table className={styled.table}>
        <thead>
          <tr>
            <th onClick={ () => { handleClickSort('id'); } }>ID</th>
            <th onClick={ () => { handleClickSort('name'); } }>Nome</th>
            <th onClick={ () => { handleClickSort('birthdate'); } }>Data de Aniversário</th>
            <th onClick={ () => { handleClickSort('country'); } }>País</th>
            <th onClick={ () => { handleClickSort('city'); } }>Cidade</th>
            <th>Ações</th>
          </tr>
        </thead> 
        <tbody>
          {
            currentItens.map((item) => {
              const birthdate = new Date(item.birthdate);
              const formatBirthdate = `${birthdate.getDate()}/${birthdate.getMonth() + 1}/${birthdate.getFullYear()}`;

              return (
                <tr key={item.id}>
                  <td>{ item.id }</td>
                  <td>{ item.name }</td>
                  <td>{ formatBirthdate }</td>
                  <td>{ item.country }</td>
                  <td>{ item.city }</td>
                  <td> 
                    <Icon type="edit" classObject={{
                      'height': "32px", 
                      'width':"32px", 
                      'margin': '5px', 
                      'cursor': 'pointer', 
                      'opacity': 0.5}} onClick={ () => handleClickUpdateUserOpen(item)}/>
                    <Icon type="delete" classObject={{
                      'height': "32px", 
                      'width':"32px", 
                      'margin': '5px', 
                      'cursor': 'pointer', 
                      'opacity': 0.5}} onClick={ () => handleClickDeleteUserOpen(item.id)} />
                  </td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
      <section className={styled.footer}>
        <article className={styled.totalList}>
          <p> Total de pessoas: {userList.length} </p>
        </article>
          <Pagination pages={pages} currentPage={currentPage} onClick={(event) => {handleClickPagination(0, event) }}></Pagination>
      </section>
    </div>
  );
};

export default TableUser;