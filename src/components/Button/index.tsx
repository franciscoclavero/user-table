import { useDispatch } from "react-redux";
import { setDisplay, setUserId } from "src/redux/reducer/userReducer";
import styled from "./style.module.css";

const Button = () => {
  const dispatch = useDispatch();

  const handleModalOpen = () => {
    dispatch( setUserId('') );
    dispatch( setDisplay('block') );
  };

  return (
    <div className={styled.buttonAdd} onClick={handleModalOpen}> 
      <img className={styled.imgAdd} src="assets/plus.png" alt="" />
      Cadastrar
    </div>
  );
};

export default Button;