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