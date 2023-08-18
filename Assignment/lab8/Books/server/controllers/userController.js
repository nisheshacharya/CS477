const User = require('../models/user');

exports.signup = async(req, res, next) => {
    const addUser = await new User(req.body).save();
    res.status(201).end();
}