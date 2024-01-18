import React, { useEffect, useState } from 'react'
import { FaBeer } from 'react-icons/fa'
import Swal from 'sweetalert2'

const Cart = () => {
    const [getCartData, setgetCartData] = useState([])
    const [loggedEmail, setlogggedEmail] = useState("")
    const [countAddCart, setcountAddCart] = useState()
    const [count, setcount] = useState()
    const [cartData, setcartData] = useState([])

    const deleteData = (i) => {
        let localData = [...getCartData]
        localData.splice(i, 1)
        setgetCartData(localData)
        localStorage.setItem("add-cart", JSON.stringify(localData))
    }

    const deleteCart = (e, i) => {
        if (e.email === loggedEmail) {

            Swal.fire({
                title: 'Delete Product',
                text: 'Are you sure you want to delete this product?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, delete it!',
                cancelButtonText: 'No, cancel',
            }).then((result) => {
                if (result.isConfirmed) {
                    // Assuming onDelete is a function that deletes the product
                    deleteData(i);

                    // Show a success SweetAlert after successful deletion
                    Swal.fire({
                        title: 'Product Deleted',
                        text: 'The product has been successfully deleted.',
                        icon: 'success',
                        confirmButtonText: 'OK',
                    });
                } else {
                    // Show a SweetAlert indicating cancellation of the deletion
                    Swal.fire({
                        title: 'Deletion Canceled',
                        text: 'The product was not deleted.',
                        icon: 'info',
                        confirmButtonText: 'OK',
                    });
                }




            });

        }
    }

    const getCartItems = () => {
        let getData = JSON.parse(localStorage.getItem("add-cart")) || []
        let getLoggedData = JSON.parse(localStorage.getItem("LoggedInuser"))

        let getlogedEmail = getLoggedData.email

        setlogggedEmail(getlogedEmail)
        let getFiterData = getData.filter((e, i) => e.email === getlogedEmail)
        setgetCartData(getFiterData)
    }

    useEffect(() => {
        getCartItems()
    }, [])



    const increaseItemQuantity = (cartItem) => {
        cartItem.quantity++;

        let cartItems = JSON?.parse(localStorage?.getItem("add-cart")) || []
        console.log("cartItem.id", cartItem.id);
        let index = cartItems.findIndex(e => e.id === cartItem.id);

        cartItems[index] = cartItem

        localStorage.setItem('add-cart', JSON.stringify(cartItems))

        getCartItems()
    }

    const decreaseItemQuantity = (cartItem) => {
        if (cartItem.quantity === 1) {
            return;
        }
        cartItem.quantity--;

        let cartItems = JSON?.parse(localStorage?.getItem("add-cart")) || []
        let index = cartItems.findIndex(e => e.id === cartItem.id);

        cartItems[index] = cartItem

        localStorage.setItem('add-cart', JSON.stringify(cartItems))

        getCartItems()
    }

    if (getCartData.length === 0) {
        return <h3 className='text-center'>Seems no Item added to cart.</h3>
    }

    return (
        <div className='d-flex flex-wrap justify-content-evenly'>
            {getCartData?.map((e, i) => {

                return (
                    <>
                        <div className='w-25 m-2 container bg-info' style={{ borderRadius: "20px", border: "2px solid gray" }} >
                            <div className=''>
                                <h5> Product :  {e.product?.name}</h5>
                                <h5>Price :  {e.product?.price}</h5>
                                <h5>Model :  {e.product?.model}</h5>
                                <div>
                                    <button onClick={() => increaseItemQuantity(e)}>+</button>
                                    <span>{e.quantity || 0}</span>
                                    <button onClick={() => decreaseItemQuantity(e)}>-</button>
                                </div>
                                <button className='btn btn-sm btn-danger' onClick={() => deleteCart(e, i)}><FaBeer /></button>
                            </div >
                        </div >
                    </>
                )
            })}

        </div>
    )
}

export default Cart
