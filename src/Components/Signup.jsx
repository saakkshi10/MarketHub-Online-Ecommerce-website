import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const Signup = () => {
    const [allData, setAllData] = useState([])

    const [users, setUsers] = useState([]);
    const [getallItemsData, setgetallItemsData] = useState([])
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const getItem = JSON.parse(localStorage.getItem('user')) || []
        console.log(getItem);

        let findemaildata = getItem.find((e) => e.email == formData.email)
        console.log("myemail", findemaildata);
        if (findemaildata) {
            Swal.fire({
                title: 'Registration Failed',
                text: 'Unable to create your account. Please use valid email.',
                icon: 'error',
                confirmButtonText: 'OK',
            });
        } else {
            const localData = getItem.concat(formData)
            setAllData(localData)
            localStorage.setItem('user', JSON.stringify(localData));

            Swal.fire({
                title: 'Account Created!',
                text: 'Your account has been successfully created.',
                icon: 'success',
                confirmButtonText: 'Continue',
            });

            navigate("/")
        }
    }

    return (
        <div className="d-flex justify-content-center mt-5 ">
            <div className="signup-form w-50 p-5  form-control">
                <h2 className="text-center">Signup</h2>
                <form onSubmit={handleFormSubmit} className=" p-3" >
                    <div className="form-group">
                        <label>Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="form-control"
                        />
                    </div>
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
                    <button className="form-control mt-3 btn btn-success" type="submit">Signup</button>
                    <center className="mt-3"><Link to="/"> already have an Account</Link></center>
                </form>
            </div>
        </div>
    );
};

export default Signup
