import React from 'react'
import GamesMap from './GamesMap';
import Orders from '../orders/Orders';

export default function GamesContainer(props) {
    return (
        <div className='games--home__container'>
            <section className='games-orders__container'>
                <h1>Currently trending games</h1>
                <Orders games={props.games}/>
            </section>
            <GamesMap games={props.games} />
        </div>
    )
}
