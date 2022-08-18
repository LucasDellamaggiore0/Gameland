import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FILTER_GAMES_BY_GENRE, FILTER_GAMES_BY_PLATFORMS, GET_GAMES, GET_GENRES, GET_PLATFORMS } from '../../redux/actions'
export default function Filters() {
    const dispatch = useDispatch()
    const { genres } = useSelector(state => state.reducer)
    const { platforms } = useSelector(state => state.reducer)
    const [currentGenre, setCurrentGenre] = useState([])
    const [showGenre, setShowGenre] = useState(false)
    const [currentPlatform, setCurrentPlatform] = useState([])
    const [showPlatform, setShowPlatform] = useState(false)


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

    const handleShowGenre = (e) => {
        // e.preventDefault()
        setShowGenre(!showGenre)
    }
    const handleShowPlatform = (e) => {
        // e.preventDefault()
        setShowPlatform(!showPlatform)
    }
    const handleFilters = (e) => {
        e.preventDefault()
        dispatch(GET_GAMES())
    }

    useEffect(() => {
        dispatch(GET_GENRES())
    }, [dispatch])

    useEffect(() => {
        dispatch(GET_PLATFORMS())
    }, [dispatch])

    useEffect(() => {
        setCurrentGenre(genres.slice(0, genres.length / 2))
        setCurrentPlatform(platforms.slice(0, platforms.length / 2))
    }, [genres, platforms])

    useEffect(() => {
        if (showGenre) {
            setCurrentGenre(genres)
        } else {
            setCurrentGenre(genres.slice(0, genres.length / 2))
        }
    }, [showGenre, genres])

    useEffect(() => {
        if (showPlatform) {
            setCurrentPlatform(platforms)
        } else {
            setCurrentPlatform(platforms.slice(0, platforms.length / 2))
        }
    }, [showPlatform, platforms])
    return (
        <>
            <div className="filters__container">
                <div className='all__filters--container'>
                    <div className='user__date--container'>
                        <p className='user__date'>
                            {localStorage.getItem('name') && <>Welcome, {localStorage.getItem('name')}</>}
                        </p>
                    </div>
                    <div className="filter-by-genre">
                        <button className='reset__filters' onClick={handleFilters}>Reset filters</button>
                        <p className='filter__title'>Genres</p>
                        {currentGenre?.map(genre => <button className='button__genre' key={genre.id} onClick={handleFilterGamesByGenre} value={genre.name}>{genre.name}</button>)}
                        <button className='show__all--genres' onClick={handleShowGenre}>{
                            showGenre ? 'Hide ▲' : 'Show all genres ▼'
                        }</button>
                    </div>
                    <div className="filter-by-platforms">
                        <p className='filter__title'>Platforms</p>
                        {currentPlatform?.map(platform => <button className='button__platform' key={platform.id} onClick={handleFilterGamesByPlatforms} value={platform.name}>{platform.name}</button>)}
                        <button className='show__all--platforms' onClick={handleShowPlatform}>{
                            showPlatform ? 'Hide ▲' : 'Show all platforms ▼'
                        }</button>
                    </div>
                </div>
            </div>
        </>
    )
}
