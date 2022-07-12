import React from 'react'
import GameCard from './GameCard'

export default function GamesMap({ games }) {
    return (
        <>
            {
                games.length > 0 ? games.map(game => {
                    let name = game.name;
                    let id = game.id;
                    let url = game.Images.map(image => {
                        // let url = image.url;
                        return image.url;
                    });
                    let alt = game.Images.map(image => {
                        // let alt = image.alt;
                        return image.alt;
                    })
                    let genres = game.Genres.map(genre => {
                        // let genres = genre.name;
                        return genre.name;
                    })
                    let platforms = game.Platforms.map(platform => {
                        // let platforms = platform.name;
                        return platform.name;
                    })
                    return (
                        <GameCard key={id} name={name} url={url} alt = {alt} genres={genres} platforms = {platforms}/>
                    )
                }
                ) : <h1>No Games</h1>
            }
        </>
    )
}
