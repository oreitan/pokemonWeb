const router = require('express').Router();
const userController = require('../controller/userController');

router.put('/:id', (req, res) => {
    userController.update(req,res);
});

router.delete('/:id', (req, res) => {
    userController.delete(req,res);
});

module.exports = router;