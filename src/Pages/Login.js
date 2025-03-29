import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <>
            <div className="container d-flex justify-content-center align-items-center vh-100">
                <div className="card col-md-6 shadow">
                    <div className="card-body">
                        <h2 className="text-center">USER LOGIN</h2>
                        <form>
                            <div className="form-group">
                                <label htmlFor="email">Email:</label>
                                <input type="email" name="email" className="form-control" id="email" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password:</label>
                                <input type="password" name="password" className="form-control" id="password" required />
                            </div>
                            <button type="submit" className="btn btn-primary btn-block">Login</button>
                            <p className="my-4">Don`t have an account? <Link to='/register'>register here</Link></p>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Login