import { useAppStore } from "../../../hooks/useAppStore";
import { postData, putData } from "../../../hooks/useExternalApi";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setLoading } from "../../redux/reducer/loaderReduce";
import { setDisplay, setUserData, setUserList } from "../../redux/reducer/userReducer";
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
  const { userList } = useAppStore(state => state.userList);
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
    dispatch(setLoading('block'));

    event.preventDefault();
    responseBody.name = nameUser;
    responseBody.birthdate = birthdate;
    responseBody.country = country;
    responseBody.city = city;
    const list = [...userList];
    
    if (userId > 0) {
      putData(userId.toString(), responseBody); 
      const index = list.map(function (item) { return item.id; }).indexOf(userId);
      console.log(index);
      
      list[index] = {
        id: userId,
        name: nameUser,
        birthdate: birthdate,
        country: country,
        city: city
      }
      dispatch( setUserList(list) );
      dispatch(setLoading('none'));
      return;
    };

    postData(responseBody);
    const [lastItem] = userList.slice(-1);
    list.push({...responseBody, id: (Number(lastItem.id) + 1)});

    dispatch( setUserList(list) );
    dispatch(setLoading('none'));
  }
  const inputChangeHandler = (setFunction: React.Dispatch<React.SetStateAction<string>>, event: React.ChangeEvent<HTMLInputElement>) => {
    setFunction(event.target.value);
  }
  const handleClickCloseModal = () => {
    dispatch( setUserData({id: 0, name: '', birthdate: '', country: '', city: ''}) )
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
            name="country" 
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
          <button className={styled.buttonCancel} onClick={handleClickCloseModal}> Fechar </button>
    </div>
  );
};

export default ModalUser;