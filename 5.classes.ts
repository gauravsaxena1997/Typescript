export class Person {
    firstName:string;
    lastName:string;

    // can't overload constructor
    constructor( firstName:string,lastName:string ) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    // methods
    getfullname = () => this.firstName+ ' ' +this.lastName;
}

// var aPerson:Person = new Person();
var aPerson = new Person('Gaurav','Saxena');

// aPerson.firstName='Gaurav';
// aPerson.lastName='Saxena';
// console.log(aPerson);

console.log(aPerson.getfullname());