import React from 'react'
import { Link } from 'react-router-dom'

export default function GameCard(props) {
	return (
			
				<section className='gamecard__container'>
					<div className="game__title">
						<h2>{props.name}</h2>
					</div>
					<div className='game__image'>
						<Link to={`/game/${props.id}`}>
							<img src={props.url} alt={props.alt} />
						</Link>
					</div>
					<div className='game__genres'>
						<span>{props.genres.join('-')}</span>
					</div>
				</section>
	)
}
