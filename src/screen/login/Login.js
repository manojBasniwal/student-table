import React, { useState } from 'react'
import "./login.css"
import { LOGIN_DETAILS } from "../../constant";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState('')
    const navigate = useNavigate('')

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validation('');
        setErrors(errors);
        if (Object.keys(errors).length === 0) {
            localStorage.setItem('LOGIN_DETAILS', JSON.stringify({ name: name, password: password }));
            toast.success("successfully Login")
            navigate("/")
        }
    }

    const validation = () => {
        const errors = {}
        if (name !== LOGIN_DETAILS.name) {
            errors.name = "Please enter your valid name"
        }
        if (password !== LOGIN_DETAILS.password) {
            errors.password = "Please enter your valid password"
        }
        return errors
    }

    const addClass = (event) => {
        event.target.parentElement.classList.add("active")
    }

    const removeClass = (event)=>{
        if(!event.target.value){
            event.target.parentElement.classList.remove("active")
        }
    }

    return (
        <div className="login-section">
            <div className="form">
                <h1 className="login-form-heading">Login Form</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="label" htmlFor="name">Please enter your Name</label>
                        <input className="text" type="text" id='name' name="firstname" autoComplete='off' placeholder="" onChange={(e) => setName(e.target.value)} value={name} onFocus={addClass} onBlur={removeClass} required />
                        {errors.name && <small className="error">{errors.name}</small>}
                    </div>

                    <div className="form-group">
                        <label className="label" htmlFor="password">Please enter your password</label>
                        <input className="text" type="password" id="password" name="lastname" placeholder="" onChange={(e) => setPassword(e.target.value)} value={password} onFocus={addClass} onBlur={removeClass} required />
                        {errors.password && <small className="error">{errors.password}</small>}
                    </div>

                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    )
}

export default Login
