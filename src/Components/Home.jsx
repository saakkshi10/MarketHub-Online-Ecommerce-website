import React, { useEffect, useState } from 'react'
import { Products } from './ArrayJson'
import { BiSolidCartAdd } from 'react-icons/bi'
import Swal from 'sweetalert2';

const Home = ({ settotalAddcart, settesting, testing }) => {
    const [cartData, setcartData] = useState([])
    const [loggedInEmail, setLoggedInEmail] = useState("")
    const [searchedData, setSearchedData] = useState("")
    const [filteredData, setfilteredData] = useState([])
    const [test, settest] = useState(false)
    const [getaddCard, setgetaddCard] = useState([])

    useEffect(() => {
        let getLoggedInData = JSON.parse(localStorage.getItem('LoggedInuser'))
        let getLoggedInEmail = getLoggedInData.email
        setLoggedInEmail(getLoggedInEmail)
        setcartData(Products)

        let getHomeData = JSON.parse(localStorage.getItem("add-cart")) || []
        setgetaddCard(getHomeData)
    }, [])

    const AddToCart = (product, i) => {
        let getHomeData = JSON.parse(localStorage.getItem("add-cart")) || []
        let cartProduct = {
            id: Math.random(),
            email: loggedInEmail,
            product,
            quantity: 1
        }
        let index = getHomeData.some((e) => e.product.id === product.id)

        if (loggedInEmail) {
            if (!index) {
                let Localcart = getHomeData.concat(cartProduct)
                localStorage.setItem('add-cart', JSON.stringify(Localcart))
                settesting(testing + 1)
            } else {
                // Swal.fire('this product already added');
                Swal.fire({
                    title: 'Product Already Added',
                    text: 'This product has already been added to your cart',
                    icon: 'info',
                    confirmButtonText: 'OK',
                });
                // alert("this product already added")
            }
        }
        else {
            alert("login first")
        }

    }

    const searchData = (e) => {
        setSearchedData(e.target.value)
    }

    const searchClick = (e) => {
        e.preventDefault()
        settest(true)
        let DataAfterSearch = cartData.filter((element) => {
            return (
                element.name.toLowerCase().includes(searchedData.toLocaleLowerCase())

            )
        })
        setfilteredData(DataAfterSearch)
    }

    const handlesort = (e) => {
        console.log("aaaaaaaaa", e.target.checked)
        let chackedData = e.target.checked
        if (chackedData == true) {
            cartData.sort((a, b) => a.price - b.price);
            let checkFilteredData = cartData.filter((e) => {

                return e.price < 500
            }
            )

            setcartData(checkFilteredData)
        }
        else {
            setcartData(Products)
        }
    }

    const Showascending = () => {
        const sortedProducts = cartData.sort((a, b) => a.price - b.price);

        let checkFilteredData = sortedProducts.filter((e) => {
            const maxPrice = Math.max(e.price);
            return e.price <= maxPrice
        }
        )
        setcartData(checkFilteredData)
    }

    const ShowaDescending = () => {
        const sortedProducts = cartData.sort((a, b) => b.price - a.price);
        let checkFilteredData = sortedProducts.filter((e) => {
            const maxPrice = Math.max(e.price);

            return e.price <= maxPrice
        }
        )
        setcartData(checkFilteredData)
    }



    return (
        <>
            <center>
                <form className="d-flex w-50 my-3" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" onChange={searchData} aria-label="Search" />
                    <button class="btn btn-outline-secondary" type="submit" onClick={searchClick}>Search</button>
                </form>
            </center>

            <div className='my-3 d-flex justify-content-center justify-content-around '>
                <span className="bg-dark p-2 rounded-1  text-primary">
                    <input type="checkbox" onChange={handlesort} id="chackData" />
                    <label for="chackData" className='text-light ' > &lt; 500</label>
                </span>
                <button className='btn btn-dark' onClick={Showascending}>Ascending order</button>
                <button className='btn btn-dark' onClick={ShowaDescending}>Descending order</button>
            </div>
            <br /><br /><br />

            <div className='d-flex flex-wrap justify-content-evenly'>


                {
                    (test ? filteredData : cartData).map((e, i) =>

                        <>


                            <div className='w-25 m-2 container bg-info' style={{ borderRadius: "20px", border: "2px solid gray" }} >
                                <div className=''>
                                    <h5> Product :  {e.name}</h5>
                                    <h5>Price :  {e.price}</h5>
                                    <h5>Model :  {e.model}</h5>

                                    <button className='btn btn-sm btn-danger' onClick={() => AddToCart(e, i)}><BiSolidCartAdd /></button>


                                </div >
                            </div >

                        </>


                    )
                }

            </div >
        </>

    )
}

export default Home
