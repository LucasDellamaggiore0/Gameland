const {Router} = require('express');
const router = Router();
const gamesRoute = require('./games')

router.use('/', gamesRoute )


module.exports = router;