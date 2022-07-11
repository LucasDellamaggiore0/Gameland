import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import _default from 'react-redux/es/components/connect';
import { ADD_GAME, GET_GENRES, GET_PLATFORMS } from '../../redux/actions';
import validate from './validate'


export default function NewGame() {
	const [games, setGames] = useState({
		name: '',
		description: '',
		genres: [],
		platforms: [],
		img: []
	})
	const [errors, setErrors] = useState('')
	const handleChange = (e) => {
		setGames({ ...games, [e.target.name]: e.target.value })
		let objErrors = validate({
			...games,
			[e.target.name]: e.target.value
		})
		setErrors(objErrors)
	}
	const handleSubmit = (e) => {
		e.preventDefault();
		if(Object.keys(errors).length === 0){
			dispatch(ADD_GAME(games))
		}
		setGames({
			name: '',
			description: '',
			genres: [],
			platforms: [],
			img: []
		})
	}
	const dispatch = useDispatch();
	const {game, platforms, genres} = useSelector(state => state.reducer)
	useEffect(()=>{
		dispatch(GET_PLATFORMS())
		dispatch(GET_GENRES())
	}, [dispatch])
	useEffect(()=>{
		if(game.ok){
			alert('Juego creado exitosamente')
		}else{
			setErrors({
				...errors,
				errorGame : game.msg
			})
		}
	}, [game])
	return(
		<form>
			{errors.errorGame && <p>{errors.errorGame}</p>}
			<div className="form-group">
				<label htmlFor="name">Name</label>
				<input type="text" className="form-control" id="name" name="name" value={games.name} onChange={handleChange} />
				{errors.name && <small>{errors.name}</small>}
			</div>
			<div className="form-group">
				<label htmlFor="description">Description</label>
				<textarea className="form-control" id="description" name="description" value={games.description} onChange={handleChange} />
				{errors.description && <small>{errors.description}</small>}
			</div>
			<div className="form-group">
				<label htmlFor="genres">Genres</label>
				<select className="form-control" id="genres" name="genres" value={games.genres} onChange={handleChange} multiple={true}>
					<option value="">Select a genre</option>
					{genres.map(genre => (
						<option key={genre.id} value={genre.id}>{genre.name}</option>
					))}
				</select>
				{errors.genres && <small>{errors.genres}</small>}
			</div>
			<div className="form-group">
				<label htmlFor="platforms">Platforms</label>
				<select className="form-control" id="platforms" name="platforms" value={games.platforms} onChange={handleChange} multiple={true}>
					<option value="">Select a platform</option>
					{platforms.map(platform => (
						<option key={platform.id} value={platform.id}>{platform.name}</option>
					))}
				</select>
			</div>
			<div className="form-group">
				<label htmlFor="image">Image</label>
				<input type="file" className="form-control" id="image" name="img"  onChange={(e)=>{
					setGames({...games, img: e.target.files[0]})
				}} />
			</div>
			<button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
		</form>
	)
}
