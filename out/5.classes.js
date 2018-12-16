"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    // can't overload constructor
    function Person(firstName, lastName) {
        var _this = this;
        // methods
        this.getfullname = function () { return _this.firstName + ' ' + _this.lastName; };
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return Person;
}());
exports.Person = Person;
// var aPerson:Person = new Person();
var aPerson = new Person('Gaurav', 'Saxena');
// aPerson.firstName='Gaurav';
// aPerson.lastName='Saxena';
// console.log(aPerson);
console.log(aPerson.getfullname());
