import React from 'react'
import {Link} from 'react-router-dom'
import SearchBar from './SearchBar'
import {FaUserCircle} from 'react-icons/fa'
import {IoIosLogOut} from 'react-icons/io'
import { useSelector } from 'react-redux'

export default function Nav() {
    const {userResponse} = useSelector(state => state.reducer)
    return (
        <nav className='nav__container'>
            <div className='searchbar__container'>
                <SearchBar />
            </div>
            <div className='login__container'>
                {userResponse.ok ? <Link to="/">
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
