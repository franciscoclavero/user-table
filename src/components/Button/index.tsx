import styled from "./style.module.css";

const Button = () => {
  return (
    <div className={styled.buttonAdd}> 
      <img className={styled.imgAdd} src="assets/plus.png" alt="" />
      Cadastrar
    </div>
  );
};

export default Button;