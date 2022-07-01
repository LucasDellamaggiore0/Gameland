const express = require('express');
const router = express.Router();
const {check} = require('express-validator');
const {getGames, postGame, getGamesByName} = require('./functions');
const {validateFields} = require('../middlewares/validateFields');

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


router.post('/', [
    check('name', 'El nombre del juego es obligatorio').not().isEmpty(),
    check('description', 'La descripcion del juego es obligatoria').not().isEmpty(),
    check('genres', 'El juego debe tener al menos un género').not().isEmpty(),
    check('platforms', 'El juego debe tener al menos una plataforma').not().isEmpty(),

],validateFields, async (req, res) => {
    const {name, description, genres, platforms} = req.body;
    try {
        const newGame = await postGame(name, description, genres, platforms);
        res.json(newGame);
    } catch (error) {
        res.status(400).send({error: error.message});
    }
})

module.exports = router;