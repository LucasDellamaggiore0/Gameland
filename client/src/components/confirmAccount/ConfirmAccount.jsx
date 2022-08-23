import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../../scss/_confirmAccount.scss'


export default function ConfirmAccount() {
    const navigate = useNavigate()    
    setTimeout(function(){
        navigate('/login')
    }, 5000)
    
    return (
        <div className='account--activate__container'>
            <h1>Account activated successfully!</h1>
        </div>
    )
}
