class Developer {
    
    // ------------------
    // private firstName:string;
    // private lastName:string;

    // constructor(firstName:string,lastName:string){
    //     this.firstName=firstName;
    //     this.lastName=lastName;
    // }
    // ------------------

    // Shorthand by Typescript
    // 1. firstName and lastName as a member variable
    // 2. assign values in the member variable 

    // create public member variables
    // constructor(public firstName:string,public lastName:string){}
    // same for protected
    
    constructor(private firstName:string,private lastName:string){}

    set_firstName(firstName:string){
        this.firstName = firstName;
    }
    set_lastName(lastName:string){
        this.lastName = lastName;
    }
}

class Web_Developer extends Developer{
    projectsDone: number;
    set_projectsDone(projectsDone:number){
        this.projectsDone = projectsDone;
    }
}

// var aWeb_Developer = new Web_Developer();
// aWeb_Developer.set_firstName('Gaurav');
// aWeb_Developer.set_lastName('Saxena');
// aWeb_Developer.set_projectsDone(7);
// console.log(aWeb_Developer);

// Since member variables are private
// bWeb_Developer.firstName='Mayank';
// bWeb_Developer.lastName='Khandelwal';


var bWeb_Developer = new Web_Developer('Gaurav','Saxena');
var cWeb_Developer = new Web_Developer('Yash','Sharma');

console.log(bWeb_Developer);
console.log(cWeb_Developer);
