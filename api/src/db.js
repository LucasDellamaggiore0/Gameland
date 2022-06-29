require('dotenv').config();
const {Sequelize} = require('sequelize');
const {
    DB_HOST,
    DB_NAME,
    DB_USER,
    DB_PASSWORD
} = process.env;

const sequelize = new Sequelize(`${DB_NAME}`, `${DB_USER}`, `${DB_PASSWORD}`, {
    host: `${DB_HOST}`,
    dialect: 'postgres',
    logging: false,
    native: false,
})

const models = {
    games: require('./models/Games')(sequelize),
    platforms: require('./models/Platforms')(sequelize),
    genres: require('./models/Genres')(sequelize),
}

const {Games, Platforms, Genres} = sequelize.models;

Games.belongsToMany(Platforms, {through: 'games_platforms'});
Platforms.belongsToMany(Games, {through: 'games_platforms'});
Games.belongsToMany(Genres, {through: 'games_genres'});
Genres.belongsToMany(Games, {through: 'games_genres'});


module.exports = {
    ...sequelize.models,
    sequelize,
};