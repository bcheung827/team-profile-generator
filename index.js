const Turtle = require('./lib/Turtle')

const writer = require('./src/template');

console.log(writer("Turtles Rock!", new Turtle(5).getTurtles()));