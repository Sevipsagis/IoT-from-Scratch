const { EtherPortClient } = require('etherport-client');
const five = require('johnny-five');

const board = new five.Board({
    port: new SerialPort("COM4", {
        baudrate: 9600,
        buffersize: 1
      })
});

module.exports = { board }