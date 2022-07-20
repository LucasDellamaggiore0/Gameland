import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { CREATE_USER } from '../../redux/actions'
import validate from './validate'

export default function NewUser() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {newUserResponse} = useSelector(state => state.reducer)
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
    useEffect(()=>{
        if(newUserResponse.ok){
            navigate('/login')
        }else{
            setErrors({
                ...errors,
                errorUser : newUserResponse.msg
            })
        }
    }, [newUserResponse, errors, navigate])
    return (
        <form onSubmit={handleSubmit}>
            {errors.errorUser && <p>{errors.errorUser}</p>}
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" id="name" name="name" value={formValues.name} onChange={handleChange}  autoComplete="off"/>
                {errors.name && <small>{errors.name}</small>}
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" id="email" name="email" value={formValues.email} onChange={handleChange}  autoComplete="off"/>
                {errors.email && <small>{errors.email}</small>}
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password" name="password" value={formValues.password} onChange={handleChange} />
                {errors.password && <small>{errors.password}</small>}
            </div>
            <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type="password" className="form-control" id="confirmPassword" name="confirmPassword" value={formValues.confirmPassword} onChange={handleChange} />
                {errors.confirmPassword && <small>{errors.confirmPassword}</small>}
            </div>
            <button type='submit'>Create Account</button>
        </form>
    )
}
