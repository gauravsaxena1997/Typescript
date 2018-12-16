//1. implicit typing in var dec.
var a = 20;
var b = 'ksdvbsdkdv';
var c = true;
// a = true;
//2. implicit typing in fn calls
// var greet = ():string => 'Good Afternoon' ;
// no need to specify return type
var greet = function () { return 'Good Afternoon'; };
var greetings = greet();
// greetings = true;
//3. implicit typing works only if assignment is on the same line.
var greetings1;
greetings1 = greet();
greetings1 = true;
