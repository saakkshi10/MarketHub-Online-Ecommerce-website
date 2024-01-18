import React, { useEffect, useState } from 'react'
import Signup from './Components/Signup'
import Signin from './Components/Signin'
import Home from './Components/Home'
import Nevbar from './Components/Nevbar'
import { Route, Routes } from 'react-router-dom'
import Cart from './Components/Cart'
import ProductCard from './MyCart'

const App = () => {
  const [getLoggedInEmail, setgetLoggedInEmail] = useState()
  const [gmail, setgmail] = useState("")
  const [totalAddcart, settotalAddcart] = useState(0)
  const [testing, settesting] = useState(0)

  useEffect(() => {
    let getLoggedInData = JSON.parse(localStorage.getItem('LoggedInuser'))
    setgetLoggedInEmail(getLoggedInData)
    console.log(getLoggedInData, "getLoggedInData");

  }, [gmail])


  console.log(getLoggedInEmail?.email);
  return (
    <div>
      {
        getLoggedInEmail?.email && <Nevbar setgmail={setgmail} testing={testing} />
      }


      <Routes>
        <Route path='/Signup' element={<Signup />} />
        <Route path='/' element={<Signin setgmail={setgmail} />} />
        <Route path='/Home' element={<Home settesting={settesting} testing={testing} />} />
        <Route path='/Cart' element={<Cart />} />
      </Routes>
      {/* <ProductCard /> */}
    </div>
  )
}

export default App
