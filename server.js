const express = require('express');
const server = express();

const PORT = 3000;

server.use(express.static(`${__dirname}/dist`));

server.listen(PORT, () => {
    console.log(`Server start, port: ${PORT}!`);
});