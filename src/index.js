const express = require('express');
const path = require('path');



const app = express();

app.use(express.static(path.join(__dirname, "public")))

const indexRouter = require('./routes/index');

(async function () {
    await require('./loaders/index')(app);
})();

app.use('/', indexRouter);

module.exports = app;
