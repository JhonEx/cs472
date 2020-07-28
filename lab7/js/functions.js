//1. myFunctionTest implemented as described
function myFunctionTest(exprected, get) {
    if (exprected == get()) return 'TEST SUCCEEDED';
    else return 'TEST FAILED. Expected ' + exprected + ' found ' + get();
}

// 4. Define a function sum() and a function multiply() that sums and multiplies (respectively) all the
// numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4])
// should return 24.
                  //Using Arrow Function
    let numberArray = [2, 4, 3, 5];
    console.log("Expected output of sum of numberArray([2,4,3,5]) is 14 and  "
        + myFunctionTest(14,  () =>
    numberArray.reduce((sum, item) => sum + item, 0)));


    // //Using Normal Function
    // let sum1 = numberArray.reduce(function (total, item1){
    //     return (total + item1);
    // }, 0);
    //
    // console.log("Expected output of sum of numberArray([2,4,3,5]) is 14 and  "
    //     + myFunctionTest(14,function () {
    //         return sum1;
    // }));


// 5. Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar")
// should return the string "ratset gaj".

    let string = ["jag testar"];
    console.log("Expected output of reverse of string ('jag testar') is ratset gaj and  " +
        myFunctionTest("ratset gaj",  () =>
        string.map((newString) => newString.split("").reverse().join(""))));

// 7. Write a function filterLongWords() that takes an array of words and an integer i and returns the array
// of words that are longer than i.

        //Using Arrow function
let wordsArray = ['cow','bird', 'as', 'elephant'];
console.log("Expected output of filterLongWords(['cow','bird', 'as', 'elephant'], 3) is bird,elephant and  "
    + myFunctionTest(['bird','elephant'],  () =>
    wordsArray.filter((words) =>words.length > 3).toString()));


//                 //using normal function
// let wordsArray1 = ['cow','bird', 'as', 'elephant'];
//
// let filterLongWords1 = wordsArray1.filter(function (words){
//         return words.length > 3;
//     });
//
// console.log("Expected output of filterLongWords(['cow','bird', 'as', 'elephant'], 3) is bird,elephant and  " + myFunctionTest(['bird','elephant'], function () {
//     return filterLongWords1.toString();
// }));






