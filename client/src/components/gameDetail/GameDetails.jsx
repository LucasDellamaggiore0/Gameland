import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { GET_GAME_BY_ID, CLEAN_UP_DETAILS } from '../../redux/actions'
import { Link, useParams } from 'react-router-dom'
import '../../scss/_gameDetail.scss'
import Loader from '../loader/Loader'
import { AiFillHome } from 'react-icons/ai'

export default function GameDetails() {
    const dispatch = useDispatch();
    const { game, loading } = useSelector(state => state.reducer);
    const { id } = useParams();

    useEffect(() => {
        dispatch(GET_GAME_BY_ID(id));
        return () => {
            dispatch(CLEAN_UP_DETAILS());
        }

    }, [dispatch, id]);
    if (loading || !game) {
        dispatch(CLEAN_UP_DETAILS());
        return <Loader />
    } else {
        return (
            // <div className="game-details">
            //     <div className='game_detail--container'>
            //         <div className='game_detail_name--container'>
            //             <h2 className='game_detail--title'>{game.name}</h2>
            //         </div>

            //     </div>
            // </div>
            <div className="game-details">
                <div className='game_detail--container'>
                    <div className='backHome'>
                        <Link to='/'>
                            <AiFillHome className='iconHome' />
                        </Link>
                    </div>
                    <div className='game_detail_name--container'>
                        <h2 className='game_detail--title'>{game.name}</h2>
                    </div>
                    <section className='game_detail_img--container'>
                        <img className='game_detail--img' src={game.Images?.map(image => {
                            return image.url;
                        })} alt={game.Images?.map(image => {
                            return image.alt;
                        })} />
                    </section>
                    <section className='game_detail_description--container'>
                        <p className='game_detail--description'>{game.description}</p>
                    </section>
                    <section className='game_detail_genres--container'>
                        {game.Genres?.map(genre => {
                            return <p>{genre.name}</p>
                        })}
                    </section>
                </div>
            </div>
        )
    }
}
