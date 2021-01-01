const jwt = require('jsonwebtoken');
const jwtSecret = require('../config/config.json').jwtSecret;

module.exports = function(req, res, next) {
    // Get token from header
    const token = req.header('x-auth-token');

    //Check if no token
    if (!token) {
        return res.status(401).json({ msg: 'No token, authorization denied' });
    }

    // Verify token
    try {
        const decode = jwt.verify(token, jwtSecret);

        req.user = decode.user;
        next();
    } catch (e) {
        res.status(401).json({ msg: 'Token is not valid' });
    }
}
