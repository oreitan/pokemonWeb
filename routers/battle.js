const router = require('express').Router();
const battle = require('../controller/battleController');




router.post('/', (req, res) => {
    battle.create(req, res);
});

router.get('/', (req,res) => {
    battle.readAll(req,res);
});

router.get('/:_id', (req,res) => {
    battle.read(req,res);
});


router.put('/:_id',(req,res)=>{
battle.update(req,res);
});

 router.put('/hp/:_id', (req,res)=> {
     console.log("inside attack ");
    battle.updateHP(req,res);
 });



module.exports = router;