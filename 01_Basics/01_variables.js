const accountId = 144553   //not able to change  
let accountEmail = 'gurukiran@gmail.com'
var accoutPassword = "12345"
accountCity = "mysuru"

//accountId =2 //not allowed

accountEmail="guru@gamil.com"
accoutPassword="123456789"
accountCity = "banglore"

let accountState;        //undefined

console.log(accountId);

/*
prefer not to use var 
because of issue in block scope  and functional scope 
*/

console.table([accountEmail,accountId,accoutPassword,accountCity,accountState]);
