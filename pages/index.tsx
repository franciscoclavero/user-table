import ContentMain from 'src/components/ContentMain';
import Sidebar from '../src/components/Sidebar';

import styled from '@/pages/index.module.css';

export default function Home() {
  return (
    <main className={styled.main}>
      <Sidebar />
      <ContentMain />
    </main>
  );
};
