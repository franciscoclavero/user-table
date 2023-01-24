import { postData } from "hooks/useExternalApi";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setDisplay } from "src/redux/reducer/userReducer";
import styled from "./style.module.css";


interface FormDataType {
  name: string, 
  birthdate: string, 
  country: string,
  city: string,
}

const responseBody: FormDataType = {
  name: '', 
  birthdate: '', 
  country: '',
  city: '',
}

interface InterfaceModalUser {
  display: string;
}

const ModalUser = ( { display }: InterfaceModalUser) => {
  const dispatch = useDispatch();

  const [ nameUser, setNameUser ] = useState('');
  const [ birthdate, setBirthdate ] = useState('');
  const [ country, setCountry ] = useState('');
  const [ city, setCity ] = useState('');

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    responseBody.name = nameUser;
    responseBody.birthdate = birthdate;
    responseBody.country = country;
    responseBody.city = city;
    
    postData(responseBody);
  }
  const inputChangeHandler = (setFunction: React.Dispatch<React.SetStateAction<string>>, event: React.ChangeEvent<HTMLInputElement>) => {
    setFunction(event.target.value);
  }
  const handleClickCloseModal = () => {
    dispatch( setDisplay('none') );
  };

  return (
    <div className={styled.modalBody} style={{display: display}}>
      <div className={styled.modalTitle}>
        <h1>Dados do Usuário</h1>
      </div>
      <form onSubmit={onSubmitHandler}>
        <div className={styled.bodyInput}>
          <input 
            className={styled.input} 
            type="text" 
            name="nameUser"
            placeholder="Nome do usuário" 
            value={nameUser} 
            onChange={ (e) => { inputChangeHandler(setNameUser, e); } }/>
        </div>
        <div className={styled.bodyInput}>
          <input 
            className={styled.input} 
            type="date" 
            name="birthdate" 
            placeholder="Data de Nascimento"
            value={birthdate} 
            onChange={ (e) => { inputChangeHandler(setBirthdate, e); } }/>
        </div>
        <div className={styled.bodyInput}>
          <input 
            className={styled.input} 
            type="text" 
            name="coutry" 
            placeholder="País"
            value={country} 
            onChange={ (e) => { inputChangeHandler(setCountry, e); }
        }/>
        </div>
        <div className={styled.bodyInput}>
          <input 
            className={styled.input} 
            type="text" 
            name="city" 
            placeholder="Cidade"
            value={city} 
            onChange={ (e) => { inputChangeHandler(setCity, e); } }/>
        </div>
        <div className={styled.buttonArea}>
          <button className={styled.buttonCreate} style={{
              backgroundColor: '#F7F8FA',
              boxShadow: '0px 0px 0px 1px rgba(136, 143, 170, 0.1), 0px 30px 70px rgba(26, 34, 64, 0.15), 0px 10px 30px rgba(0, 0, 0, 0.2)',
              color: '#000'
          }} onClick={handleClickCloseModal}> Fechar </button>
          <input className={styled.buttonCreate} type="submit" value="Enviar" />
        </div>
      </form>
    </div>
  );
};

export default ModalUser;