const { connection, connect } = require('mongoose');

connect(
    process.env.MONGODB_URL || 'mongodb://127.0.0.1:27017/Cyber_Store', 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // SECRET_KEY: 'some very secret key',
    }
);


module.exports = connection;

// MN