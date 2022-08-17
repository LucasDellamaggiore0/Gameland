import React from 'react'
import { Link } from 'react-router-dom'

export default function TitlePage() {
    return (
        <div className='title__page--container'>
            <Link to='/'>
                <p className='title__page'>GAMELAND</p>
            </Link>
        </div>
    )
}
