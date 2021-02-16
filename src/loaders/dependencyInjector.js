const agendaFactory = require('./agenda');

module.exports = ({ mongoConnection }) => {

    try {
        const agendaInstance = agendaFactory(mongoConnection);

        return { agenda: agendaInstance };
    } catch (err) {
        throw err;
    }
}