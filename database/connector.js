const mongoose = require('mongoose');


/************* Connect to DB *************/

const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.COLLECTION}?retryWrites=true&w=majority`;

const options = {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
};

mongoose
    .connect(url, options)
    .then(db => console.log(`connected to: ${db.connection.name}`))
    .catch(err => console.log(`connection error:`, err))

/********************************************/
/************* Create Pokemon Schema *************/
/********************************************/

let poke_scheme = new mongoose.Schema({
    pokedex_number: {
        type: Number,
        index: true,
        unique: true,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    name_lower: {
        type: String,
        lowercase: true
    },
    classfication: {
        type: String,
        required: true
    },
    type1: {
        type: String,
        required: true,
        lowercase: true
    },
    type2: {
        type: String,
        lowercase: true,
        default: null
    },
    generation: {
        type: Number,
        required: true
    },
    weight_kg: {
        type: Number,
        required: true
    },
    height_m: {
        type: Number,
        required: true
    },
    stats: {
        type: Object,
        required: true
    },
    weaknesses: {
        type: Object,
        required: true,
        default: 0
    },
    images: {
        type: Object,
        required: true
    }
}, {
    timestamps: true,
});

/********************************************/
/************* Create Statistics Schema *************/
/********************************************/

let stats_scheme = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },

    wins: {
        type: Number,
        default: 0
    },

    loss: {
        type: Number,
        default: 0
    },

    total: {
        type: Number,
        default: 0
    },
    battles_used: {
        type: Object,
    }

});

/********************************************/
/************* Create Attacks Schema *************/
/********************************************/

let attacksType_scheme = new mongoose.Schema({
    pokeType: {
        type: String,
        required: true
    },

    name: {
        type: String,
        unique: true,
        required: true
    },

    hp: {
        type: Number,
        required: true
    },

    avail_total: {
        type: Number,
        required: true
    },

    strength: {
        type: Number,
        required: true,
        default: 0
    },

    typeIcon: {
        type: String,
        required: true
    }

});
/********************************************/
/************* Create User Schema *************/
/********************************************/

let user_schema = new mongoose.Schema({
    id: {
        type: String
    },
    email: {
        type: String,
        lowercase: true
    },
    battles: [],
    imageUrl: String,
    win: Number,
    lose: Number
});

user_schema.static('getUser', async function (id) {
    return await this.findOne({
        "id": id
    }, (err, res) => {
        if (err) throw err;
    });
});

user_schema.static('updateUser', async function (obj) {
    return await this.updateOne({
        id: obj.id
    }, obj);
});

user_schema.static('deleteUser', async function (id) {
    return await this.deleteOne({
        id: id
    }, (err) => {
        if (err) throw err;
    });
});


/********************************************/
/************* Create Battle Schema *************/
/********************************************/

let battle_schema = new mongoose.Schema({

    player1: {
        type: Object,
        required: true

    },
    player2: {
        type: Object
    },
    active1: {
        type: Number
    },
    active2: {
        type: Number
    },
    handicap: {
        type: String
    }
});



/********************************************/
/************* Pokemon Methods *************/
/********************************************/

poke_scheme.virtual('id', function () {
    return this._id;
});


poke_scheme.static('getPokemon', async function (pokedexNum) {
    let obj = await this.findOne({
        pokedex_number: pokedexNum
    }, (err, res) => {
        if (err) throw err;
    });
    return obj;
});

poke_scheme.static('getPokemons', async function () {
    return await this.find({}, (err, res) => {
        if (err) throw err;
    });
});

poke_scheme.static('updatePokemon', async function (obj) {
    return await this.updateOne({
        _id: obj._id
    }, obj);
});

poke_scheme.static('deletePokemon', async function (id) {
    return await this.deleteOne({
        _id: id
    }, (err) => {
        if (err) throw err;
    });
});

poke_scheme.method('exists', async function () {
    return await this.model('pokemons').findById(this._id, (err, res) => {
        if (err) throw err;
    })
});

/************* Stats Methods *************/

// stats_scheme.virtual('id', function () {
//     return this._id;
// });

stats_scheme.method('pokemonWins', async function (_id) {
    return await this.updateWin({
        _id: obj._id
    }, obj);
});

stats_scheme.method('pokemonLose', async function (_id) {
    return await this.updateLose({
        _id: obj._id
    }, obj);
});

/************* Attacks Methods *************/

// attacksType_scheme.virtual('id', function () {
//     return this._id;
// });

attacksType_scheme.static('getAttacks', async function () {
    return await this.find({}, (err, res) => {
        if (err) throw err;
    })
});

attacksType_scheme.method('exists', async function () {
    return await this.model('pokemonattacks').find({
        name: this.name
    }, (err, res) => {
        if (err) throw err;
    })
});

/************* battle Methods *************/



battle_schema.static('getBattle', async function (_id) {
    const x = _id;
    console.log(x);
    return await this.findById(x, (err, res) => {
        if (err) throw err;
    })
});

battle_schema.method('getAllPlayerBattles', async function (player1) {
    return await this.find({
        player1: this.player1
    }, (err, res) => {
        if (err) throw err;
    })
});

// battle_schema.static('updatePlayerTwo', async function (_id) {
//     const x = _id;
//     return await this.findById(x ,(err,res)=> {
//         if(err) throw err;
//     })
// });

battle_schema.static('updateBattle', async function (obj) {
    return await this.updateOne({
        _id: obj._id
    }, obj);
});

// battle_schema.method('getAllPlayer2', async function (player2) {
//     return await this.find({player2: this.player2}, (err,res) => {
//         if (err) throw err;
//     })
// });

battle_schema.method('updateHP', async function (obj) {
    return await this.updateOne({
        _id: obj._id
    }, opj);
});

battle_schema.static('getAllBattles', async function () {
    return await this.find({}, (err, res) => {
        if (err) throw err;
    });
});

/************* Export Schemas *************/

//let Pokemons = mongoose.model('pokemonstests', poke_scheme);
let Pokemons = mongoose.model('pokemons', poke_scheme);
let Poke_Stats = mongoose.model('statistics', stats_scheme);
let Attacks = mongoose.model('pokemonattacks', attacksType_scheme);
let Users = mongoose.model('users', user_schema);
let Battles = mongoose.model('battle', battle_schema);


module.exports = {
    Pokemons,
    Attacks,
    Users,
    Battles
};