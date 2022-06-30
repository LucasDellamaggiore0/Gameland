const {Router} = require('express');
const router = Router();
const gamesRoute = require('./games')
const genresRoute = require('./genres')
const platformsRoute = require('./platforms')
const gameRoute = require('./game')

router.use('/', gamesRoute )
router.use('/genres', genresRoute )
router.use('/platforms', platformsRoute )
router.use('/game', gameRoute)

module.exports = router;