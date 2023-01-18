import Header from "../Header";
import OptionsArea from "../OptionsArea";
import styled from "./style.module.css";

const ContentMain = () => {
  return (
    <section className={styled.content}>
      <Header />
      <OptionsArea />
    </section>
  );
};

export default ContentMain;