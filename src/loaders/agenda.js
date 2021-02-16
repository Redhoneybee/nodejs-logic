const Agenda = require('agenda');
const config = require('../config/index');

module.exports = ({ mongoConnection }) => {
    return new Agenda({
        mongo: mongoConnection,
        // db: { collection: config.agenda.dbCollection }
    });

}