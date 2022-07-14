import React from 'react'
import {Link} from 'react-router-dom'
import SearchBar from './SearchBar'
import {FaUserCircle} from 'react-icons/fa'

export default function Nav() {
    return (
        <nav className='nav__container'>
            <Link to="/">
                <p className='title__page'>GAMELAND</p>
            </Link>
            <div className='searchbar__container'>
                <SearchBar />
            </div>
            <div className='login__container'>
                <Link to="/login">
                    <FaUserCircle className='login__icon'/>
                    <p>Login</p>
                </Link>
            </div>
        </nav>
    )
}
