// play this: https://www.youtube.com/watch?v=d-diB65scQU

// code away!
const express = require('express');
const server = express();

const actionRoutes = require("./data/routers/actions.js");
const projectRoutes = require("./data/routers/projects.js");

server.use(express.json());
server.use('/actions', actionRoutes);
server.use('/projects', projectRoutes);

server.listen(5000, () =>
console.log('Server running on http://localhost:5000')
);