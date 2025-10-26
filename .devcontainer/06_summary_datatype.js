

//primitive
//7 types:string,number,boolean,null,undefiend.symbol,bigInt
const score=100
const scorevalue=100.3
const isloggedIn=false
const outsidetemp=null
let userEmail;

const id=Symbol('123')
const onthoerid=Symbol('123')
console.log(id==onthoerid)//false because these value are same but not adress

const bigNUmber=34567456437384745738388458n

//refernce
//array,object,function
const arr=["swag","luck","kutta"]//array
let myobj= {
    name:"Swag ",
    age:22,
    rollno:24654
}
const myfunction = function(){
    console.log("hello world");
}
//how to know which datatype is?
console.log(typeof score)//number=>number
console.log(typeof isloggedIn)//boolean==>boolean
console.log(typeof outsidetemp)//null==>object
console.log(typeof myfunction)//function==>function/obect function
console.log(typeof bigNUmber)//bigint==>bigint




