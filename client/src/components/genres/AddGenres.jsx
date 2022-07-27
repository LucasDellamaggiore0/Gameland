import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ADD_GENRES } from '../../redux/actions';
import validate from './validate';

export default function AddPlatforms() {
    const dispatch = useDispatch();
    const [genres, setGenres] = useState({
        name: '',
    })
    const [errors, setErrors] = useState('')
    const handleChange = (e) => {
        setPlatforms({ ...genres, [e.target.name]: e.target.value })
        let objErrors = validate({
            ...genres,
            [e.target.name]: e.target.value
        })
        setErrors(objErrors)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (Object.keys(errors).length === 0) {
            dispatch(ADD_GENRES(genres))
        }
        setGenres({
            name: '',
        })
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" name="name" value={genres.name} onChange={handleChange} />
                    {errors.name && <p>{errors.name}</p>}
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}