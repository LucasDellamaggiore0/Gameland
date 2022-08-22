import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { LOG_IN } from '../../redux/actions'
import validate from './validate'
import '../../scss/_login.scss'
export default function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [form, setForm] = useState({
        email: '',
        password: ''
    })
    const [errors, setErrors] = useState('')
    const {userResponse} = useSelector(state => state.reducer)
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })

        let err = validate({
            ...form,
            [e.target.name]: e.target.value
        })
        setErrors(err)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (Object.keys(errors).length === 0) {
            dispatch(LOG_IN(form))
        }
        setForm({
            email: '',
            password: ''
        })
    }
    useEffect(()=>{
        if(userResponse.token){
            navigate('/')
        }else{
            setErrors({
                ...errors,
                errorUser : userResponse.msg
            })
        }
    }, [userResponse]) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="login">
            <form className='form--container' onSubmit={handleSubmit}>
                <div className='title-login'>
                    <h1>Sign in to your account</h1>
                </div>
                <div className="form-group">
                    <input type="email" className="form-control" id="email" name="email" value={form.email} onChange={handleChange} placeholder="email"  autoComplete="off"/>
                    {errors.email && <small className='form-msg'>{errors.email}</small>}
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" id="password" name="password" value={form.password} onChange={handleChange} placeholder="password" />
                    {errors.password && <small className='form-msg'>{errors.password}</small>}
                </div>
                <button className='login-btn' type="submit">Log In</button>
                <Link to='/createAccount'>
                    <p className='form-msg-signin'>Don't have an account yet? Sign up</p>
                </Link>
                {errors.errorUser && <p className='form-msg'>{errors.errorUser}</p>}
            </form>
        </div>
    )
}

