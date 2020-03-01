const Attacks = require('../database/connector').Attacks;
const mongoose = require('mongoose');
const errHandler = require('../errorHandler/errorHandler.js');


class AttacksController {
    static async create(req, res) {
        try {
            for (let i = 0; i < req.body.length; ++i) {
                 if (!req.body[i].pokeType || !req.body[i].name || !req.body[i].hp || !req.body[i].avail_total) throw {
                    status: 404,
                    message: `Missing Attack Information try again`
                };
                else if (!req.body[i].typeIcon) throw {
                    status: 404,
                    message: `Missing Type icon image URL try again`
                };


                let attack = new Attacks({
                    pokeType: req.body[i].pokeType,
                    name: req.body[i].name,
                    hp: req.body[i].hp,
                    avail_total: req.body[i].avail_total,
                    typeIcon: req.body[i].typeIcon

                });

                if (req.body[i].strength) {
                    if (req.body[i].strength < 2 && req.body[i].strength >= 0)
                        attack.strength = req.body[i].strength;
                    else
                        throw {
                            status: 404,
                            message: 'strength must be between 0-1'
                        };
                }

                let obj = await attack.exists();

                console.log(obj, attack);

                if (obj.length != 0)
                    throw {
                        status: 409,
                        message: 'An attack with the same name already exists'
                    };

                await attack.save();
            }
            res.status(200).send(`Attack created Successfully`);
        } catch (err) {
            console.log(err);
            errHandler.Error(res, err);
        };

    }


    static async readAll(req, res) {
        try {
            let obj = await Attacks.getAttacks();
            if (!obj || obj.length == 0) throw {
                status: 204,
                message: 'There are no attacks'
            };
            res.status(200).json(obj);
        } catch (err) {
            errHandler.Error(res, err);
        }
    }

    

    



}

module.exports = AttacksController;