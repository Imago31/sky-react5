/* eslint-disable react/jsx-no-constructed-context-values */

import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import LoginPass from './components/LoginPass'
import Order from './components/Order'
import BookDesc from './components/BookDesc'
import UserOrder from './components/UserOrder'
import OrderReady from './components/OrderReady'
import StoreContext from './components/StoreContext'
import './App.css'

function App() {
  const [value, setValue] = useState('login');
  return(
    <StoreContext.Provider value={{ value, setValue }}>
      <Routes>
        <Route path="/" element={<LoginPass />} />
        <Route path="Order" element={<Order />} />
        <Route path="BookDesc" element={<BookDesc />} />
        <Route path="UserOrder" element={<UserOrder />} />
        <Route path="OrderReady" element={<OrderReady />} />
      </Routes>     
   </StoreContext.Provider>
  ) 
}

export default App
