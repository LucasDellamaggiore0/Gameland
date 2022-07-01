const {Games, Platforms, Genres, Users} = require('../db');
const {Op} = require('sequelize');

//! OBTENEMOS TODOS LOS JUEGOS DE LA BASE DE DATOS
async function getGames() {
    const games = await Games.findAll({
        include:[
            {
                model: Platforms,
                attributes: ['name'],
                through: {
                    attributes: []
                }
            },
            {
                model: Genres,
                attributes: ['name'],
                through: {
                    attributes: []
                }
            }
        ]
    })
    return games;
}
//! OBTENEMOS UN JUEGO DE LA BASE DE DATOS

async function gameDetail(id){
    const game = await Games.findByPk(id, {
        include:[
            {
                model: Platforms,
                attributes: ['name'],
                through: {
                    attributes: []
                }
            },
            {
                model: Genres,
                attributes: ['name'],
                through: {
                    attributes: []
                }
            }
        ]
    })
    return game;
}

//! OBTENEMOS JUEGOS POR NOMBRE

async function getGamesByName(name){
    const games = await Games.findAll({
        where: {
            name: {
                [Op.like]: `%${name}%`
            }
        },
        include:[
            {
                model: Platforms,
                attributes: ['name'],
                through: {
                    attributes: []
                }
            },
            {
                model: Genres,
                attributes: ['name'],
                through: {
                    attributes: []
                }
            }
        ]
    })
    return games;
}


//! OBTENEMOS TODOS LOS GENEROS DE LA BASE DE DATOS

async function getGenres(){
    const genres = await Genres.findAll();
    return genres;
}


//! OBTENEMOS TODAS LOS PLATAFORMAS DE LA BASE DE DATOS

async function getPlatforms() {
    const platforms = await Platforms.findAll();
    return platforms;
}

//! POSTEAMOS UN JUEGO A LA BASE DE DATOS

async function postGame(name, description, genres, platforms) {
    
    const newGame = await Games.create({
        name,
        description
    });
    newGame.addGenres(genres);
    newGame.addPlatforms(platforms);
    return newGame;
}

//! POSTEAMOS UN GENERO A LA BASE DE DATOS

async function postGenre(name) {
    const newGenre = await Genres.create({
        name
    });
    return newGenre;
}

//! POSTEAMOS UNA PLATAFORMA A LA BASE DE DATOS

async function postPlatform(name) {
    const newPlatform = await Platforms.create({
        name
    });
    return newPlatform;
}
//! POSTEAMOS UN USUARIO A LA BASE DE DATOS

async function postUser(name, email, password) {
    const newUser = await Users.create({
        name,
        email,
        password
    });
    return newUser;
}

//! LOGIN DE UN USUARIO

async function loginUser(email) {
    const user = await Users.findOne({
        where: {
            email
        }
    });
    return user;
}


module.exports = {
    getGames,
    postGame,
    postGenre,
    postPlatform,
    getGenres,
    getPlatforms,
    gameDetail,
    getGamesByName,
    postUser,
    loginUser
}
