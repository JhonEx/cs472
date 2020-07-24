

function myFunctionTest(expected, found){
    if(expected === found){
        return `- Test Succeeded with output ${found}`
    }else{
        return `Test Failed. Expected ${expected} found ${found} ` 
    }
}

console.log("Expected output of max (10, 5) is 10 " + myFunctionTest(10, max(10,5)));
console.log("Expected output of maxOfThree (10, 5, 70) is 70 " + myFunctionTest(70, maxOfThree(10,5,70)));
console.log("Expected output of isVowel(e) is true " + myFunctionTest(true, isVowel("e")));
console.log("Expected output of sum(1,2,3,4) is 10 " + myFunctionTest(10, sum(1,2,3,4)));
console.log("Expected output of multiply(1,2,3,4) is 10 " + myFunctionTest(24, multiply(1,2,3,4)));
console.log("Expected output of reverse(jag testar) is ratset gaj " + myFunctionTest("ratset gaj", reverse('jag testar')));
console.log("Expected output of findLongestWord(['hello','hi', 'software']) is 8 " + myFunctionTest(8, findLongestWord(['hello','hi', 'software'])));
console.log("Expected output of filterLongWords(['hello','hi', 'software']) is software " + myFunctionTest("software", filterLongWords(['hello','hi', 'software'], 5)));


function max(num1, num2){
    if(num1 > num2) return num1;
    return num2;
}

function maxOfThree(...nums){    
    return Math.max(...nums)   
}

function isVowel(char){
    switch (char){
     case "a":
     case "e":
     case "i":
     case "o":
     case "u":
     return true;   
     
     default: 
     return false;
    }
}

function sum(...nums){
    let res = nums.reduce( (x,y) =>{         
        return x + y;
    })
    return res;
}

function multiply(...nums){
    let res = nums.reduce( (x,y) =>{         
        return x * y;
    })
    return res;
}

function reverse(str){
    let strReversed = '';
    for (var i = str.length - 1; i >= 0; i--) {
        strReversed += str[i];
    } 
    return strReversed;
}

function findLongestWord(words){
    const longest = words.map(x => x.length);
    return Math.max(...longest);
}

function filterLongWords(words, i){   
    const arr = words.filter(x => x.length > i)    
    return arr.toString();
}



