const accountId=144553
let accountEmail="swagatika@gmail.com"
var accountpassword="12345"
accountcity="jaipur"
let accountstate;
// accountId=2 //not allowed in js
/*
don't use var
beacuse of issue in block scope and functional scope
*/
accountEmail="sam@gmail.com"
accountpassword="2121212"
accountcity="cuttack"
console.log(accountId);
console.table([accountEmail,accountId,accountpassword,accountcity,accountstate])

