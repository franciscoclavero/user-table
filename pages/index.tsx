import ContentMain from '../src/components/ContentMain';
import Sidebar from '../src/components/Sidebar';

import styled from '@/pages/index.module.css';
import { useExportApi } from '../hooks/useExternalApi';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUserList } from '../src/redux/reducer/userReducer';
import ModalUser from '../src/components/ModalUser';
import { useAppStore } from '../hooks/useAppStore';
import Loader from '../src/components/Loader';
import { setLoading } from '../src/redux/reducer/loaderReduce';
import { batch } from 'react-redux';

export type TypeUser = {
  id: string,
  name: string,
  birthdate: string,
  country: string,
  city: string
};


export default function Home() {
  const dispatch = useDispatch();
  const { data, error, loading } = useExportApi<TypeUser[]>('');
  const modalDisplay = useAppStore(state => state.userList);
  const loader = useAppStore(state => state.loading);

  useEffect(() => {
    if (error === 500) {return ;};

    batch(() => {
      dispatch(setUserList(data));
      dispatch(setLoading(loading));
    })
  }, [data]);

  return (
    <main className={styled.main}>
      <Sidebar />
      <ContentMain />
      <ModalUser display={modalDisplay.display} />
      <Loader loading={loader.loading}/>
    </main>
  );
};
