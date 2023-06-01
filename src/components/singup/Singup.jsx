import React, { useContext, useState } from 'react';
import './Singup.css'
import { Link } from 'react-router-dom';
import { AuthContex } from '../Providers/AuthProviders';

const Singup = () => {
    const [error,setError] = useState('')

    const {crateUser} = useContext(AuthContex)
    // console.log(crateUser)
  

    const handleSingin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.ConfirmPassword.value;
        console.log(email,password,confirmPassword)
        form.reset();
        setError('')
        if(password !== confirmPassword){
         setError('password not maching')
         return;
            
        }
        else if(password.length<6){
            setError('password should be 6 carekter');
            return;
           
        }

        crateUser(email,password)
        .then(regult =>{
            const loggedUser = regult.user
            console.log(loggedUser)
        })
        .catch(error=>{
            console.log(error)
            setError(error.message)
        })
    }
    return (
        <div className='from-container'>
            <h1 className='from-title'>Sing up </h1>
            <form onSubmit={handleSingin} >
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Confirm Password</label>
                    <input type="Confirm Password" name="ConfirmPassword" id="" required />
                </div>
                <input className='submite-btn' type="submit" value="Sing up" />
            </form>
            <div>
                <p className='errror-text'>{error}</p>
            </div>
            
            <div>
                <p>Already have an account? <Link to='/login'><span className='text-color'>Login</span></Link></p>
            </div>
        </div>
    );
};

export default Singup;