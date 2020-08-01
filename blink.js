const { board } = require('./connection')
const five = require('johnny-five');

const blink = () => {
    board.on("ready", function () {
        var led = new five.Led(4);
        led.blink(500);
    });
}

module.exports = { blink }
