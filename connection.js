const { EtherPortClient } = require('etherport-client');
const five = require('johnny-five');

const board = new five.Board({
    port: new EtherPortClient({
        host: '192.168.1.107',
        port: 3030
    }),
    repl: false
});

module.exports = { board }