const mongoose = require('mongoose');
const config = require('../config/index');

module.exports = async () => {
    try {
        console.log(config.db_url);
        const connection = await mongoose.connect(config.db_url, {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: true,
            dbName: 'node-logic'
        });
        return connection.connection.db;
    } catch (err) {
        return console.error(err);
    }
}