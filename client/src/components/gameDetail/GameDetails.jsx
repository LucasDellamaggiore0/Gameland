import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { GET_GAME_BY_ID } from '../../redux/actions'
import { useParams } from 'react-router-dom'
import '../../scss/_gameDetail.scss'

export default function GameDetails() {
    const dispatch = useDispatch();
    const {game} = useSelector(state => state.reducer);
    const {id} = useParams();

    useEffect(() => {
        dispatch(GET_GAME_BY_ID(id));
    }, [dispatch, id]);
    
    return (
        <div className='game_detail--container'>
            <h2 className='game_detail--title'>{game.name}</h2>
            <section className='game_detail_img--container'>
                <img className='game_detail--img' src={game.Images?.map(image => {
                    return image.url;
                })} alt={game.Images?.map(image => {
                    return image.alt;
                })}/>
            </section>
            <section className='game_detail_description--container'>
                <p className='game_detail--description'>{game.description}</p>  
            </section>
            <section className='game_detail_genres--container'>
                <p className='game_detail--genres'>{game.Genres?.map(genre => {
                    return genre.name;
                }).join(', ')}</p>
            </section>
        </div>
    )
}
