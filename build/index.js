"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var NumbersCollection_1 = require("./NumbersCollection");
var CharCollection_1 = require("./CharCollection");
// Declare some variables to sort
var numbersCol = new NumbersCollection_1.NumbersCollection([10, -5, 2, -3, 1, 7]);
var someString = new CharCollection_1.CharCollection("Hydego");
// Number Sorting
console.log("Before: ", numbersCol.data);
var sortNum = new Sorter_1.Sorter(numbersCol);
sortNum.sort();
console.log("After: ", numbersCol.data);
console.log("============================");
// String Sorting
console.log("Before: ", someString.data);
var sortString = new Sorter_1.Sorter(someString);
sortString.sort();
console.log("After: ", someString.data);
console.log("============================");
