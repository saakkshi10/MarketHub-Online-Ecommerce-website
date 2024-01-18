import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const Signin = (props) => {
    const [getDataArray, setgetDataArray] = useState([])

    const navigate = useNavigate()
    useEffect(() => {
        const getItem = JSON.parse(localStorage.getItem('user')) || []
        console.log(getItem);
        setgetDataArray(getItem)
    }, [])

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    // props.setgmail(formData.email)

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Save data to local storage
        let myfindData = getDataArray.find((e) => formData.email === e.email && formData.password == e.password
        )
        if (formData.email === myfindData?.email && formData.password == myfindData.password) {
            let abc = localStorage.setItem("LoggedInuser", JSON.stringify(formData));
            props.setgmail(formData.email)
            // alert("logged in")
            Swal.fire({
                title: 'Welcome!',
                text: `Welcome back, ${myfindData.name}!`,
                icon: 'success',
                confirmButtonText: 'Continue',
            });
            navigate("/Home")
            // console.log("User data saved to local storage:", abc);

        } else {
            Swal.fire({
                title: 'Login Failed',
                text: 'Invalid username or password. Please try again.',
                icon: 'error',
                confirmButtonText: 'OK',
            });
        }
    };



    return (
        <div className="d-flex justify-content-center mt-5 ">
            <div className="signup-form w-50 p-5  form-control">
                <h2 className="text-center">Sign-in</h2>
                <form onSubmit={handleFormSubmit} className=" p-3" >

                    <div className="form-group">
                        <label>Email:</label>
                        <input
                            className="form-control"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <input
                            className="form-control"
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <button className="form-control mt-3 btn btn-success" type="submit">Signin</button>
                    <center className="mt-5"><Link to="/Signup">Create a new Account</Link></center>
                </form>

            </div>
        </div>
    );
};

export default Signin;
