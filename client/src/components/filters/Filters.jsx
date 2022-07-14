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
        <>
            <div className="filters__container">
                <div className="filter-by-genre">
                    <p className='filter__title'>Genres</p>
                    {genres?.map(genre => <button key={genre.id} onClick={handleFilterGamesByGenre} value={genre.name}>{genre.name}</button>)}
                </div>
                <div className="filter-by-platforms">
                    <p className='filter__title'>Platforms</p>
                    {platforms?.map(platform => <button key={platform.id} onClick={handleFilterGamesByPlatforms} value={platform.name}>{platform.name}</button>)}
                </div>
            </div>
        </>
    )
}
