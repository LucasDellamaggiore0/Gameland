import React from 'react'
import {Link} from 'react-router-dom'
import SearchBar from './SearchBar'
import {FaUserCircle} from 'react-icons/fa'
import {IoIosLogOut} from 'react-icons/io'

export default function Nav() {
    return (
        <nav className='nav__container'>
            <div className='searchbar__container'>
                <SearchBar />
            </div>
            <div className='login__container'>
                {localStorage.getItem('token') ? <Link to="/">
                    <IoIosLogOut className='login__icon'/>
                    <p>Logout</p>
                </Link> : <Link to="/login">
                        <FaUserCircle className='login__icon'/>
                        <p>Login</p>
                    </Link>}
            </div>
        </nav>
    )
}
