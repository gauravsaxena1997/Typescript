var Foo = /** @class */ (function () {
    function Foo() {
    }
    Foo.prototype.getfullName = function () {
        return this.firstName + ' ' + this.lastName;
    };
    return Foo;
}());
var aPerson = new Foo();
var someObj = {
    firstName: 'string',
    lastName: 'string',
    other: 10,
    getfullName: function () { return 'string'; }
};
// Duck Typing (structure based typing) : when property matches
aPerson = someObj;
// cannot access the properties whichare not present in the interface
// aPerson.other
