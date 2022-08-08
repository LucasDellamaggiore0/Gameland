import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { GET_GAMES } from '../../redux/actions'
import GamesMap from './GamesMap';
import Orders from '../orders/Orders';

export default function GamesContainer() {
    const dispatch = useDispatch();
    const {games} = useSelector(state => state.reducer);
    
    useEffect(() => {
        dispatch(GET_GAMES());
    }, [dispatch]);
    return (
        <div className='games--home__container'>
            <section className='games-orders__container'>
                <h1>Currently trending games</h1>
                <Orders games={games}/>
            </section>
            <GamesMap games={games} />
        </div>
    )
}
