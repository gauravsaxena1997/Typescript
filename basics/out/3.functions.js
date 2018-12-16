//1 typing in fn
// var add = (a:number,b:number) => a+b;
//2 optional
// var add = (a:number,b:number,c?:number) => a+b;
//3 optional and default
var add = function (a, b, c) {
    if (c === void 0) { c = 0; }
    return a + b + c;
};
//4 specifying return type
var add = function (a, b, c) {
    if (c === void 0) { c = 0; }
    return a + b + c;
};
function add1(a, b) {
    return a + b;
}
var sum = add(3, 5);
var sum1 = add1(123, 'gaurav');
console.log(sum);
console.log(sum1);
