const score=10.476
console.log(score)

const number=new Number(100)
console.log(number)//give like a obect
console.log(number.toString())//it's convert o the string
console.log(number.toString().length)//it's the sring length
console.log(number.toFixed(3))//just fixed with add 00 after decimal
console.log(score.toPrecision(4))//Returns a string containing 
// a number represented either in 
// exponential or fixed-point 
// notation with a specified number of digits.
// precision — Number of significant digits. //Must be in the range 1 - 21, inclusive
const hundredes=1000000000
console.log(hundredes.toLocaleString())//use coma and it's comes with us value
console.log(hundredes.toLocaleString('en-IN'))//coma with india's value

// +++++++++++++++++ math ++++++++++++++++++++
console.log(Math);//it;s a object
console.log(Math.abs(-4));//iut's change negative value to posetive value
console.log(Math.round(4.5));//it's just do round of the number
console.log(Math.ceil(4.5));//it's do round of to upper value
console.log(Math.floor(4.5));//it's do round of to lower value
console.log(Math.min(4,6,7,8,9,3));//it's just find the minimum value
console.log(Math.max(4,6,10,1000000000));//it's just find the max value
console.log(Math.sqrt(4));//it's just find the sqrt of the value
console.log(Math.pow(7,2));//it's just find the power of the value
console.log(Math.tan(4));
console.log(Math.random());//random value always give the value betweenn 0 to 9
const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1))+min)


