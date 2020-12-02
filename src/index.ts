import { Sorter } from "./Sorter";

import { NumbersCollection } from "./NumbersCollection";
import { CharCollection } from "./CharCollection";
import { LinkedList } from "./LinkedList";

// Declare some variables to sort
const numbersColl = new NumbersCollection([10, -5, 2, -3, 1, 7]);
const someString = new CharCollection("Hydego");

// Number Sorting
console.log("\n");

console.log("Number Sorting ");
console.log("---------------");
console.log("Before: ", numbersColl.data);
const sortNum = new Sorter(numbersColl);
sortNum.sort();
console.log("After: ", numbersColl.data);

console.log("\n");

// String Sorting

console.log("String Sorting ");
console.log("---------------");
console.log("Before: ", someString.data);
const sortString = new Sorter(someString);
sortString.sort();
console.log("After: ", someString.data);

console.log("\n");

//
// Linked list operation

const someList = new LinkedList();
someList.add(55);
someList.add(-15);
someList.add(10);
someList.add(-20);
someList.add(30);

console.log("Linked list Sorting");
console.log("-------------------");

const sortList = new Sorter(someList);
console.log("Before:");
someList.print();

sortList.sort();

console.log("After:");
someList.print();

console.log("\n");
