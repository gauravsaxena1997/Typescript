class Human {
    firstName:string;
    lastName:string;
    public greet(){
        console.log('Hi there !');
    }
}

class Programmer extends Human {
    greet = () => console.log('Hello World !');

    // call greet() of this class
    // greetAsNormalHuman = () => this.greet();

    // call greet() of superclass
    greetAsNormalHuman = () => super.greet();
}

var aProgrammer = new Programmer();

// polymorphism
var anotherProgrammer:Human = new Programmer();

aProgrammer.greetAsNormalHuman();
anotherProgrammer.greet();