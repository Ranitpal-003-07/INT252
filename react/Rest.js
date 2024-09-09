// let a,b,rest;
// [a,b]=[10,20];
// console.log(a);
// console.log(b);

//Rest Operator
// [a,b,...rest]=[10,20,30,40,50,60];
// console.log(rest);

//object constructing

// const person={name:"Ranit",age:21,city:"Kolkata"};
// const {name,...rest}=person;
// console.log(name);
// console.log(rest);

//Binding with array

// const array=[1,2,3,4,5,6];
// const [first,...rest]=array;

// console.log(first);
// console.log(rest);

//Binding with Objects

// const person ={name:"Ranit",age:21,city:"Kolkata"};
// const {name,...rest}=person;
// console.log(person.name);
// console.log(rest);

//Function Biniding 


// function logname(a,...b){
//     console.log(a);
//     console.log(b);
// }

// logname("Ranit","Ayan","Subho","Rajat");

//Rest creates new Array

// const arr=[1,2,3,4];
// const [a,...b]=arr;

// console.log(b);
// b.push(5);
// b.push(6);
// console.log(b);

//Shallow copy

// const obj={a:1,b:{c:2}};
// const {a,...rest}=obj;

// console.log(rest.b.c);
// rest.b.c=3;

// console.log(rest.b.c);

//creating element with one element
//  let evenNumber=Array.of(2);
//  console.log(evenNumber);
//  console.log(evenNumber.length);

 //creating an empty array with size 2;
//  let numbers=Array(2);
//  console.log(numbers.length);
//  console.log(numbers);

//filling with same values;
// let filledArray=Array(4).fill(1);
// console.log(filledArray);

//Filter function

// const numbers=[1,2,3,4,5,6,7,8];
// let evenNumber=numbers.filter(n=>n%2==0);
// console.log(evenNumber);

//Find function it will find the first value matching the condition

// const numbers =[8,12,4,123,32];
// const found=numbers.find(n=>n>10);
// console.log(found);

//used to find the index of the first element satisfying the condition

// const numbers=[1,13,321,3,4,54];
// const index=numbers.findIndex(n=>n>10);
// console.log(index);

//forEach function
// const numbers=[1,2,3,4,5,6];
// numbers.forEach(n=> console.log(n*2));

//from method

const str="Tu garib hai";
const chars=Array.from(str);
console.log(chars);
