function foo<T>(arg:T): T{
    return arg;
}
var a= foo(1);

class Person{
    constructor(private firstName:string,private lastName:string){

    }
}

class Manager extends Person{

}
class Admin extends Person{

}
let manager = new Manager('a','s');
let admin = new Admin('ss','ss');

function personEcho<T extends Person>(person:T):T{
    return person;
}

var foo1 = personEcho(admin);
var foo2 = personEcho(manager);
