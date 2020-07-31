
//1. Define a filter function on the String object - Banned words
console.log("Exercise 1: solution")
String.prototype.filter = function (banned) {
    let splitted = this.split(" ");
    return splitted.filter(s => s !== banned).join(" ");
}
console.log("This house is not nice!".filter("not"));

// 2. buuble sort algorithm
console.log(" \n Exercise 2: solution")
Array.prototype.bubbleSort = function () {
    let length = this.length;
    for (let i = (length - 1); i >= 0; i--) {
        for (let j = (length - i); j > 0; j--) {
            if (this[j] < this[j - 1]) {
                let tmp = this[j];
                this[j] = this[j - 1];
                this[j - 1] = tmp;
            }
        }
    }
    return this;
}
console.log([9, 2, 10, 90, 78].bubbleSort());

// 3. To Create an object called Teacher derived from the Person class, and implement a method called
// teach which receives a string called subject, and returns:

console.log(" \n Exercise 3: solution - Teacher Derived")
let Person = function() {};
Person.prototype.initialize = function(name, age){
    this.name = name;
    this.age = age;
};

Person.prototype.teach = function (subject) {
    return this.name + " is now teaching" + subject;
};

const teacher = new Person();
teacher.name = "Micheal Zijlstra";

console.log(teacher.teach(" WAP"));

console.log(" \n Exercise 3: solution - About student course")
Person.prototype.describe = function(){
    return this.name + ", " + this.age + " years old.";
};

let Student = function() {};
Student.prototype = new Person();
Student.prototype.learn = function(subject){
    return (this.name + " just learned " + subject);
};
var student = new Student();
student.initialize("Jhon", 34);
console.log(student.describe());
console.log(student.learn("WAP"));

