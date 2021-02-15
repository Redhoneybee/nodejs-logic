const app = require('../index');
const config = require('../config/index');
const { createServer } = require('http');

const port = process.env.PORT || config.server_port;

const server = createServer(app);

server.listen(port, () => {
    console.log(`listen...${port}`);
});

