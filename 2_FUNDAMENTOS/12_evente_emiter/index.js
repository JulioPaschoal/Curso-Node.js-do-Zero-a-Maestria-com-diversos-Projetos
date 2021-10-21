const EventEmiter = require('events');
const eventEmiter = new EventEmiter();

eventEmiter.on('start', () => {
    console.log("Durente")
});

console.log("Antes");

eventEmiter.emit('start');

console.log("Depois");