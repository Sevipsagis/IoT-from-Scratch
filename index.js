const { EtherPortClient } = require('etherport-client');
const five = require('johnny-five');
const board = new five.Board({
    port: new EtherPortClient({
        host: '10.0.0.49',
        port: 3030
    }),
    repl: false
});
