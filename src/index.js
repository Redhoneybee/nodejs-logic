const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static(path.join(__dirname, "public")))

const indexRouter = require('./routes/index');
const authRouter = require('./routes/auth');

(async function () {
    await require('./loaders/index')(app);
})();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', indexRouter);
app.use('/', authRouter);


module.exports = app;
