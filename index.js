// play this: https://www.youtube.com/watch?v=d-diB65scQU

// code away!
const express = require('express');
const server = express();

const actionRoutes = require("./routers/actions.js");
const projectRoutes = require("./routers/projects.js/index.js");

server.use(express.json());
server.use('/actions', actionRoutes);
server.use('/posts', postRoutes);

const port = process.env.PORT || 5000;

server.listen(port, () =>
console.log('Server running on http://localhost:5000')
);