
import { Link, useLocation } from 'react-router-dom'

export default function BookDesc() {

const location = useLocation()
const { product, price } = location.state

    return (
      <div>
        <div className="order-detail order-more">
          <p className="shopItem-title">{product}</p>
          <p className="productName">Цена - {price}</p>  
        </div>
        <p><Link className='backToOrder' to="/Order">Назад</Link></p>  
      </div>
    )
  }