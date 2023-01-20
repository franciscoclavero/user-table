import { useAppStore } from "hooks/useAppStore";
import { MouseEvent, MouseEventHandler, useState } from "react";
import Icon from "../Icon";

import styled from "./style.module.css";

interface InterfaceEvent {
  target: MouseEvent<HTMLButtonElement, MouseEvent> | undefined;
}

const TableUser = () => {
  const { userList } = useAppStore(state => state.userList);

  const [ itensPerPage, setItensPerPage ] = useState(8);
  const [ currentPage, setCurrentPage ] = useState(0);

  const pages = Math.ceil(userList.length / itensPerPage);
  const startIndex = currentPage * itensPerPage;
  const endIndex = startIndex + itensPerPage;
  const currentItens = userList.slice(startIndex, endIndex);

  const handleClickPagination = (page: number = 0, e: InterfaceEvent) => { 
    let changePage = 0;

    if (e.target) {
      changePage = (e.target.value) ? Number(e.target.value) : (currentPage + page);
    }
    setCurrentPage(changePage);
  };

  return (
    <div className={styled.tableDiv}>
      <table className={styled.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Data de Aniversário</th>
            <th>País</th>
            <th>Cidade</th>
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
                  <td>{ item.city }</td>
                  <td>{ item.country }</td>
                  <td> 
                    <Icon type="edit" classObject={{
                      'height': "32px", 
                      'width':"32px", 
                      'margin': '5px', 
                      'cursor': 'pointer', 
                      'opacity': 0.5}}  />
                    <Icon type="delete" classObject={{
                      'height': "32px", 
                      'width':"32px", 
                      'margin': '5px', 
                      'cursor': 'pointer', 
                      'opacity': 0.5}}/>
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
        <div className={styled.pagination}>
          <button onClick={(event) => handleClickPagination(-1, event)}>Prev</button>
          {
            Array.from(Array(pages), (item, index) => {
              return <button className={(index == currentPage) ? styled.active : ""}  key={index} value={index} onClick={(event) => handleClickPagination(index, event)}> {index + 1} </button>
            })
          }
          <button onClick={(event) => handleClickPagination(1, event)}>Next</button>
        </div>
      </section>
    </div>
  );
};

export default TableUser;