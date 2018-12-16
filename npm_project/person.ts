export class Person{
    firstName:string;
    lastName:string;
    constructor(){

    }

    getfullname = () => console.log(this.firstName+ ' ' +this.lastName);
}