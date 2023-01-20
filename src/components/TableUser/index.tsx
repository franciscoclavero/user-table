import { TypeUser } from "@/pages/index";
import { useAppStore } from "hooks/useAppStore";
import { useExportApi } from "hooks/useExternalApi";
import { useEffect, useState } from "react";
import Icon from "../Icon";

import styled from "./style.module.css";

const TableUser = () => {
  const { userList } = useAppStore(state => state.userList);

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
            userList.map((item) => {
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
    </div>
  );
};

export default TableUser;