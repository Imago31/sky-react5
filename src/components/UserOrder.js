/* eslint-disable eqeqeq */
/* eslint-disable no-restricted-syntax */
/* eslint-disable react/button-has-type */
import { useLocation, Link } from 'react-router-dom'
import { useContext, useState } from "react";
import StoreContext from './StoreContext'



export default function BookDesc() {

  const [getphone, setGetphone] = useState('phone');
  const [getname, setGetname] = useState('name');

const location = useLocation()
const { product } = location.state
const {value}= useContext(StoreContext)

 const inputs = document.querySelectorAll('input');

const handlerChange = (e) => {
  e.preventDefault();
  const phoneVal = document.querySelector("input[name='phone']").value;
  const nameVal = document.querySelector("input[name='name']").value;
  setGetphone(phoneVal);
  setGetname(nameVal);

  if(phoneVal == ""){
        document.querySelector("input[name='phone']").style ="border: 2px solid red"
  }
  if(nameVal == ""){
      document.querySelector("input[name='name']").style ="border: 2px solid red"
  }
  
  if(phoneVal != "" && nameVal != ""){
    setTimeout(()=>{
       document.querySelector('.orderReady').click()
   },200)
  }
}

  for(const inp of inputs){
    inp.addEventListener('click',()=>{
      inp.style ="border: 2px solid green"
    })
  }

const goBack = (e) => {
  e.preventDefault();
  document.querySelector(".backOrder").click()
}

    return (
        <div className='formWrap'>
        <form className='loginForm orderForm'>
          <input name="email" placeholder="Email" value={value} />
          <input name="phone" placeholder="Phone"/>
          <input name="name" placeholder="Full name"/>
          <button onClick={handlerChange} className="button orderButton" >Создать заказ</button>
          <Link className='orderReady' to="/OrderReady" state = {{email: value, phone: getphone, name: getname, prod: product }}>Aad to cart</Link>
          <Link className='backOrder' to="/Order">Aad to cart</Link>
          <button onClick={goBack} className="button backButton" >Вернуться в корзину</button>
        </form>
      </div>
    )
  }