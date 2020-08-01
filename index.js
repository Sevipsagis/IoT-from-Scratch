const { blink } = require('./blink');
const { thermometer } = require('./temperature');

try {
    thermometer(); 
} catch (error) {
    console.log(error);
}
