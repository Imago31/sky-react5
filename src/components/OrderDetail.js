/* eslint-disable react/button-has-type */


/* eslint-disable no-unused-vars */
/* eslint-disable react/self-closing-comp */



export default function OrderDetail(props) {
  return (
    <div className="order-detail">
        <h4 className="product-name">{props.productName}</h4>
        <p className="productName">Price: {props.price} /-</p>
        <p className="productName">Quantity: {props.quantity}</p>
        <button onClick={props.handlePlus} className="add-button">+</button>

    </div>
  )
}