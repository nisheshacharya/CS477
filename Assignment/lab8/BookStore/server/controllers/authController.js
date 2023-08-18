const User = require('../models/user');
const jwt = require('jsonwebtoken');

const privateSecret = 'MSD-CS477';

exports.login = async (req, res, next) => {
    const user = await User.findOne(req.body);
    if (user) {
        const token = jwt.sign({ username: user.username, role: user.role }, privateSecret);
        res.status(200).json({ token: token })
    } else {
        res.status(401).json({ error: 'username or password is invalid' });
    }

}

exports.authorize = (req, res, next) => {
    const authorization = req.headers.authorization;
    if (authorization) {
        const token = authorization.split(" ")[1];
        jwt.verify(token, privateSecret, (err, user) => {
            if (err) {
                res.status(403).json({ error: "Not authorized" });
            } else {
                next();
            }
        })
    } else {
        res.status(401).json({ error: "Login required" });
    }
}