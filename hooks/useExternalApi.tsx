import { useEffect, useState } from "react";
import axios, { AxiosRequestConfig } from "axios";

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