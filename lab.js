// STEP 1
var ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log(ages[ages.length-1]-ages[0]);
ages[ages.length]=15;

var average=0;
for(var i = 0;i<ages.length;i++){
    average+=ages[i];
}
average/=ages.length;
console.log(average);



// STEP 2
var names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];

var avgLetters=0;
var stringOfNames ="";
for(var i = 0;i<names.length;i++){
    avgLetters+=names[i].length;
    stringOfNames= stringOfNames+" "+names[i]; // part of 2B
}
avgLetters/=names.length;
console.log(avgLetters);
console.log(stringOfNames);
// STEP 3 How do you access the last element of any array? arr[arr.length-1]
// STEP 4 How do you access the first element of any array? arr[0]

// STEP 5
var namesLengths = [];
for(var i = 0;i<names.length;i++){
    namesLengths[i]=names[i].length;
}

// STEP 6
var sum=0;
for(var i = 0;i<namesLengths.length;i++){
    sum+=namesLengths[i];
}
console.log(sum);

// STEP 7
function concentratedWord(word, n){
    var z="";
    for(var i=0;i<n;i++){
        z=z+word;
    }
    return z;
}
console.log(concentratedWord('hello',3));

//STEP 8
function fullName(firstName,lastName){
    return firstName+" "+lastName;
}
console.log(fullName("Dawyne","Johnson"));



// test arrays
var arr1 =[10,20,30,405,50,60,70,9];
var arr2=[123,6234,123,1,1,1,1,2];

//STEP 9
function sumOfNumbers(z){
    var sum = 0;
    for(var i = 0;i<z.length;i++){
        sum+=z[i];
    }
    return sum>100;
}
console.log(sumOfNumbers(arr1));

//STEP 10
function avgNum(z){
    var sum =0;
    for(var i = 0;i<z.length;i++){
        sum+=z[i];
    }
    return sum/z.length;
}
console.log(avgNum(arr2));

//STEP 11
function compareTo(a,b){
    return avgNum(a)>avgNum(b);
}
console.log(compareTo(arr1, arr2));

//STEP 12
function willBuyDrink(isHotOutside,moneyInPocket){
    return isHotOutside && moneyInPocket>10.5
}
console.log(willBuyDrink(true,10.2));

//STEP 13
function countDown(start,n){
    if(start<n)
        return;
    console.log(start);
    countDown(start-1,n)
}
countDown(10,20);

/*
I created a recursive function that prints a counts down given a paremter of a start number and goes down until n INCLUSIVE. 
*/