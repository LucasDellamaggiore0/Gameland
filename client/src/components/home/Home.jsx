import React from 'react'
import GamesContainer from '../games/GamesContainer'
import Nav from '../navbar/Nav'
import Filters from '../filters/Filters'
import '../../scss/_home.scss'
export default function Home() {
	return (
		<div className='home__container'>
			<Nav/>
			<GamesContainer />
			<Filters/>
		</div>
	)
}
