
/* eslint-disable dot-notation */
/* eslint-disable eqeqeq */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable no-console */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/no-unused-class-component-methods */
/* eslint-disable react/no-unused-state */

import React from 'react'
import {Link} from "react-router-dom";

export default class Order extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      amount: 0,
      quantity: 0,
      details: [
        {
          id: 1,
          productName: 'Война и мир - Л.Н.Толстой',
          price: 800,
          quantity: 0,
        },
        {
          id: 2,
          productName: 'Две жизни - К.Е.Антарова',
          price: 700,
          quantity: 0,
        },
        {
          id: 3,
          productName: 'Разговор с богом - Н.Д.Уолша',
          price: 1000,
          quantity: 0,
        },
        {
          id: 4,
          productName: 'Хохот Шамана - В.П.Серкин',
          price: 600,
          quantity: 0,
        },
        {
          id: 5,
          productName: 'Хроники Ехо - Макс Фрай',
          price: 400,
          quantity: 0,
        },
      ],
    }


    this.handleBook = (e) => {
      console.log(e.target.id);
      document.querySelector('.orderLink2').click();
    }

  }

  render() {

    return (
    
      <div className="order">
      {this.state.details.map((item) =>
          <div className="order-detail">
            <p className="shopItem-title">{item.productName}</p>
            <p className="productName">Price: {item.price} /-</p>
            <p>
            <Link
               to='/BookDesc'
               state = {{
                product: item.productName,
                price: item.price
              }}
               >Read more
            </Link>
            </p>
            <hr />
            <Link className='orderLink2' to="/UserOrder" state = {{product: item.productName}}>Aad to cart</Link>
          </div>
          
      )}
        <div className="clear" />
      </div>
     
      
    )
  }
}



