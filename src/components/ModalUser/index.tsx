import { useState } from "react";
import styled from "./style.module.css";

const ModalUser = () => {
  const [ nameUser, setNameUser ] = useState('');
  const [ birthdate, setBirthdate ] = useState('');
  const [ country, setCountry ] = useState('');
  const [ city, setCity ] = useState('');

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

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      responseBody.name = nameUser;
      responseBody.birthdate = birthdate;
      responseBody.country = country;
      responseBody.city = city;
      console.log(JSON.stringify(responseBody));

      
  }
  const inputChangeHandler = (setFunction: React.Dispatch<React.SetStateAction<string>>, event: React.    ChangeEvent<HTMLInputElement>) => {
    setFunction(event.target.value);
  }
  return (
    <div className={styled.modalBody}>
      <form onSubmit={onSubmitHandler}>
        <div>
          <label>Nome</label>
          <input type="text" name="nameUser" value={nameUser} onChange={ (e) => { inputChangeHandler(setNameUser, e); } }/>
        </div>
        <div>
          <label>Data de Nascimento</label>
          <input type="datetime-local" name="birthdate" value={birthdate} onChange={ (e) => { inputChangeHandler(setBirthdate, e); } }/>
        </div>
        <div>
          <label>País</label>
          <input type="text" name="coutry" value={country} onChange={ (e) => { inputChangeHandler(setCountry, e); } }/>
        </div>
        <div>
          <label>Cidade</label>
          <input type="text" name="city" value={city} onChange={ (e) => { inputChangeHandler(setCity, e); } }/>
        </div>
        <div>
          <input type="submit" value="Enviar" />
        </div>
      </form>
    </div>
  );
};

export default ModalUser;