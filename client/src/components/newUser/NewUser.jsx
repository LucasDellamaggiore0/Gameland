import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { CREATE_USER, CLEAN_NEW_USER } from '../../redux/actions'
import validate from './validate'
import {toast} from 'react-toastify'
import '../../scss/_signin.scss'

export default function NewUser() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { newUser } = useSelector(state => state.reducer)
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    const [errors, setErrors] = useState('')
    const handleChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
        let err = validate({
            ...formValues,
            [e.target.name]: e.target.value
        })
        setErrors(err)
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        if (Object.keys(errors).length === 0) {
            dispatch(CREATE_USER(formValues))
        }
        setFormValues({
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        })
    }
    useEffect(() => {
        if(newUser.ok){
            toast.success('User created successfully')
            dispatch(CLEAN_NEW_USER())
            navigate('/login')
        }
        else{
            toast.error(newUser.msg)
        }
    }, [newUser, navigate]) // eslint-disable-line react-hooks/exhaustive-deps
    
    console.log(newUser)
    
    return (
        <div className="signin">
            <form className='form-signin__container' onSubmit={handleSubmit}>
                <div className='signin-title'>
                    <h1>Create your account</h1>
                </div>
                <div className='form-group__container'>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" id="name" name="name" value={formValues.name} onChange={handleChange} autoComplete="off" />
                        {errors.name && <smal className="form-msg">{errors.name}</smal>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" id="email" name="email" value={formValues.email} onChange={handleChange} autoComplete="off" />
                        {errors.email && <sma className="form-msg">{errors.email}</sma>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" id="password" name="password" value={formValues.password} onChange={handleChange} />
                        {errors.password && <smal className="form-msg">{errors.password}</smal>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input type="password" className="form-control" id="confirmPassword" name="confirmPassword" value={formValues.confirmPassword} onChange={handleChange} />
                        {errors.confirmPassword && <small className="form-msg">{errors.confirmPassword}</small>}
                    </div>
                </div>
                <button className='signin-btn' type='submit'>Create Account</button>
            </form>
        </div>
    )
}
