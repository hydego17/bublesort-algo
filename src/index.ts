import { Sorter } from "./Sorter";

import { NumbersCollection } from "./NumbersCollection";
import { CharCollection } from "./CharCollection";

// Declare some variables to sort

const numbersCol = new NumbersCollection([10, -5, 2, -3, 1, 7]);
const someString = new CharCollection("Hydego");

// Number Sorting
console.log("Before: ", numbersCol.data);
const sortNum = new Sorter(numbersCol);
sortNum.sort();
console.log("After: ", numbersCol.data);

console.log("============================");

// String Sorting
console.log("Before: ", someString.data);
const sortString = new Sorter(someString);
sortString.sort();
console.log("After: ", someString.data);

console.log("============================");
