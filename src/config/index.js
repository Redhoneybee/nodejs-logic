const dotenv = require('dotenv').config();

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if (dotenv.error) {
    throw new Error("Could't find .env find");
}



console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === "development") {
    console.log('dev');
    module.exports = require('./dev');
} else if (process.env.NODE_ENV === "production") {
    console.log('prod');
    module.exports = require('./prod');
}