import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { FILTER_GAMES_BY_GENRE, FILTER_GAMES_BY_PLATFORMS, GET_GENRES, GET_PLATFORMS } from '../../redux/actions'
export default function Filters() {
    const dispatch = useDispatch()
    const {genres} = useSelector(state => state.reducer)
    const {platforms} = useSelector(state => state.reducer)
    
    
    const handleFilterGamesByGenre = (e) => {
        e.preventDefault()
        const genre = e.target.value
        dispatch(FILTER_GAMES_BY_GENRE(genre))
    }
    const handleFilterGamesByPlatforms = (e) => {
        e.preventDefault()
        const platform = e.target.value
        console.log(platform)
        dispatch(FILTER_GAMES_BY_PLATFORMS(platform))
    }
    useEffect(() => {
        if(genres.length === 0) {
            dispatch(GET_GENRES())
        }
    }, [dispatch, genres.length])

    useEffect(() => {
        if(platforms.length === 0) {
            dispatch(GET_PLATFORMS())
        }
    }, [dispatch, platforms.length])

    return (
        <div>
            <div className="filters">
                <div className="filter-by-genre">
                    <label htmlFor="filter-by-genre">Filter by genre:</label>
                    <select id="filter-by-genre" onChange={handleFilterGamesByGenre}>
                        <option value="">All</option>
                        {genres?.map(genre => <option key={genre.id} value={genre.name}>{genre.name}</option>)}
                    </select>
                </div>
                <div className="filter-by-platforms">
                    <label htmlFor="filter-by-platforms">Filter by platforms:</label>
                    <select id="filter-by-platforms" onChange={handleFilterGamesByPlatforms}>
                        <option value="">All</option>
                        {platforms?.map(platform => <option key={platform.id} value={platform.name}>{platform.name}</option>)}
                    </select>
                </div>
            </div>
        </div>
    )
}
