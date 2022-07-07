import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import validate from './validate'
import { ADD_GAME } from '../../redux/actions'
import { useEffect } from 'react'

export default function NewGame() {
    const dispatch = useDispatch()
    const { game, genres, platforms } = useSelector(state => state.reducer)
    const navigate = useNavigate()
    const [videogame, setVideogame] = useState({
        name: '',
        description: '',
        genres: '',
        platforms: '',
    })
    const [errors, setErrors] = useState({})
    const handleChange = (e) => {
        setVideogame({
            ...videogame,
            [e.target.name]: e.target.value
        })
        let err = validate({
            ...videogame,
            [e.target.name]: e.target.value
        })
        setErrors(err)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (Object.keys(errors).length === 0) {
            dispatch(ADD_GAME(videogame))
            navigate('/')
        }
        setVideogame({
            name: '',
            description: '',
            genres: '',
            platforms: '',
        })
    }
    useEffect(() => {
        if (game.length > 0) {
            navigate('/')
        } else {
            setErrors({
                ...errors,
                errorGame: game.msg
            })
        }
    }, [game])
    console.log(1, game)
    console.log(2, genres)
    console.log(3, platforms)
    return (
        <form onSubmit={handleSubmit}>
            {errors.errorGame && <p>{errors.errorGame}</p>}
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" id="name" name="name" value={videogame.name} onChange={handleChange} />
                {errors.name && <small>{errors.name}</small>}
            </div>
            <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea className="form-control" id="description" name="description" value={videogame.description} onChange={handleChange} />
                {errors.description && <small>{errors.description}</small>}
            </div>
            <div className="form-group">
                <label htmlFor="genres">Genres</label>
                <select className="form-control" id="genres" name="genres" value={videogame.genres} onChange={handleChange}>
                    <option value="">Select a genre</option>
                    {genres?.map(genres => (
                        <option key={genres.id} value={genres.id}>{genres.name}</option>
                    ))}
                </select>
                {errors.genres && <small>{errors.genres}</small>}
            </div>
            <div className="form-group">
                <label htmlFor="platforms">Platforms</label>
                <select className="form-control" id="platforms" name="platforms" value={videogame.platforms} onChange={handleChange}>
                    <option value="">Select a platform</option>
                    {platforms?.map(platforms => (
                        <option key={platforms.id} value={platforms.id}>{platforms.name}</option>
                    ))}
                </select>
                {errors.platforms && <small>{errors.platforms}</small>}
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}
