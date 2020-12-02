"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var NumbersCollection_1 = require("./NumbersCollection");
var CharCollection_1 = require("./CharCollection");
var LinkedList_1 = require("./LinkedList");
// Declare some variables to sort
var numbersColl = new NumbersCollection_1.NumbersCollection([10, -5, 2, -3, 1, 7]);
var someString = new CharCollection_1.CharCollection("Hydego");
// Number Sorting
console.log("\n");
console.log("Number Sorting ");
console.log("---------------");
console.log("Before: ", numbersColl.data);
var sortNum = new Sorter_1.Sorter(numbersColl);
sortNum.sort();
console.log("After: ", numbersColl.data);
console.log("\n");
// String Sorting
console.log("String Sorting ");
console.log("---------------");
console.log("Before: ", someString.data);
var sortString = new Sorter_1.Sorter(someString);
sortString.sort();
console.log("After: ", someString.data);
console.log("\n");
//
// Linked list operation
var someList = new LinkedList_1.LinkedList();
someList.add(55);
someList.add(-15);
someList.add(10);
someList.add(-20);
someList.add(30);
console.log("Linked list Sorting");
console.log("-------------------");
var sortList = new Sorter_1.Sorter(someList);
console.log("Before:");
someList.print();
sortList.sort();
console.log("After:");
someList.print();
console.log("\n");
