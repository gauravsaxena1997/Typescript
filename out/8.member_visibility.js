var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Developer = /** @class */ (function () {
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
    function Developer(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Developer.prototype.set_firstName = function (firstName) {
        this.firstName = firstName;
    };
    Developer.prototype.set_lastName = function (lastName) {
        this.lastName = lastName;
    };
    return Developer;
}());
var Web_Developer = /** @class */ (function (_super) {
    __extends(Web_Developer, _super);
    function Web_Developer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Web_Developer.prototype.set_projectsDone = function (projectsDone) {
        this.projectsDone = projectsDone;
    };
    return Web_Developer;
}(Developer));
// var aWeb_Developer = new Web_Developer();
// aWeb_Developer.set_firstName('Gaurav');
// aWeb_Developer.set_lastName('Saxena');
// aWeb_Developer.set_projectsDone(7);
// console.log(aWeb_Developer);
// Since member variables are private
// bWeb_Developer.firstName='Mayank';
// bWeb_Developer.lastName='Khandelwal';
var bWeb_Developer = new Web_Developer('Gaurav', 'Saxena');
var cWeb_Developer = new Web_Developer('Yash', 'Sharma');
console.log(bWeb_Developer);
console.log(cWeb_Developer);
