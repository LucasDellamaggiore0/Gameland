import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { LOG_IN } from '../../redux/actions'
import validate from './validate'
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
        if(userResponse.ok){
            navigate('/')
        }else{
            setErrors({
                ...errors,
                errorUser : userResponse.msg
            })
        }
    }, [userResponse, errors, navigate])
    return (
        <form onSubmit={handleSubmit}>
            {errors.errorUser && <p>{errors.errorUser}</p>}
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" id="email" name="email" value={form.email} onChange={handleChange}  autoComplete="off"/>
                {errors.email && <small>{errors.email}</small>}
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password" name="password" value={form.password} onChange={handleChange} />
                {errors.password && <small>{errors.password}</small>}
            </div>
            <button type="submit">Submit</button>
            <Link to='/createAccount'>
                <p>¿No tienes cuenta? Regístrate</p>
            </Link>
        </form>
    )
}

