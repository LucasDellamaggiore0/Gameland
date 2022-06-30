const express = require('express');
const router = express.Router();
const {getGames, postGame, getGamesByName} = require('./functions');


router.get('/', async (req, res) => {
    const {name} = req.query;
    try {
        if(!name){
            const games = await getGames();
            res.json(games);
        }else {
            const games = await getGamesByName(name);
            res.json(games);
        }
    } catch (error) {
        res.status(400).send({error: error.message});
    }
})

router.post('/', async (req, res) => {
    const {name, description, genres, platforms} = req.body;
    try {
        const newGame = await postGame(name, description, genres, platforms);
        res.json(newGame);
    } catch (error) {
        res.status(400).send({error: error.message});
    }
})

module.exports = router;