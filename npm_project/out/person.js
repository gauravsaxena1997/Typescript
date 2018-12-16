"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person() {
        var _this = this;
        this.getfullname = function () { return console.log(_this.firstName + ' ' + _this.lastName); };
    }
    return Person;
}());
exports.Person = Person;
