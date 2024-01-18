// import React, { useEffect, useState } from 'react';
// import { Products } from './ArrayJson';
// import { BiSolidCartAdd } from 'react-icons/bi';

// const Home = () => {
//     const [cartData, setCartData] = useState([]);
//     const [loggedInEmail, setLoggedInEmail] = useState("");
//     const [searchedData, setSearchedData] = useState("");
//     const [filteredData, setFilteredData] = useState([]);
//     const [test, setTest] = useState(false);

//     useEffect(() => {
//         let getLoggedInData = JSON.parse(localStorage.getItem('LoggedInuser'));
//         let getLoggedInEmail = getLoggedInData?.email || "";
//         setLoggedInEmail(getLoggedInEmail);

//         setCartData(Products);
//     }, []);

//     const AddToCart = (product) => {
//         if (!loggedInEmail) {
//             alert("Please log in first.");
//             return;
//         }

//         let updatedCartData = cartData.map((item) => {
//             if (item.id === product.id) {
//                 item.quantity = (item.quantity || 0) + 1;
//             }
//             return item;
//         });

//         setCartData(updatedCartData);
//         localStorage.setItem('add-cart', JSON.stringify(updatedCartData));
//     };

//     const removeFromCart = (product) => {
//         let updatedCartData = cartData.map((item) => {
//             if (item.id === product.id && item.quantity > 0) {
//                 item.quantity = item.quantity - 1;
//             }
//             return item;
//         });

//         setCartData(updatedCartData);
//         localStorage.setItem('add-cart', JSON.stringify(updatedCartData));
//     };

//     const searchData = (e) => {
//         setSearchedData(e.target.value);
//     };

//     const searchClick = (e) => {
//         e.preventDefault();
//         setTest(true);
//         let dataAfterSearch = cartData.filter((element) =>
//             element.name.toLowerCase().includes(searchedData.toLowerCase())
//         );
//         setFilteredData(dataAfterSearch);
//     };

//     const handleSort = (e) => {
//         let checkedData = e.target.checked;
//         if (checkedData) {
//             let checkFilteredData = cartData.filter((e) => e.price < 500);
//             setCartData(checkFilteredData);
//         } else {
//             setCartData(Products);
//         }
//     };

//     const showAscending = () => {
//         const sortedProducts = cartData.sort((a, b) => a.price - b.price);
//         let checkFilteredData = sortedProducts.filter((e) => e.price <= Math.max(e.price));
//         setCartData(checkFilteredData);
//     };

//     const showDescending = () => {
//         const sortedProducts = cartData.sort((a, b) => b.price - a.price);
//         let checkFilteredData = sortedProducts.filter((e) => e.price <= Math.max(e.price));
//         setCartData(checkFilteredData);
//     };

//     return (
//         <>
//             <center>
//                 <form className="d-flex w-50 my-3" role="search">
//                     <input
//                         className="form-control me-2"
//                         type="search"
//                         placeholder="Search"
//                         onChange={searchData}
//                         aria-label="Search"
//                     />
//                     <button className="btn btn-outline-secondary" type="submit" onClick={searchClick}>
//                         Search
//                     </button>
//                 </form>
//             </center>

//             <div className="my-3 d-flex justify-content-center justify-content-around ">
//                 <span className="bg-dark p-2 rounded-1 text-primary">
//                     <input type="checkbox" onChange={handleSort} id="checkData" />
//                     <label htmlFor="checkData" className="text-light">
//                         &lt; 500
//                     </label>
//                 </span>
//                 <button className="btn btn-dark" onClick={showAscending}>
//                     Ascending order
//                 </button>
//                 <button className="btn btn-dark" onClick={showDescending}>
//                     Descending order
//                 </button>
//             </div>
//             <br />
//             <br />
//             <br />

//             <div className="d-flex flex-wrap justify-content-evenly">
//                 {(test ? filteredData : cartData).map((e, i) => (
//                     <div key={i} className="w-25 m-2 container bg-info" style={{ borderRadius: "20px", border: "2px solid gray" }}>
//                         <div>
//                             <h5> Product : {e.name}</h5>
//                             <h5>Price : {e.price}</h5>
//                             <h5>Model : {e.model}</h5>
//                             <div>
//                                 <button onClick={() => AddToCart(e)}>Add to Cart</button>
//                                 <span>{e.quantity || 0}</span>
//                                 <button onClick={() => removeFromCart(e)}>Remove from Cart</button>
//                             </div>
//                             <button className="btn btn-sm btn-danger" onClick={() => AddToCart(e)}>
//                                 <BiSolidCartAdd />
//                             </button>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </>
//     );
// };

// export default Home;
