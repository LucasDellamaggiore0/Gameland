import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'
import { FaUserCircle } from 'react-icons/fa'
import { IoIosLogOut } from 'react-icons/io'

export default function Nav() {
    const logOut = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('name')
        window.location.reload()
    }
    return (
        <nav className='nav__container'>
            <div className='searchbar__container'>
                <SearchBar />
            </div>
            <div className='addgame__container'>
                {
                    localStorage.getItem('token') && <Link to='/addGame' className='addgame__link'>
                        <p>Add Game</p>
                    </Link>
                }
            </div>
            <div className='login__container'>
                {localStorage.getItem('token') ? <Link to="/">
                    <IoIosLogOut className='logout__icon' onClick={logOut} />
                </Link> : <Link to="/login">
                    <FaUserCircle className='login__icon' />
                </Link>}
            </div>
        </nav>
    )
}
