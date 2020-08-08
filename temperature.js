const { board } = require('./connection')
const { Thermometer } = require("johnny-five");

const thermometer = () => {
    board.on("ready", () => {
        const thermometer = new Thermometer({
            controller: "DS18B20",
            pin: "7"
        });

        thermometer.on("change", () => {
            const { celsius, fahrenheit, kelvin } = thermometer;
            console.log("Thermometer");
            console.log("  celsius      : ", celsius);
            console.log("  fahrenheit   : ", fahrenheit);
            console.log("  kelvin       : ", kelvin);
            console.log("--------------------------------------");
        });
    });
}


module.exports = { thermometer }
