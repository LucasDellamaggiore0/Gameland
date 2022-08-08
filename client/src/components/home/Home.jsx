import React from 'react'
import GamesContainer from '../games/GamesContainer'
import Nav from '../navbar/Nav'
import Filters from '../filters/Filters'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { GET_GAMES } from '../../redux/actions'
import { useDispatch } from 'react-redux'
import Loader from '../loader/Loader'
import '../../scss/_home.scss'
export default function Home() {
	const dispatch = useDispatch();
	const { games, loading } = useSelector(state => state.reducer);
	useEffect(() => {
		dispatch(GET_GAMES());
	} , [dispatch]);
	if(loading) {
		return <Loader />
	}else{
		return (
			<div className='home__container'>
				<Nav />
				<Filters />
				<GamesContainer games={games} />
			</div>
		)
	}
}
