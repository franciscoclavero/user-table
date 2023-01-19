import { useExportApi } from "hooks/useExternalApi";
import { useEffect, useState } from "react";
import styled from "./style.module.css";

export type TypeUser = {
  id: string,
  name: string,
  birthdate: string,
  country: string,
  city: string
};

const TableUser = () => {
  const { data } = useExportApi<TypeUser[]>('');
  const [ userList, setUserList ] = useState<TypeUser[]>([])

  useEffect(() => {
    setUserList( data );
  }, [data]);

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
              return (
                <tr key={item.id}>
                  <td>{ item.id }</td>
                  <td>{ item.name }</td>
                  <td>{ item.birthdate }</td>
                  <td>{ item.city }</td>
                  <td>{ item.country }</td>
                  <td> Ações </td>
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