import styled from "./style.module.css";

interface InterfaceLoader {
  loading: string;
};

const Loader = ({ loading }: InterfaceLoader ) => {
  return (
    <div className={styled.loaderBody} style={{display: loading}}>
      <div className={styled.contentLoader}>
        <div className={styled.loader}></div>
        Carregando.
      </div>
    </div>
  );
};

export default Loader;