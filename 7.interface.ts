interface Person{
    firstName:string;
    lastName:string;
    getfullName():string;
}

class Foo implements Person{
    firstName: string;    
    lastName: string;
    getfullName(): string {
        return this.firstName+' '+this.lastName;
    }
}

let aPerson:Person   = new Foo();

let someObj = {
    firstName:'string',
    lastName:'string',
    other:10,
    getfullName:()=>'string'
};

// Duck Typing (structure based typing) : when property matches
aPerson = someObj;

// cannot access the properties whichare not present in the interface
// aPerson.other
