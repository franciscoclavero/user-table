import { useAppStore } from "hooks/useAppStore";
import { postData, putData } from "hooks/useExternalApi";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setDisplay, setUserData } from "src/redux/reducer/userReducer";
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
  const { userDataSelected } = useAppStore(state => state.userList);
  const dispatch = useDispatch();

  const [ userId, setUserId ] = useState(0);
  const [ nameUser, setNameUser ] = useState('');
  const [ birthdate, setBirthdate ] = useState('');
  const [ country, setCountry ] = useState('');
  const [ city, setCity ] = useState('');

  useEffect(() => {
    setUserId(userDataSelected.id);
    setNameUser(userDataSelected.name);
    setBirthdate(userDataSelected.birthdate);
    setCountry(userDataSelected.country);
    setCity(userDataSelected.city);
  }, [userDataSelected]);

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    responseBody.name = nameUser;
    responseBody.birthdate = birthdate;
    responseBody.country = country;
    responseBody.city = city;
    
    if (userId > 0) return putData(userId.toString(), responseBody);

    postData(responseBody);
  }
  const inputChangeHandler = (setFunction: React.Dispatch<React.SetStateAction<string>>, event: React.ChangeEvent<HTMLInputElement>) => {
    setFunction(event.target.value);
  }
  const handleClickCloseModal = () => {
    dispatch( setDisplay('none') );
    // dispatch( setUserData({id:0,name:'', birthdate:'', country:'', city:''}));
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
            type="datetime-local" 
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
          <input className={styled.buttonCreate} type="submit" value="Enviar" />
        </div>
      </form>
          <button className={styled.buttonCreate} style={{
              backgroundColor: '#F7F8FA',
              boxShadow: '0px 0px 0px 1px rgba(136, 143, 170, 0.1), 0px 30px 70px rgba(26, 34, 64, 0.15), 0px 10px 30px rgba(0, 0, 0, 0.2)',
              color: '#000'
          }} onClick={handleClickCloseModal}> Fechar </button>
    </div>
  );
};

export default ModalUser;