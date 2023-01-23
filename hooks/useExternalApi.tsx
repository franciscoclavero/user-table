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

  useEffect(() => {
    axios.get('https://63c82502075b3f3a91db329c.mockapi.io/user', options)
    .then(response => {
      setData(response.data);
    })
  }, []);

  return { data };
};

export const postData = (dataForm: FormDataType) => {
  axios.post(`https://63c82502075b3f3a91db329c.mockapi.io/user`, {
    name: dataForm.name,
    birthdate: dataForm.birthdate,
    country: dataForm.country,
    city: dataForm.city
  });
};

export const putData = (id: string, dataForm: FormDataType) => {
  axios.post(`https://63c82502075b3f3a91db329c.mockapi.io/user/${id}`, {
    name: dataForm.name,
    birthdate: dataForm.birthdate,
    country: dataForm.country,
    city: dataForm.city
  });
}