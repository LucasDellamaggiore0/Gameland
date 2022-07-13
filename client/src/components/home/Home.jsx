import React from 'react'
import GamesContainer from '../games/GamesContainer'
import Nav from '../navbar/Nav'
import Filters from '../filters/Filters'
export default function Home() {
	return (
		<div>
			<Nav/>
			<GamesContainer />
			<Filters/>
		</div>
	)
}
