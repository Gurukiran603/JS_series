// primitve 

//7 types : string , Number , boolean , null (ekdum khali) ,
//               undefined ,symbol , BigInt

// const score = 100
// const scoreValue = 100.3

// const isloggedIn = false 
// const outSideTemp = null 
// let userEmail;  // undefined 

// const id = symbol('123') //unique
// const anotherid = symbol('123') 

// console.log(id == anotherid);  // false  

// const bigNumber = 123456789023456789n // bigint 
// console.log(bigNumber);



// Reference (non primitive) 

//array , objects , Functions 

// const heros = ["shaktimAN","IRONMAN"];
// console.log(typeof heros);


// let myObject={
//     name:"guru",
//     age : "21",
// }
// console.log(typeof myObject);



// const myFunction = function(){
//     console.log("gurukiran c s");
// }
// console.log(typeof(myFunction));

// callbyvalue and callbyReference

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//stack(primitive)(value) , Heap(Non-primitive)(refrenece) 

let myyoutube = "csgk"

let anotherName = myyoutube
console.log(anotherName); // csgk

anotherName = "vscode"
console.log(anotherName); // vscode 


let user1 = {
    emial : "user@gmail.com",
    upi : "user@ybl"
};


let user2 = user1

user2.emial = "kiran@gmail.com"

console.log(user1.emial);
console.log(user2.emial);


