const { blink } = require('./blink');
const { thermometer } = require('./temperature');

try {
    blink();
    thermometer(); 
} catch (error) {
    console.log(error);
}