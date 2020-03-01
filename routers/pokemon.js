const router = require('express').Router();
const pokemon = require('../controller/pokemonController');

router.get('/:pokedex_number', (req, res) => {
    pokemon.read(req, res);
});

router.get('/', (req, res) => {
    pokemon.readAll(req, res);
});

router.post('/', (req, res) => {
    pokemon.create(req, res);
});

// router.put('pokemon/update/:pokedex_number', (req,res) =>{
//     pokemon.update(req,res);
// });

router.delete('/:_id', (req, res) => {
    pokemon.delete(req, res);
});

module.exports = router;