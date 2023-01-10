const mongoose = require('mongoose');

mongoose.connect(
    process.env.MONGODB_URL || 'database_URL', 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);


module.exports = mongoose.connect;