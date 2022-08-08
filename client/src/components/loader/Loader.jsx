import React from 'react'
import '../../scss/_loader.scss'

export default function Loader() {
    return (
        <div className='loader__container'>
            <div className='loader__content'>
                <div className='loader'></div>
                <p className='loader__msg'>Loading...</p>
            </div>
        </div>
    )
}
