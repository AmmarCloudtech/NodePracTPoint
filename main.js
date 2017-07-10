// Import Event Module
var events = require('events');

// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();

// Create an Event Handler Listener 1
var listner1 =  function listner1() {
	console.log('listner1 executed');
}

// Create an Event Handler Listener 1
var listner2 =  function listner2() {
	console.log('listner2 executed');
}	
	
// Bind the connection event with the listner1
eventEmitter.addListener('connection', listner1);

// Bind the connection event with the listner2
eventEmitter.on('connection', listner2);

// Counting total numbers of listeners
var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListeners + " Listener(s) listining to the connection event");

// Fire the connection event
eventEmitter.emit('connection');

// Remove the binding of listener1 function 
eventEmitter.removeListener('connection', listner1);
console.log("Listener1 will not listen to the events now");

// Fire the connection event now
eventEmitter.emit('connection');

// Counting total numbers of listeners again
var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListeners + " listener(s) listening to the connection event");
console.log('Program Ended');	