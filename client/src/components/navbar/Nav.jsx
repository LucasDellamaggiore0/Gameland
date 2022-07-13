import React from 'react'
import {Link} from 'react-router-dom'
import SearchBar from './SearchBar'

export default function Nav() {
    return (
        <nav>
            <Link to="/">
                <p>GAMELAND</p>
            </Link>
            <div>
                <SearchBar />
            </div>
            <Link to="/login">
                <p>Login</p>
            </Link>
        </nav>
    )
}
