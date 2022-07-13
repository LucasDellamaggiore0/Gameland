import React from 'react'
import {Link} from 'react-router-dom'
import SearchBar from './SearchBar'

export default function Nav() {
    return (
        <nav className='nav__container'>
            <Link to="/">
                <p className='title__page'>GAMELAND</p>
            </Link>
            <div className='searchbar__container'>
                <SearchBar />
            </div>
            <Link to="/login">
                <p className='login__container'>Login</p>
            </Link>
        </nav>
    )
}
