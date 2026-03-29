// let score = "33abc"

// const {score} = req.
// console.log(typeof score); // string
// console.log(typeof(score)); // string

// let valueInNumber = Number(score)
// console.log(typeof valueInNumber); // number
// console.log(valueInNumber);  //NaN


// "33" => 33
// "abc" => NaN
// true =>1; false => 0

// let isLoggedIn =true

// let booleanIsloggedIn = Boolean(isLoggedIn)
// console.log(booleanIsloggedIn);  //true

// let isLoggedIn = ""

// let booleanIsloggedIn = Boolean(isLoggedIn)
// console.log(booleanIsloggedIn);  //false




// 1 => true ; 0 => false
// "" => false
// "guru" => true


// let someNUmber = 33

// let stringNumber = String(someNUmber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

//*****************  Operations **************

let value = 3
let negvalue = -value
// console.log(negvalue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

// let str1 = "hello"
// let str2 = "guru"
// let str3 = str1+ str2
// console.log(str3);  // hello guru

// console.log("1"+2); //12
// console.log(1+"2");  // 12
// console.log("1"+2+2); //122
// console.log(1+2+"2");  //32

// console.log((3+4) * 5 % 2);

//  console.log(+true); // 1

//  console.log(true+); // error

// console.log(+"");

// let num1,num2,num3
// num1 = num2 = num3 = 2+2

// let gameCounter = 100
// gameCounter++; //101 prefix 
// console.log(gameCounter); 


/*Undefined	 -Throw a TypeError exception.
Null   -	Throw a TypeError exception.
Boolean- 	Return 1n if prim is true and 0n if prim is false.
BigInt	 -Return prim.
Number	-Throw a TypeError exception.
String	
1. Let n be StringToBigInt(prim).
2. If n is undefined, throw a SyntaxError exception.
3. Return n.
Symbol	Throw a TypeError exception. */

 
 let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"





