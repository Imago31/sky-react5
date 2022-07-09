/* eslint-disable no-useless-escape */
/* eslint-disable react/button-has-type */

import { Link} from "react-router-dom";
import { useContext } from "react";
import StoreContext from './StoreContext'

function LoginPass() {

  const { setValue }= useContext(StoreContext)

  const  regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  const handlerChange = (e) => {
    e.preventDefault();
    const login = document.querySelector("input[name='login']");
    const pass = document.querySelector("input[name='pass']");
    const loginValue = document.querySelector("input[name='login']").value;
    const passValue = document.querySelector("input[name='pass']").value;
    regEmail.test(loginValue);
    
    if(!regEmail.test(loginValue)){
      const error = document.createElement('p');
      error.textContent = "Введите логин в правильном формате";
      error.classList.add("mesLogin")
      error.style = "color: red";
      login.after(error);
    }
    if(passValue.length < 6){
      const error = document.createElement('p');
      error.textContent = "Пароль должен быть больше 5 символов";
      error.classList.add("mesPass")
      error.style = "color: red";
      pass.after(error);
    }
    if(regEmail.test(loginValue) && passValue.length > 5){
        setValue(loginValue);
        document.querySelector('.orderLink').click();
    }

  }
  const handlerClick = () => {
    document.querySelector(".mesLogin").remove();
  }
  const handlerClick2 = () => {
    document.querySelector(".mesPass").remove();
  }

  return (
    <div className='formWrap'>
      <form className='loginForm' onSubmit={handlerChange}>
        <input onClick={handlerClick} name="login" placeholder="login" />
        <input onClick={handlerClick2} name="pass" placeholder="password"/>
        <button className="button" >Login</button>
      </form>
      <Link className='orderLink' to="/Order">Order</Link>
    </div>
  );
}

export default LoginPass;