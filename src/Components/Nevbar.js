import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { FaPowerOff } from 'react-icons/fa'
import { BsFillCartPlusFill } from 'react-icons/bs'


const Nevbar = ({ totalAddcart, setgmail, testing }) => {
    const [getCardData, setgetCardData] = useState()
    const navigate = useNavigate()
    useEffect(() => {
        let getCardData = JSON.parse(localStorage.getItem("add-cart")) || []
        setgetCardData(getCardData)
    }, [testing])

    const handleLoggout = () => {
        let getUserData = JSON.parse(localStorage.getItem("LoggedInuser"))
        getUserData = {}
        localStorage.setItem("LoggedInuser", JSON.stringify(getUserData))
        setgmail("")
        navigate("/")
    }
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <NavLink class="nav-link active" aria-current="page" to="/Home">Home</NavLink>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="#">Link</a>
                            </li>
                            <li class="nav-item">
                                <NavLink class="nav-link active" aria-current="page" to="/Cart">Cart</NavLink>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                        <i className=' text-warning  cart' style={{ position: "relative", right: "20px" }} >  <BsFillCartPlusFill className='h4 mt-3' /> <span className='text-warning rounded-5 ' style={{ width: "20px", height: "20px", position: "relative", top: "-12px", right: "18px" }} >{getCardData?.length} </span> </i>

                        <button className='btn btn-danger ' onClick={handleLoggout}><FaPowerOff /></button>


                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nevbar
