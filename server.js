const ronin = require('ronin-server');
const mocks = require('ronin-mocks');
const database = require('ronin-database');

const server = ronin.server();

database.connect(process.env.CONNECTIONSTRING);
server.use('/foo', (req, res) => res.json({ foo: 'bar' }));
server.use('/', mocks.server(server.Router(), false, true));
server.start();
