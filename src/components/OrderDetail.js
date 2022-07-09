/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */
/* eslint-disable react/self-closing-comp */

export default function OrderDetail(productName,price,quantity,id,handlePlus,handleMinus) {
  return (
          <div className="order-detail">
            <p className="shopItem-title">{productName}</p>
            <p className="productName">Price: {price} /-</p>
            <p className="productName">Quantity: {quantity}</p>
            <button id={id} onClick={handlePlus} className="addButton">+</button>
            <button id={id} onClick={handleMinus} className="removeButton">-</button>
          </div>
  )
}