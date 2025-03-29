import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

const Register = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        phone: "",
        address: ""
    });

    //use to navigate.
    const navigate = useNavigate();


    //handleSubmit is a function that handles the form submission event.
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    }
    console.log(data);

    //handleSubmit is a function that handles the form submission event.
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:4000/register", data);
            toast.success("Registration Successful", {
                position: "top-right",
                autoClose: 1000,
                onClose: () => {
                    navigate('/login')
                }
            });
        } catch (error) {
            console.log(error);
            toast.error("Registration Failed", {
                position: "top-right",
                autoClose: 1500,
            });
            setData({
                name: "",
                email: "",
                password: "",
                phone: "",
                address: ""
            });
        }

    }
    return (
        <>
            <div className="container d-flex justify-content-center align-items-center vh-100">
                <div className="card col-md-6 shadow">
                    <div className="card-body">
                        <h4 className="text-center">User Registration</h4>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group mb-2">
                                <label className='my-1' htmlFor="username">Username:</label>
                                <input type="text" className="form-control" id="username" required name='name' value={data.name} onChange={handleChange} />
                            </div>
                            <div className="form-group mb-2">
                                <label className='my-1' htmlFor="email">Email:</label>
                                <input type="email" className="form-control" id="email" required name='email' value={data.email} onChange={handleChange} />
                            </div>
                            <div className="form-group mb-2">
                                <label className='my-1' htmlFor="password">Password:</label>
                                <input type="password" className="form-control" id="password" required name='password' value={data.password} onChange={handleChange} />
                            </div>
                            <div className="form-group mb-2">
                                <label className='my-1' htmlFor="phone">Phone:</label>
                                <input type="tel" className="form-control" id="phone" required name='phone' value={data.phone} onChange={handleChange} />
                            </div>
                            <div className="form-group mb-2">
                                <label className='my-1' htmlFor="address">Address:</label>
                                <textarea className="form-control" id="addreess" required name='address' value={data.address} onChange={handleChange} />
                            </div>
                            <div className='d-flex  justify-content-center align-items-center flex-column mt-3'>
                                <button type="submit" className="btn btn-primary btn-block">Register</button>
                                <p className="mt-2">Already have an account? <Link to='/login'>login here</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Register