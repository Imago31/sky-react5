
import { useLocation } from 'react-router-dom'

export default function OrderReady() {

const location = useLocation()
const {email,phone,name,prod } = location.state

    return (
      <div className="order-detail order-more">
        <h3>{prod}</h3>
        <p> Почта <span className='orderredyColor'>{email}</span></p>
        <p> Телефон <span className='orderredyColor'>{phone}</span></p>
        <p>Имя <span className='orderredyColor'>{name}</span></p>
      </div>
    )
  }