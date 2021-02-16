require('dotenv').config();

module.exports = {
    server_port: 5000,
    db_url: `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASS}@node-logic.xdph6.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`,
    agenda: {
        dbCollection: process.env.AGENDACOLLECTION
    }

}