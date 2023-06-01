import React, { useContext } from 'react';
import './Login.css'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContex } from '../Providers/AuthProviders';

const Login = () => {
    const {crateLogin} = useContext(AuthContex);
    const navegate = useNavigate();

    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        form.reset();
        navegate('/orders')
        console.log(email,password)

        crateLogin(email,password)
        .then(regult =>{
            const loggedUser = regult.user;
            console.log(loggedUser)
        })
        .catch(error =>{
            console.log(error)
        })
    }
    return (
        <div className='from-container'>
            <h1 className='from-title'>Login</h1>
            <form onSubmit={handleLogin} >
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" required />
                </div>
                <input className='submite-btn' type="submit" value="Login" />
            </form>
            <div>
                <p>New to Ema-john?<Link to='/singup'><span className='text-color'>Create New Account</span></Link></p>
            </div>
        </div>
    );
};

export default Login;