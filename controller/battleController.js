const Battles = require('../database/connector').Battles;
const mongoose = require('mongoose');
const errHandler = require('../errorHandler/errorHandler');


class battleController {

  static async create(req, res) {
    try {


      if (!req.body.player1) throw {
        status: 404,
        message: `N0 Player`
      };


console.log(req.body.player1[0].stats.hp);
console.log(req.body.player1[1].stats.hp);
console.log(req.body.player1[2].stats.hp);

      let battle = new Battles({
        player1: [{
          id: req.body.player1[0].pokedex_number,
          name: req.body.player1[0].name,
          type1: req.body.player1[0].type1,
          type2: "",
          weakness: {
            bug: req.body.player1[0].weakness.bug,
            dark: req.body.player1[0].weakness.dark,
            dragon: req.body.player1[0].weakness.dragon,
            electric: req.body.player1[0].weakness.electric,
            fairy: req.body.player1[0].weakness.fairy,
            fighting: req.body.player1[0].weakness.fighting,
            fire: req.body.player1[0].weakness.fire,
            ghost: req.body.player1[0].weakness.ghost,
            grass: req.body.player1[0].weakness.grass,
            ground: req.body.player1[0].weakness.ground,
            ice: req.body.player1[0].weakness.ice,
            normal: req.body.player1[0].weakness.normal,
            poison: req.body.player1[0].weakness.poison,
            psychic: req.body.player1[0].weakness.psychic,
            rock: req.body.player1[0].weakness.rock,
            steel: req.body.player1[0].weakness.steel,
            water: req.body.player1[0].weakness.water
          },
          img: {
            default: req.body.player1[0].img.icon,
            front: req.body.player1[0].img.front,
            back: req.body.player1[0].img.back
          },
          hp: {
            current: req.body.player1[0].hp.current,
            total: req.body.player1[0].hp.total
          },
          stats: {
            attack: req.body.player1[0].stats.attack,
            defense: req.body.player1[0].stats.defense,
            spAttack: req.body.player1[0].stats.sp_attack,
            spDefense: req.body.player1[0].stats.sp_defense
          },


        },
      {
        id: req.body.player1[1].pokedex_number,
        name: req.body.player1[1].name,
        type1: req.body.player1[1].type1,
        type2: "",
        weakness: {
          bug: req.body.player1[1].weakness.bug,
          dark: req.body.player1[1].weakness.dark,
          dragon: req.body.player1[1].weakness.dragon,
          electric: req.body.player1[1].weakness.electric,
          fairy: req.body.player1[1].weakness.fairy,
          fighting: req.body.player1[1].weakness.fighting,
          fire: req.body.player1[1].weakness.fire,
          ghost: req.body.player1[1].weakness.ghost,
          grass: req.body.player1[1].weakness.grass,
          ground: req.body.player1[1].weakness.ground,
          ice: req.body.player1[1].weakness.ice,
          normal: req.body.player1[1].weakness.normal,
          poison: req.body.player1[1].weakness.poison,
          psychic: req.body.player1[1].weakness.psychic,
          rock: req.body.player1[1].weakness.rock,
          steel: req.body.player1[1].weakness.steel,
          water: req.body.player1[1].weakness.water
        },
        img: {
          default: req.body.player1[1].img.icon,
          front: req.body.player1[1].img.front,
          back: req.body.player1[1].img.back
        },
        hp: {
          current: req.body.player1[1].hp.current,
          total: req.body.player1[1].hp.total
        },
        stats: {
          attack: req.body.player1[1].stats.attack,
          defense: req.body.player1[1].stats.defense,
          spAttack: req.body.player1[1].stats.sp_attack,
          spDefense: req.body.player1[1].stats.sp_defense
        },


      },
    {
      id: req.body.player1[2].pokedex_number,
      name: req.body.player1[2].name,
      type1: req.body.player1[2].type1,
      type2: "",
      weakness: {
        bug: req.body.player1[2].weakness.bug,
        dark: req.body.player1[2].weakness.dark,
        dragon: req.body.player1[2].weakness.dragon,
        electric: req.body.player1[2].weakness.electric,
        fairy: req.body.player1[2].weakness.fairy,
        fighting: req.body.player1[2].weakness.fighting,
        fire: req.body.player1[2].weakness.fire,
        ghost: req.body.player1[2].weakness.ghost,
        grass: req.body.player1[2].weakness.grass,
        ground: req.body.player1[2].weakness.ground,
        ice: req.body.player1[2].weakness.ice,
        normal: req.body.player1[2].weakness.normal,
        poison: req.body.player1[2].weakness.poison,
        psychic: req.body.player1[2].weakness.psychic,
        rock: req.body.player1[2].weakness.rock,
        steel: req.body.player1[2].weakness.steel,
        water: req.body.player1[2].weakness.water
      },
      img: {
        default: req.body.player1[2].img.icon,
        front: req.body.player1[2].img.front,
        back: req.body.player1[2].img.back
      },
      hp: {
        current: req.body.player1[2].hp.current,
        total: req.body.player1[2].hp.total
      },
      stats: {
        attack: req.body.player1[2].stats.attack,
        defense: req.body.player1[2].stats.defense,
        spAttack: req.body.player1[2].stats.sp_attack,
        spDefense: req.body.player1[2].stats.sp_defense
      },


    }],

    player2: [{
      id: "",
      name: "",
      type1: "",
      type2:"",
      weakness: {
        bug: "",
        dark: "",
        dragon: "",
        electric: "",
        fairy: "",
        fighting: "",
        fire: "",
        ghost: "",
        grass: "",
        ground: "",
        ice: "",
        normal: "",
        poison: "",
        psychic: "",
        rock: "",
        steel: "",
        water: ""
      },
      img: {
        default: "",
        front: "",
        back: ""
      },
      hp: {
        current: "",
        total: ""
      },
      stats: {
        attack: "",
        defense: "",
        spAttack: "",
        spDefense: ""
      },


    },
  {
    id: "",
    name: "",
    type1: "",
    type2:"",
    weakness: {
      bug: "",
      dark: "",
      dragon: "",
      electric: "",
      fairy: "",
      fighting: "",
      fire: "",
      ghost: "",
      grass: "",
      ground: "",
      ice: "",
      normal: "",
      poison: "",
      psychic: "",
      rock: "",
      steel: "",
      water: ""
    },
    img: {
      default: "",
      front: "",
      back: ""
    },
    hp: {
      current: "",
      total: ""
    },
    stats: {
      attack: "",
      defense: "",
      spAttack: "",
      spDefense: ""
    },

  },
{
  id: "",
  name: "",
  type1: "",
  type2:"",
  weakness: {
    bug: "",
    dark: "",
    dragon: "",
    electric: "",
    fairy: "",
    fighting: "",
    fire: "",
    ghost: "",
    grass: "",
    ground: "",
    ice: "",
    normal: "",
    poison: "",
    psychic: "",
    rock: "",
    steel: "",
    water: ""
  },
  img: {
    default: "",
    front: "",
    back: ""
  },
  hp: {
    current: "",
    total: ""
  },
  stats: {
    attack: "",
    defense: "",
    spAttack: "",
    spDefense: ""
  },

}],
active1: 0,
active2: 0,
handicap: req.body.handicap

      });
     

      if(req.body.player1[0].type2)
      {
        console.log("in 1");
        battle.player1[0].type2=req.body.player1[0].type2;
      }

      if(req.body.player1[1].type2)
      {
        console.log("in 2");
        battle.player1[1].type2=req.body.player1[1].type2;
      }

      if(req.body.player1[2].type2)
      {
        console.log("in 3");
        battle.player1[2].type2=req.body.player1[2].type2;
      }

      console.log(battle);



      // let obj = await pokemon.exists();
      //console.log(obj,pokemon);
      // if (obj)
      //     throw {
      //         status: 409,
      //         message: 'A Pokemon with same id already exists'
      //     };

     let battelRes = await battle.save();
     //console.log(battelRes._id);


      res.status(200).send(JSON.stringify({_id: battelRes.id}));

    } catch (err) {
      console.log(err);
      errHandler.Error(res, err);
    };
  }


 

