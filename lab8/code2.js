"use strict";

// Exercise 1
// Define a filter function on the String object. The function accepts an array of strings that specifies a list of banned words.
// The function returns the string after removing all the banned words. Example:
// console.log("This house is not nice!".filter(['not']));
// Output: "This house is nice!".

String.prototype.filter = function(badWords) {
    let arr = this.split(" ");
    let newArr = arr.filter(s => !badWords.includes(s));
    let result = newArr.toString().replace(/,/g, " ");
    console.log(result);
    return result;
}

// Exercise 2
// Write a BubbleSort algorithm on the Array object. Bubble sort is a simple sorting algorithm that works by repeatedly
// stepping through the list to be sorted,
// Example: [6,4,0,3,-1,1].bubbleSort();
// Output: [-2,0,1,3,4,6]

Array.prototype.bubbleSort = function(){
    let arr = this;
    let len = arr.length;
    for (let i = 0; i < len ; i++) {
        for(let j = 0 ; j < len - i - 1; j++){ // this was missing
            if (arr[j] > arr[j + 1]) {
                // swap
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j + 1] = temp;
            }
        }
    }
    console.log(arr);
    return arr;
}

// Exercise 3:
// The last exercise for today comes from: https://www.learn-js.org/en/Inheritance
// Create an object called Teacher derived from the Person class, and implement a method called teach
// which receives a string called subject, and returns:
// [teacher's name] is now teaching [subject]

var Person = function() {};

Person.prototype.initialize = function(name, age)
{
    this.name = name;
    this.age = age;
}

var Teacher = function() {};
Teacher.prototype = new Person();

Teacher.prototype.teach = function(subject){
    var result = this.name + " is now teaching " + subject;
    console.log(result);
    return result;
}

var teacher = new Teacher();

teacher.initialize("Adam", 45);
// teacher.teach("Inheritance");