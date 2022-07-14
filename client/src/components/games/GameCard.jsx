import React from 'react'

export default function GameCard(props) {
	return (
			<section className='gamecard__container'>
				<div className="game__title">
					<h2>{props.name}</h2>
				</div>
				<div className='game__image'>
					<img src={props.url} alt={props.alt} />
				</div>
				<div className='game__genres'>
					<span>{props.genres.join('-')}</span>
				</div>
			</section>
	)
}
