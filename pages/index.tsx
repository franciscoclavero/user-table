import styled from '@/pages/index.module.css';
import Sidebar from '../src/components/Sidebar';

export default function Home() {
  return (
    <main className={styled.main}>
      <Sidebar />
      <div>Hello world</div>
    </main>
  )
}
