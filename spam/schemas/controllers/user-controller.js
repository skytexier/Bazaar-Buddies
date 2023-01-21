const User = require("../../../server/models/User");
const { signToken } = require('../../../server/utils/auth');

function createUser(req, res) {
    User.create(req.body)
        .then((newData) => res.status(200).json(newData))
        .catch((err) => res.status(500).json(err))
}

module.exports = {

};