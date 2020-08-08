const { blink } = require('./blink');
const { thermometer } = require('./temperature');
const { soilmoisture } = require('./soilmoisture');

try {
    // blink();
    // thermometer(); 
    soilmoisture();
} catch (error) {
    console.log(error);
}