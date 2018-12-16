var Software = /** @class */ (function () {
    function Software(version) {
        this.version = version;
    }
    return Software;
}());
var Photoshop = new Software(8.01);
console.log(Photoshop.version);
// Photoshop.version = x
// readonly modifier can only be assigned while 
// 1.declaring
// 2.by the constructor
