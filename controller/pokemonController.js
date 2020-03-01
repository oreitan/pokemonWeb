const Pokemons = require('../database/connector').Pokemons;
const mongoose = require('mongoose');
const errHandler = require('../errorHandler/errorHandler.js');
class PokemonController {

    // static create = async(req,res) => {
    //     asyncForEach(req.body , async (body) => {

    static async create(req, res) {
        try {
            for(let i = 0 ; i < req.body.length ; ++i){
            

                if (!req.body[i].pokedex_number || !req.body[i].name || !req.body[i].classfication || !req.body[i].type1 || !req.body[i].generation || !req.body[i].weight_kg || !req.body[i].height_m) throw {
                    status: 404,
                    message: `Missing Pokemon # ${req.body[i].pokedex_number} Information try again`
                };
                else if (!req.body[i].attack || !req.body[i].defense || !req.body[i].sp_attack || !req.body[i].sp_defense || !req.body[i].speed || !req.body[i].hp) throw {
                    status: 404,
                    message: `Missing Pokemon # ${req.body[i].pokedex_number} Stats try again`
                };

                else if (req.body[i].bug == undefined || !req.body[i].dark == undefined || !req.body[i].dragon == undefined || !req.body[i].electric == undefined || !req.body[i].fairy == undefined || !req.body[i].fight == undefined || !req.body[i].fire == undefined || !req.body[i].flying == undefined || !req.body[i].ghost == undefined || !req.body[i].grass == undefined || !req.body[i].ground == undefined || !req.body[i].ice == undefined || !req.body[i].normal == undefined || !req.body[i].poison == undefined || !req.body[i].psychic == undefined || !req.body[i].rock == undefined || !req.body[i].steel == undefined || !req.body[i].water == undefined) throw {
                    status: 404,
                    message: `Missing # ${req.body[i].pokedex_number} Typing Advantages try again`
                };

                else if (!req.body[i].img_front || !req.body[i].img_back || !req.body[i].ico || !req.body[i].avatar) throw {
                    status: 404,
                    message: `Missing Pokemon # ${req.body[i].pokedex_number} Images try again`
                };

                let pokemon = new Pokemons({
                    pokedex_number: req.body[i].pokedex_number,
                    name: req.body[i].name,
                    name_lower: req.body[i].name,
                    classfication: req.body[i].classfication,
                    type1: req.body[i].type1

                });

                if (req.body[i].type2) {
                    pokemon.type2 = req.body[i].type2;
                }

                if (req.body[i].generation) {
                    if (req.body[i].generation > 0)
                        pokemon.generation = req.body[i].generation;
                    else
                        throw {
                            status: 404,
                            message: 'Invalid generation number'
                        };
                }

                if (req.body[i].weight_kg) {
                    if (req.body[i].weight_kg > 0)
                        pokemon.weight_kg = req.body[i].weight_kg;
                    else
                        throw {
                            status: 404,
                            message: 'Invalid weight'
                        };
                }

                if (req.body[i].height_m) {
                    if (req.body[i].height_m > 0)
                        pokemon.height_m = req.body[i].height_m;
                    else
                        throw {
                            status: 404,
                            message: 'Invalid height'
                        };
                }

                if (req.body[i].attack && req.body[i].defense && req.body[i].sp_attack && req.body[i].sp_defense && req.body[i].speed && req.body[i].hp) {
                    if (req.body[i].attack > 0 && req.body[i].defense > 0 && req.body[i].sp_attack > 0 && req.body[i].sp_defense > 0 && req.body[i].speed > 0 && req.body[i].hp > 0) {
                        var stats = {
                            "attack": req.body[i].attack,
                            "defense": req.body[i].defense,
                            "sp_attack": req.body[i].sp_attack,
                            "sp_defense": req.body[i].sp_defense,
                            "speed": req.body[i].speed,
                            "hp": req.body[i].hp
                        };
                        pokemon.stats = stats;

                    }
                    else
                        throw {
                            status: 404,
                            message: 'Invalid stats'
                        };
                }

                if (req.body[i].img_front && req.body[i].img_back && req.body[i].ico && req.body[i].avatar) {
                    var images = {
                        "front": req.body[i].img_front,
                        "back": req.body[i].img_back,
                        "icon": req.body[i].ico,
                        "avatar": req.body[i].avatar
                    };
                    pokemon.images = images;
                }

                if(req.body[i]){
                    if (req.body[i].bug >= 0 && req.body[i].dark >= 0 && req.body[i].dragon >= 0 && req.body[i].electric >= 0 && req.body[i].fairy >= 0 && req.body[i].fight >= 0 && req.body[i].fire >= 0 && req.body[i].flying >= 0 && req.body[i].ghost >= 0 && req.body[i].grass >= 0 && req.body[i].ground >= 0 && req.body[i].ice >= 0 && req.body[i].normal >= 0 && req.body[i].poison >= 0 && req.body[i].psychic >= 0 && req.body[i].rock >= 0 && req.body[i].steel >= 0 && req.body[i].water) {
                        var weaknesses = {
                            "bug": req.body[i].bug,
                            "dark": req.body[i].dark,
                            "dragon": req.body[i].dragon,
                            "electric": req.body[i].electric,
                            "fairy": req.body[i].fairy,
                            "fight": req.body[i].fight,
                            "fire": req.body[i].fire,
                            "flying": req.body[i].flying,
                            "ghost": req.body[i].ghost,
                            "grass": req.body[i].grass,
                            "ground": req.body[i].ground,
                            "ice": req.body[i].ice,
                            "normal": req.body[i].normal,
                            "poison": req.body[i].poison,
                            "psychic": req.body[i].psychic,
                            "rock": req.body[i].rock,
                            "steel": req.body[i].steel,
                            "water": req.body[i].water
                        };
                        pokemon.weaknesses = weaknesses;

                    }
                    else{
                        throw {
                            status: 404,
                            message: 'Invalid stats'
                        };
                    }
                }

                let obj = await pokemon.exists();
                //console.log(obj,pokemon);
                if (obj)
                    throw {
                        status: 409,
                        message: 'A Pokemon with same id already exists'
                    };

                await pokemon.save();
            }

            res.status(200).send(`Pokemon Birthed Successfully`);

            }catch (err) {
            errHandler.Error(res, err);
        };
    }


    



    static async read(req, res) {
        try {
            console.log("test");
            //console.log(req.params.pokedex_number);
           // this.checkID(req.params._id);
            let obj = await Pokemons.getPokemon(req.params.pokedex_number);
            console.log(obj);
            if (!obj) throw {
                status: 204,
                message: 'There is no pokemon with that id or pokedex number'
            };
            res.status(200).json(obj);
        } catch (err) {
            errHandler.Error(res, err);
        }
    }

    
    static async readAll(req, res) {
        try {
            let obj = await Pokemons.getPokemons();
            if (!obj || obj.length == 0) throw {
                status: 204,
                message: 'There are no pokemons'
            };
            res.status(200).json(obj);
        } catch (err) {
            errHandler.Error(res, err);
        }
    }



    static async delete(req, res) {
        try {
            this.checkID(req.params._id);
            let obj = await Pokemons.getPokemon(req.params._id);
            if (!obj) throw {
                status: 204,
                message: 'The pokemon doesnt exist'
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



    static checkID(id) {
        if (!mongoose.Types.ObjectId.isValid(id)) throw {
            status: 403,
            message: 'Invalid Id'
        };
    }



}

module.exports = PokemonController;