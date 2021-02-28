"use strict";
exports.__esModule = true;
var a = 'hello';
console.log(a);
var x = 10;
var y = 20;
var sum;
var title = 'TypeScript Tutorial';
var isBeginner = true;
var total = 10;
var name = 'Vishwas';
var sentence = "My name is " + name;
console.log(sentence);
total = 25;
console.log(total);
var list1 = [1, 2, 3];
var list2 = [5, 6, 7];
console.log(list1);
console.log(list2);
var person1 = ['Chris', 22];
console.log(person1);
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
console.log(c);
var random = 10;
random = 'hello';
var random1 = 'hello';
random1.toUpperCase();
console.log(random1);
var multiType;
multiType = 20;
multiType = true;
function add(num1, num2) {
    if (num2)
        return num1 + num2;
    else
        return num1;
}
var sum1 = add(10, 23);
console.log(sum);
var sum2 = add(5);
console.log(sum2);
function fullName(person) {
    console.log(person.firstName + " " + person.lastName);
}
var p = {
    firstName: "Bruce",
    lastName: "Wayne"
};
fullName(p);
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good Morning " + this.employeeName);
    };
    return Employee;
}());
var emp1 = new Employee('Vishwas');
console.log(emp1.employeeName);
emp1.greet();

// All for learning purposes
