const mongooseLoader = require('./mongoose');
const dependencyInjecorLoader = require('./dependencyInjector');

module.exports = async (app) => {
    const mongoConnection = await mongooseLoader();

    const userModel = {
        name: 'userModel',
        model: require('../models/User')
    }
    const { agenda } = await dependencyInjecorLoader({
        mongoConnection
    });

}