/* eslint-disable dot-notation */
/* eslint-disable eqeqeq */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable no-console */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/no-unused-class-component-methods */
/* eslint-disable react/no-unused-state */

import React from 'react'
// import OrderDetail from './OrderDetail'

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
    this.handlePlus = (e) => {
      console.log(e.target.id);
      const getPrice = this.state.details.find((item) => item.id == e.target.id)
      getPrice["quantity"] += 1
      this.setState({quantity: this.state.quantity + 1, 
                     amount: this.state.amount + getPrice.price
      })
    }

    this.handleMinus = (e) => {
      console.log(e.target.id);
      const getPrice = this.state.details.find((item) => item.id == e.target.id)
      console.log(getPrice.quantity);
        if(getPrice.quantity != 0){
        this.setState({quantity: this.state.quantity - 1, 
                      amount: this.state.amount - getPrice.price
        })
        getPrice["quantity"] -= 1
      }
    }

  }



  IncrementQuantityWithPrice(index) {

  }

  DecrementQuantityWithPrice(index) {

  }

  render() {

    return (
    
      <div className="order">
      {this.state.details.map((item) =>
          // <OrderDetail
          //   productName={item.productName}
          //   price={item.price}
          //   quantity={item.quantity}
          // />
          <div className="order-detail">
            <p className="shopItem-title">{item.productName}</p>
            <p className="productName">Price: {item.price} /-</p>
            <p className="productName">Quantity: {item.quantity}</p>
            <button id={item.id} onClick={this.handlePlus} className="addButton">+</button>
            <button id={item.id} onClick={this.handleMinus} className="removeButton">-</button>
          </div>
      )};
        <div className="clear" />
        <p className="total">
          Total Quantity: <b> {this.state.quantity} </b>
        </p>
        <p className="total">
          Total Price: <b> {this.state.amount}  /- </b>
        </p>
      </div>
     
      
    )
  }
}



