import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { ADD_GAME, GET_GENRES, GET_PLATFORMS } from '../../redux/actions';
import { toast } from 'react-toastify';
import {AiFillHome} from 'react-icons/ai';
import {Link, useNavigate} from 'react-router-dom';
import validate from './validate'
import '../../scss/_gameForm.scss'



export default function NewGame() {
	const navigate = useNavigate();
	const [games, setGames] = useState({
		name: '',
		description: '',
		genres: [],
		platforms: [],
		img: [],
		released_date: '',
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
		if (Object.keys(errors).length === 0) {
			dispatch(ADD_GAME(games))
		}
		setGames({
			name: '',
			description: '',
			genres: [],
			platforms: [],
			img: [],
			released_date: ''
		})
	}

	const handleGenres = (e) => {
		if (e.target.value === 'Select a genre') return
		if (games.genres.includes(e.target.value)) return
		setGames({ ...games, genres: [...games.genres, e.target.value] })
	}

	const handlePlatforms = (e) => {
		if (e.target.value === 'Select a platform') return
		if (games.platforms.includes(e.target.value)) return
		setGames({ ...games, platforms: [...games.platforms, e.target.value] })
	}

	const handleImages = (e) => {
		setGames({ ...games, img: e.target.files[0] })
	}

	const dispatch = useDispatch();
	const { game, platforms, genres } = useSelector(state => state.reducer)


	useEffect(() => {
		dispatch(GET_PLATFORMS())
		dispatch(GET_GENRES())
	}, [dispatch])

	useEffect(() => {
		if (game.ok) {
			// alert('Juego creado exitosamente')
			toast.success(game.msg)
		} else if(game.error) {
			toast.error(game.msg)
		}
	}, [game]) // eslint-disable-line react-hooks/exhaustive-deps
	
	const token = localStorage.getItem('token')
	useEffect(() => {
		if (!token) {
			toast.info('You must be logged in to create a game')
			navigate('/')
		} 
	}, [token, navigate])
	return (
		<div className="gameForm">
			<div className='backHome'>
				<Link to='/'>
					<AiFillHome className='iconHome' />	
				</Link>
			</div>
			<div className='form__game--container'>
				<form className='form__game'>
					{errors.errorGame && <p>{errors.errorGame}</p>}
					<div className='form__title--container'>
						<h2>Add new game</h2>
					</div>
					<div className='form__group--container'>
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
						<div className='form-group'>
							<label htmlFor="released_date">Released date</label>
							<input type="date" className="form-control" id="released_date" name="released_date" value={games.released_date} onChange={handleChange} />
							{errors.released_date && <small>{errors.released_date}</small>}
						</div>
						<div className="form-group">
							<label htmlFor="genres">Genres</label>
							<select className="form-control" id="genres" name="genres" value={games.genres} onChange={handleGenres}>
								<option value="">Select a genre</option>
								{genres?.map(genre => (
									<option key={genre.id} value={genre.id}>{genre.name}</option>
								))}
							</select>
							{errors.genres && <small>{errors.genres}</small>}
							<div className='select__options'>
								{games.genres?.map((g) => {
									let genre = genres.find(genre => genre.id === g)
									return <span key={genre.id}>{genre.name}</span>
								})}
							</div>
						</div>
						<div className="form-group">
							<label htmlFor="platforms">Platforms</label>
							<select className="form-control" id="platforms" name="platforms" value={games.platforms} onChange={handlePlatforms}>
								<option value="">Select a platform</option>
								{platforms?.map(platform => (
									<option key={platform.id} value={platform.id}>{platform.name}</option>
								))}
							</select>
							<div className='select__options'>
								{games.platforms?.map((p) => {
									let platform = platforms.find(platform => platform.id === p)
									return <span key={platform.id}>{platform.name}</span>
								})}
							</div>
						</div>
						<div className="form-group">
							<label htmlFor="image">Image</label>
							<input type="file" className="form-control" id="image" name="img" onChange={handleImages} />
						</div>
					</div>
					<div className='form__buttons--container'>
						<button type="submit" className="btn btn-primary" onClick={handleSubmit}>Add Game</button>
					</div>
				</form>
			</div>
		</div>

	)
}
