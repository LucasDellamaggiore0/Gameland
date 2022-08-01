import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { GET_GAME_BY_ID } from '../../redux/actions'
import { useParams } from 'react-router-dom'
import {AiFillWindows, AiFillAndroid} from 'react-icons/ai'
import {FaXbox} from 'react-icons/fa'
import {SiPlaystation3, SiPlaystation4, SiPlaystation5} from 'react-icons/si'
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
            <section className='game_detail_platforms--container'>
                {
                    game.Platforms?.map(platform => { // eslint-disable-line
                        if(platform.name === 'PC'){
                            return <AiFillWindows/>
                        }
                        if(platform.name === 'XBOX'){
                            return <FaXbox/>
                        }
                        if(platform.name === 'PS3'){
                            return <SiPlaystation3/>
                        }
                        if(platform.name === 'PS4'){
                            return <SiPlaystation4/>
                        }
                        if(platform.name === 'PS5'){
                            return <SiPlaystation5/>
                        }
                        if(platform.name === 'Android'){
                            return <AiFillAndroid/>
                        }
                    })
                }
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
