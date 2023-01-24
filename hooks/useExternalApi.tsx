import { useEffect, useState } from "react";
import axios, { AxiosRequestConfig } from "axios";

interface FormDataType {
  name: string, 
  birthdate: string, 
  country: string,
  city: string,
}

export function useExportApi<T = unknown>(url: string, options?: AxiosRequestConfig) {
  const [ data, setData ] = useState<T | []>([]);
  const [ error, setError ] = useState(0);

  useEffect(() => {
    axios.get('https://63c82502075b3f3a91db329c.mockapi.io/user', options)
    .then(response => {
      setData(response.data);
    }).catch((error) => {
      setError(error.response.status);

      alert("Erro de banco de dados");
    });
  }, []);

  return { data, error };
};

export function postData(dataForm: FormDataType) {
  axios.post(`https://63c82502075b3f3a91db329c.mockapi.io/user`, {
    name: dataForm.name,
    birthdate: dataForm.birthdate,
    country: dataForm.country,
    city: dataForm.city
  }).then(() => {
    alert("Cadastrado com sucesso!");
  });
};

export const putData = (id: string, dataForm: FormDataType) => {
  axios.put(`https://63c82502075b3f3a91db329c.mockapi.io/user/${id}`, {
    name: dataForm.name,
    birthdate: dataForm.birthdate,
    country: dataForm.country,
    city: dataForm.city
  }).then(() => {
    alert("Alterado com sucesso!");
  });
};

export const deleteData = (id: string) => {
  const response = axios.delete(`https://63c82502075b3f3a91db329c.mockapi.io/user/${id}`)
  .then(() => {
    alert("Excluído com sucesso!");
  });
};