  // static async readAll(req, res) {
  //     try {
  //         let obj = await Pokemons.getPokemons();
  //         if (!obj || obj.length == 0) throw {
  //             status: 204,
  //             message: 'There are no pokemons'
  //         };
  //         res.status(200).json(obj);
  //     } catch (err) {
  //         errHandler.Error(res, err);
  //     }
  // }


  static async update(req, res) {
    try {
      this.checkID(req.params._id);
      let obj = await Battles.getBattle(req.params._id);
      if (!obj) throw {
        status: 204,
        message: `The Battle with ID ${req.params._id} doesn't exist`
      };

      console.log(obj);

      
      obj.player2[0].id = req.body.player2[0].pokedex_number;
      obj.player2[0].name = req.body.player2[0].name;
      obj.player2[0].type1 = req.body.player2[0].type1;
      obj.player2[0].type2 = "";
      obj.player2[0].weakness.bug = req.body.player2[0].weakness.bug;
      obj.player2[0].weakness.dark = req.body.player2[0].weakness.dark;
      obj.player2[0].weakness.dragon = req.body.player2[0].weakness.dragon;
      obj.player2[0].weakness.electric = req.body.player2[0].weakness.electric;
      obj.player2[0].weakness.fairy = req.body.player2[0].weakness.fairy;
      obj.player2[0].weakness.fighting = req.body.player2[0].weakness.fighting;
      obj.player2[0].weakness.fire = req.body.player2[0].weakness.fire;
      obj.player2[0].weakness.ghost = req.body.player2[0].weakness.ghost;
      obj.player2[0].weakness.grass = req.body.player2[0].weakness.grass;
      obj.player2[0].weakness.ground = req.body.player2[0].weakness.ground;
      obj.player2[0].weakness.ice = req.body.player2[0].weakness.ice;
      obj.player2[0].weakness.normal = req.body.player2[0].weakness.normal;
      obj.player2[0].weakness.poison = req.body.player2[0].weakness.poison;
      obj.player2[0].weakness.psychic = req.body.player2[0].weakness.psychic;
      obj.player2[0].weakness.rock = req.body.player2[0].weakness.rock;
      obj.player2[0].weakness.steel = req.body.player2[0].weakness.steel;
      obj.player2[0].weakness.water = req.body.player2[0].weakness.water;
      obj.player2[0].img.default = req.body.player2[0].img.default;
      obj.player2[0].img.front = req.body.player2[0].img.front;
      obj.player2[0].img.back = req.body.player2[0].img.back;
      obj.player2[0].hp.current = req.body.player2[0].hp.current;
      obj.player2[0].hp.total = req.body.player2[0].hp.total;
      obj.player2[0].stats.attack = req.body.player2[0].stats.attack;
      obj.player2[0].stats.defense = req.body.player2[0].stats.defense;
      obj.player2[0].stats.spAttack = req.body.player2[0].stats.spAttack;
      obj.player2[0].stats.spDefense = req.body.player2[0].stats.spDefense;


      obj.player2[1].id = req.body.player2[1].pokedex_number;
      obj.player2[1].name = req.body.player2[1].name;
      obj.player2[1].type1 = req.body.player2[1].type1;
      obj.player2[1].type2 = ""
      obj.player2[1].weakness.bug = req.body.player2[1].weakness.bug;
      obj.player2[1].weakness.dark = req.body.player2[1].weakness.dark;
      obj.player2[1].weakness.dragon = req.body.player2[1].weakness.dragon;
      obj.player2[1].weakness.electric = req.body.player2[1].weakness.electric;
      obj.player2[1].weakness.fairy = req.body.player2[1].weakness.fairy;
      obj.player2[1].weakness.fighting = req.body.player2[1].weakness.fighting;
      obj.player2[1].weakness.fire = req.body.player2[1].weakness.fire;
      obj.player2[1].weakness.ghost = req.body.player2[1].weakness.ghost;
      obj.player2[1].weakness.grass = req.body.player2[1].weakness.grass;
      obj.player2[1].weakness.ground = req.body.player2[1].weakness.ground;
      obj.player2[1].weakness.ice = req.body.player2[1].weakness.ice;
      obj.player2[1].weakness.normal = req.body.player2[1].weakness.normal;
      obj.player2[1].weakness.poison = req.body.player2[1].weakness.poison;
      obj.player2[1].weakness.psychic = req.body.player2[1].weakness.psychic;
      obj.player2[1].weakness.rock = req.body.player2[1].weakness.rock;
      obj.player2[1].weakness.steel = req.body.player2[1].weakness.steel;
      obj.player2[1].weakness.water = req.body.player2[1].weakness.water;
      obj.player2[1].img.default = req.body.player2[1].img.default;
      obj.player2[1].img.front = req.body.player2[1].img.front;
      obj.player2[1].img.back = req.body.player2[1].img.back;
      obj.player2[1].hp.current = req.body.player2[1].hp.current;
      obj.player2[1].hp.total = req.body.player2[1].hp.total;
      obj.player2[1].stats.attack = req.body.player2[1].stats.attack;
      obj.player2[1].stats.defense = req.body.player2[1].stats.defense;
      obj.player2[1].stats.spAttack = req.body.player2[1].stats.spAttack;
      obj.player2[1].stats.spDefense = req.body.player2[1].stats.spDefense;


      obj.player2[2].id = req.body.player2[2].pokedex_number;
      obj.player2[2].name = req.body.player2[2].name;
      obj.player2[2].type1 = req.body.player2[2].type1;
      obj.player2[2].type2 = ""
      obj.player2[2].weakness.bug = req.body.player2[2].weakness.bug;
      obj.player2[2].weakness.dark = req.body.player2[2].weakness.dark;
      obj.player2[2].weakness.dragon = req.body.player2[2].weakness.dragon;
      obj.player2[2].weakness.electric = req.body.player2[2].weakness.electric;
      obj.player2[2].weakness.fairy = req.body.player2[2].weakness.fairy;
      obj.player2[2].weakness.fighting = req.body.player2[2].weakness.fighting;
      obj.player2[2].weakness.fire = req.body.player2[2].weakness.fire;
      obj.player2[2].weakness.ghost = req.body.player2[2].weakness.ghost;
      obj.player2[2].weakness.grass = req.body.player2[2].weakness.grass;
      obj.player2[2].weakness.ground = req.body.player2[2].weakness.ground;
      obj.player2[2].weakness.ice = req.body.player2[2].weakness.ice;
      obj.player2[2].weakness.normal = req.body.player2[2].weakness.normal;
      obj.player2[2].weakness.poison = req.body.player2[2].weakness.poison;
      obj.player2[2].weakness.psychic = req.body.player2[2].weakness.psychic;
      obj.player2[2].weakness.rock = req.body.player2[2].weakness.rock;
      obj.player2[2].weakness.steel = req.body.player2[2].weakness.steel;
      obj.player2[2].weakness.water = req.body.player2[2].weakness.water;
      obj.player2[2].img.default = req.body.player2[2].img.default;
      obj.player2[2].img.front = req.body.player2[2].img.front;
      obj.player2[2].img.back = req.body.player2[2].img.back;
      obj.player2[2].hp.current = req.body.player2[2].hp.current;
      obj.player2[2].hp.total = req.body.player2[2].hp.total;
      obj.player2[2].stats.attack = req.body.player2[2].stats.attack;
      obj.player2[2].stats.defense = req.body.player2[2].stats.defense;
      obj.player2[2].stats.spAttack = req.body.player2[2].stats.spAttack;
      obj.player2[2].stats.spDefense = req.body.player2[2].stats.spDefense;

      if(req.body.player2[0].type2)
      {
        console.log("in 1");
        obj.player2[0].type2=req.body.player2[0].type2;
      }

      if(req.body.player2[1].type2)
      {
        console.log("in 2");
        obj.player1[1].type2=req.body.player1[1].type2;
      }

      if(req.body.player2[2].type2)
      {
        console.log("in 3");
        obj.player2[2].type2=req.body.player2[2].type2;
      }

      console.log("player 2:  ");
      console.log(obj);



    let r = await Battles.updateBattle(obj);



    if (r.nModified == 0)
      res.status(200).send(`Already up to date`);
    else{
      
      res.status(200).send(`Successfully updated`);
    }
      
  } catch (err) {
    errHandler.Error(res, err);
  }
}

static async updateHP(req, res) {
  try{
    console.log("inside HP ");
    console.log(req.params._id);
    this.checkID(req.params._id);
    let obj = await Battles.getBattle(req.params._id);
    if(!obj) throw{
      stats: 204,
      message: 'The battle doesnt exist'
    };

    console.log(obj);

    //player 1:
      //pokemon 1:
    obj.player1[0].pokedex_number = req.body.player1[0].pokedex_number;
    obj.player1[0].name = req.body.player1[0].name;
    obj.player1[0].type1 = req.body.player1[0].type1;
    obj.player1[0].type2 = "";
    obj.player1[0].weakness = req.body.player1[0].weakness;
    obj.player1[0].img = req.body.player1[0].img;
    obj.player1[0].hp = req.body.player1[0].hp;
    obj.player1[0].stats = req.body.player1[0].stats;
      //pokemon 2:
    obj.player1[1].pokedex_number = req.body.player1[1].pokedex_number;
    obj.player1[1].name = req.body.player1[1].name;
    obj.player1[1].type1 = req.body.player1[1].type1;
    obj.player1[1].type2 = "";
    obj.player1[1].weakness = req.body.player1[1].weakness;
    obj.player1[1].img = req.body.player1[1].img;
    obj.player1[1].hp = req.body.player1[1].hp;
    obj.player1[1].stats = req.body.player1[1].stats;
      //pokemon 3:
    obj.player1[2].pokedex_number = req.body.player1[2].pokedex_number;
    obj.player1[2].name = req.body.player1[2].name;
    obj.player1[2].type1 = req.body.player1[2].type1;
    obj.player1[2].type2 = "";
    obj.player1[2].weakness = req.body.player1[2].weakness;
    obj.player1[2].img = req.body.player1[2].img;
    obj.player1[2].hp = req.body.player1[2].hp;
    obj.player1[2].stats = req.body.player1[2].stats;
    
    //player 2:
      //pokemon 1:
    obj.player2[0].pokedex_number = req.body.player2[0].pokedex_number;
    obj.player2[0].name = req.body.player2[0].name;
    obj.player2[0].type1 = req.body.player2[0].type1;
    obj.player2[0].type2 = "";
    obj.player2[0].weakness = req.body.player2[0].weakness;
    obj.player2[0].img = req.body.player2[0].img;
    obj.player2[0].hp = req.body.player2[0].hp;
    obj.player2[0].stats = req.body.player2[0].stats;
      //pokemon 2:
    obj.player2[1].pokedex_number = req.body.player2[1].pokedex_number;
    obj.player2[1].name = req.body.player2[1].name;
    obj.player2[1].type1 = req.body.player2[1].type1;
    obj.player2[1].type2 = "";
    obj.player2[1].weakness = req.body.player2[1].weakness;
    obj.player2[1].img = req.body.player2[1].img;
    obj.player2[1].hp = req.body.player2[1].hp;
    obj.player2[1].stats = req.body.player2[1].stats;
      //pokemon 3:
    obj.player2[2].pokedex_number = req.body.player2[2].pokedex_number;
    obj.player2[2].name = req.body.player2[2].name;
    obj.player2[2].type1 = req.body.player2[2].type1;
    obj.player2[2].type2 = "";
    obj.player2[2].weakness = req.body.player2[2].weakness;
    obj.player2[2].img = req.body.player2[2].img;
    obj.player2[2].hp = req.body.player2[2].hp;
    obj.player2[2].stats = req.body.player2[2].stats;

    obj.active1 = req.body.active1;
    obj.active2 = req.body.active2;

    console.log(obj.player1.hp);

    //type 2 player 1 chack
    if(req.body.player1[0].type2)
    {
      console.log("in 1");
      obj.player1[0].type2=req.body.player1[0].type2;
    }

    if(req.body.player1[1].type2)
    {
      console.log("in 2");
      obj.player1[1].type2=req.body.player1[1].type2;
    }

    if(req.body.player1[2].type2)
    {
      console.log("in 3");
      obj.player1[2].type2=req.body.player1[2].type2;
    }


    //type 2 player 1 chack
    if(req.body.player2[0].type2)
    {
      console.log("in 1");
      obj.player2[0].type2=req.body.player2[0].type2;
    }

    if(req.body.player2[1].type2)
    {
      console.log("in 2");
      obj.player2[1].type2=req.body.player2[1].type2;
    }

    if(req.body.player2[2].type2)
    {
      console.log("in 3");
      obj.player2[2].type2=req.body.player2[2].type2;
    }

    console.log("HP:  ");
    console.log(obj);

    let r = await Battles.updateBattle(obj);



    if (r.nModified == 0)
      res.status(200).send(`Already up to date`);
    else{
      res.status(200).send(`Successfully updated`);

    }

  }catch (err){
    errHandler.Error(res, err);
  }
}

static async delete(req, res) {
  try {
    this.checkID(req.params._id);
    let obj = await Battles.getBattle(req.params._id);
    if (!obj) throw {
      status: 204,
      message: 'The battle doesnt exist'
    };
    let tmp = await Pokemons.deletePokemon(req.params._id);
    if (tmp.deleteCount == 0) throw {
      status: 204,
      message: 'There is nothing to delete'
    };
    res.status(200).send(`Successfully extinct`);
  } catch (err) {
    errHandler.Error(res, err);
  }
}

static async readAll(req, res) {
  try {
      let obj = await Battles.getAllBattles();
      if (!obj || obj.length == 0) throw {
          status: 204,
          message: 'There are no active battles'
      };
      res.status(200).json(obj);
  } catch (err) {
      errHandler.Error(res, err);
  }
}

static async read(req, res) {
  try {
    this.checkID(req.params._id);
    let obj = await Battles.getBattle(req.params._id);
    if (!obj) throw {
      status: 204,
      message: 'There is no battle with this ID'
    };
    res.status(200).json(obj);
  } catch (err) {
    errHandler.Error(res, err);
  }
}


static checkID(id) {
  if (!mongoose.Types.ObjectId.isValid(id)) throw {
    status: 403,
    message: 'Invalid Id'
  };
}



}

module.exports = battleController;