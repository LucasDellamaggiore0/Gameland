import React from 'react'
import { useDispatch } from 'react-redux'
import { SEARCH_GAMES_BY_NAME, GET_GAMES } from '../../redux/actions'
// import { Link } from 'react-router-dom'

export default function SearchBar() {
    const dispatch = useDispatch()
    
    const handleChange = (e) => {
        if(e.target.value === ''){
            dispatch(GET_GAMES())
            return
        }
        dispatch(SEARCH_GAMES_BY_NAME(e.target.value))
    }
    
    return (
        <div>
            <input type="text" onChange={handleChange} placeholder="Search for a game" />
        </div>
    )
}
