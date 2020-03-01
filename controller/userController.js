const Users = require('../database/connector').Users;
const errHandler = require('../errorHandler/errorHandler');

class User {
    static async update(req, res) {
        try {
            let obj = await Users.getUser(req.params.id);
            
            if (req.body.battles)
                obj.battles = req.body.battles;
            if (req.body.win)
                obj.win = req.body.win;
            if (req.body.lose)
                obj.lose = req.body.lose;

            let n = await Users.updateUser(obj);

            if (n.nModified == 0)
                res.status(200).send(`Already up to date`);
            else
                res.status(200).send(`Successfully updated`);
        } catch (err) {
            errHandler.Error(res, err);
        }
    };

    static async delete(req, res) {
        try {
            let obj = await Users.getUser(req.params.id);
            let n = await Users.deleteUser(obj.id);
            if (n.deleteCount == 0) throw {
                status: 204,
                message: 'There is nothing to delete'
            };
            res.status(200).send(`Successfully extinct`);
        } catch (err) {
            errHandler.Error(res, err);
        }
    };
};

module.exports = User;