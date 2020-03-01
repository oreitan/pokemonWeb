const router = require('express').Router();
const attack = require('../controller/attacksController');

router.post('/', (req, res) => {
    attack.create(req, res);
});

router.get('/', (req, res) => {
    attack.readAll(req, res);
});

module.exports = router;