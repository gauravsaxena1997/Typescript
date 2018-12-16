"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var person_1 = require("./person");
var _ = __importStar(require("lodash"));
var aPerson = new person_1.Person();
aPerson.firstName = 'Gaurav';
aPerson.lastName = "Saxena";
aPerson.getfullname();
var myArr;
myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(_.reverse(myArr));
