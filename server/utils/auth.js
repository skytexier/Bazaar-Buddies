const jwt = require('jsonwebtoken');

// Setting token secret and expiration date
const secret = 'pineapplepizzaisgood';
const expiration = '1h';

module.exports - {
    // Middleware authenticated routes 
    authMiddleware: function (req, res, next){
        // allow token to be sent thru query or header
        let token = req.body.token || req.query.token || req.headers.authorization;

        if (req.headers.authorization){
            token = token.split(' ').pop().trim();
        }

        console.log('token', token)

        if (!token) {
            return res.status(400).json({message: 'Yo you need a token bro, sign up'})
        }

        // verify token and get user data from it
        try {
            const { data } = jwt.verify(token, secret, {maxAge: expiration});
            req.user = data;
        } catch {
            console.log('Invalid token yo');
            return res.status(400).json({message: 'Yo you need a token bro, sign up'})
        }

        return req;
    },

    signToken: function ({ name, email, _id}){
        const payload = {name, email, _id};
        return jwt.sign({data: payload}, secret, {expiresIn: expiration})
    },
};
