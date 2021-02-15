const app = require('../index');
const { createServer } = require('http');

const port = process.env.PORT || 5000;

const server = createServer(app);

server.listen(port, () => {
    console.log(`listen...${port}`);
});

