console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === "development") {
    console.log('dev');
    module.exports = require('./dev');
} else if (process.env.NODE_ENV === "production") {
    console.log('prod');
    module.exports = require('./prod');
}