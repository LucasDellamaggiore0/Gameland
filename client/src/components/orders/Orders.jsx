import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { ORDER_GAMES} from '../../redux/actions';
import {FaSortAlphaDownAlt, FaSortAlphaDown} from 'react-icons/fa';

export default function Orders({games}) {    
    const dispatch = useDispatch();
    const [valueButton, setValueButton] = useState('ASC');
    const handleOrderAlpha = () => {
        let allGames = [...games];
        if(valueButton === 'ASC'){
            let gamesSorted = allGames.sort((a, b) => {
                if(a.name < b.name) return -1;
                if(a.name > b.name) return 1;
                return 0;
            }
            );
            dispatch(ORDER_GAMES(gamesSorted));
            setValueButton('DESC');
        }
        else{
            let gamesSorted = allGames.sort((a, b) => {
                if(a.name > b.name) return -1;
                if(a.name < b.name) return 1;
                return 0;
            }
            );
            dispatch(ORDER_GAMES(gamesSorted));
            setValueButton('ASC');
        }
    }
    return (
        <div className='orders__container'>
            <p>Sort by: </p>
            <button onClick={handleOrderAlpha} value={valueButton}>
                {valueButton === 'ASC' ? 'Title A-Z' : 'Title Z-A'}
            </button>
        </div>
    )
}
