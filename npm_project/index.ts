import {Person} from './person';
import * as _ from 'lodash';

let aPerson  = new Person();

aPerson.firstName='Gaurav';
aPerson.lastName="Saxena";
aPerson.getfullname();

let myArr:number[];
myArr=[1,2,3,4,5,6,7,8,9];
console.log(_.reverse(myArr));
