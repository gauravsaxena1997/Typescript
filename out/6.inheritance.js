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
var Human = /** @class */ (function () {
    function Human() {
    }
    Human.prototype.greet = function () {
        console.log('Hi there !');
    };
    return Human;
}());
var Programmer = /** @class */ (function (_super) {
    __extends(Programmer, _super);
    function Programmer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.greet = function () { return console.log('Hello World !'); };
        // call greet() of this class
        // greetAsNormalHuman = () => this.greet();
        // call greet() of superclass
        _this.greetAsNormalHuman = function () { return _super.prototype.greet.call(_this); };
        return _this;
    }
    return Programmer;
}(Human));
var aProgrammer = new Programmer();
// polymorphism
var anotherProgrammer = new Programmer();
aProgrammer.greetAsNormalHuman();
anotherProgrammer.greet();
