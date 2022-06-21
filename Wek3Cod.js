// create a an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93. */
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
function  firstLast() {

    console.log(ages[ages.length - 1]- ages[0]);
};
firstLast();
// Add a new age to your array and repeat the step above to ensure it is dynamic (works for arrays of different lengths).
ages.push(40)
function firstLast() {

    console.log(ages[ages.length -1] - ages[0]);
};
// Use a loop to iterate through the array and calculate the average age. Print the result to the console.
function getAverage(ages){
    let avg = 0;
    for (let i = 0;i<ages.length;i++){
        avg += ages[i];
    }
    return avg/ages.length;
}
console.log(getAverage(ages));
   
//Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

//Use a loop to iterate through the array and calculate the average number of letters per name. Print the result to the console
function getAverage(names){
    let avg = 0;
    for (let i = 0;i<names.length;i++){
        avg += names[i];
    }
    return avg/names.length;
}
console.log(getAverage(names));
//Use a loop to iterate through the array again and concatenate all the names together, separated by spaces, and print the result to the console.
for (let i = 0; i< names.length; i++) {
    console.log(names[i]);
};

//How do you access the last element of any array?
//We access the number or position of the last element of an array by doing the length of the element (total index) minus -1. For example, if the length is 6, the last element will be 6-1 = 5.
 //The last element is always at the position that equals the lenght of the element, considering the first element as number or index 0.
//How do you access the first element of any array?
//We access the first element of an array  by the index 0. In our case, the first element 'Sam' corresponding to index0.

//Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
namesArray = ["Kelly", "Sam", "Kate"] //given this array
nameLengths = [5, 3, 4] //create this new array

function createNumericArray(namesArray) {
    let arrayLength = [];
    for(let i = 0; i< namesArray.length; i++) {
        arrayLength.push(namesArray[i].length);
    }
    return arrayLength;  
}
namesArray = ["Kelly", "Sam", "Kate"]
nameLengths = createNumericArray(namesArray);
console.log(nameLengths);

//Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times
function array1 (word, n) {
    let newArray = word.concat(n);
    return newArray 
}
    console.log('word'+'n'+ 'word'+'n'+'word'+'n');

//Write a function that takes two parameters, firstName and lastName...
function  createFullName (firstName, lastName){
    return firstName + ' ' + lastName;
}
console.log(createFullName ('Kelly', 'Allardice'));

//Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100
function ArrayOfNumber(n) {
    if(ArrayOfNumber >= 100){
    }
    return "true"
} 
console.log("True");
   
//Write a function that takes an array of numbers and returns the average of all the elements in the array.
arryOfNumber = [45, 30, 8, 18, 64, 6,];

function calculateAverage(arrayOfNumber) {
    var total = 0;
    var count = 0;

    arrayOfNumber.forEach(function(item, index) {
        total += item;
        count++;
    });

    return total / count;
}

console.log(calculateAverage(arryOfNumber));

//Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
arr1 =[25, 12, 8, 50, 70];
arr2 =[8, 6, 10];
function getTheGreaterAverage (arr1, arr2){
    if(averageArr1 > averageArr2){
}
 return true;
}
console.log('true');

//Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

function willBuyDrink(isHotOutside, moneyInPocket){
    if ('it is hot outise'){
        console.log('true');
    }
    else if (moneyInPocket>10.50){
        console.log(moneyInpocket)
    }else{
        console.log('true')
}
  }
//Create a function of your own that solves a problem.
function checkMyChild (BinetaMamadou){
    return BinetaMamadou.atHome === "safe";
}
console.log("safe");
//My probleme: I created a function named checkMychild. The purpose is to make sure that my daughter, Bineta and my son Mamadou are safe. 
//And, I made an application that show me, when something happen, if they are at home, that mean they are safe. Otherwise, I need to called help.