
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
import axios from 'axios';

export default class Order extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      details: []
    }

    this.handleBook = (e) => {
      console.log(e.target.id);
      document.querySelector('.orderLink2').click();
    }

  }

  componentDidMount() {
    axios.get(`https://api.jsonbin.io/v3/b/62c9eb834bccf21c2ed853ef`)
    .then(res => {
      const details = res.data.record;
      this.setState({ details });
      console.log(details)
    })
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



