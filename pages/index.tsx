import ContentMain from 'src/components/ContentMain';
import Sidebar from '../src/components/Sidebar';

import styled from '@/pages/index.module.css';
import { useExportApi } from 'hooks/useExternalApi';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUserList } from 'src/redux/reducer/userReducer';
import ModalUser from 'src/components/ModalUser';

export type TypeUser = {
  id: string,
  name: string,
  birthdate: string,
  country: string,
  city: string
};


export default function Home() {
  const { data } = useExportApi<TypeUser[]>('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setUserList(data));
  }, [data]);

  return (
    <main className={styled.main}>
      <Sidebar />
      <ContentMain />
      <ModalUser />
    </main>
  );
};
