import React from 'react'
import GameCard from './GameCard'
import { AiFillAndroid, AiFillWindows } from 'react-icons/ai'
import { FaXbox } from 'react-icons/fa'
import { SiPlaystation3, SiPlaystation4, SiPlaystation5 } from 'react-icons/si'

export default function GamesMap({ games }) {
    return (
        <div className='games__container'>
            {
                games?.length > 0 ? games?.map(game => {
                    let name = game.name;
                    let id = game.id;
                    let url = game.Images?.map(image => {
                        return image.url;
                    });
                    let alt = game.Images?.map(image => {
                        return image.alt;
                    })
                    let genres = game.Genres?.map(genre => {
                        return genre.name;
                    })
                    let platforms = game.Platforms?.map(platform => {
                        if(platform.name === 'PC'){
                            return <AiFillWindows />
                        }
                        if(platform.name === 'XBOX'){
                            return <FaXbox />
                        }
                        if(platform.name === 'PS3'){
                            return <SiPlaystation3 />
                        }
                        if(platform.name === 'PS4'){
                            return <SiPlaystation4 />
                        }
                        if(platform.name === 'PS5'){
                            return <SiPlaystation5 />
                        }
                        if(platform.name === 'Android'){
                            return <AiFillAndroid />
                        }
                    })
                    return (
                        <GameCard key={id} name={name} url={url} alt = {alt} genres={genres} platforms = {platforms} id={id}/>
                    )
                }
                ) : <h1>No Games</h1>
            }
        </div>
    )
}
