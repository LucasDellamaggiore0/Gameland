import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { GET_GAMES } from '../../redux/actions'
import GamesMap from './GamesMap';

export default function GamesContainer() {
    const dispatch = useDispatch();
    const games = useSelector(state => state.reducer);
    useEffect(() => {
        dispatch(GET_GAMES());
    }, [dispatch]);
    console.log(1, games.games);
    return (
        <>
            <GamesMap games={games.games} />
        </>
    )
}
