import Header from "../Header";
import OptionsArea from "../OptionsArea";
import TableUser from "../TableUser";
import styled from "./style.module.css";

const ContentMain = () => {
  return (
    <section className={styled.content}>
      <Header />
      <OptionsArea />
      <TableUser />
    </section>
  );
};

export default ContentMain;