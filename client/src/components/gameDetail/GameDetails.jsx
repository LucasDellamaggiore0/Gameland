import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { GET_GAME_BY_ID } from '../../redux/actions'
import { useParams } from 'react-router-dom'

export default function GameDetails() {
    const dispatch = useDispatch();
    const {game} = useSelector(state => state.reducer);
    const {id} = useParams();

    useEffect(() => {
        dispatch(GET_GAME_BY_ID(id));
    }, [dispatch, id]);
    console.log(game);
    return (
        <div>
            <h2>{game.name}</h2>
            <img src={game.Images?.map(image => {
                return image.url;
            })} alt={game.Images?.map(image => {
                return image.alt;
            })}/>
            <p>{game.description}</p>
            <p>{game.Genres?.map(genre => {
                return genre.name;
            }).join(', ')}</p>
            <p>{game.Platforms?.map(platform => {
                return platform.name;
            }).join(', ')}</p>
        </div>
    )
}
