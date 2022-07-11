import React from 'react'

export default function GameCard(props) {
	return (
		<section>
			<h2>{props.name}</h2>
			<img src={props.url} alt={props.alt} />
			<span>Genres: {props.genres}</span>
			<span>Platforms: {props.platforms}</span>
		</section>
	)
}
