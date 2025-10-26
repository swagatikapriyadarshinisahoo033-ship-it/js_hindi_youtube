const name="hitesh"
const repoCount=50
console.log(name+repoCount+"value");//you can wriote this way but it's not readeble
console.log(`my name is ${name}and  the repo account is ${repoCount} `);

const gamecounter=new String("hitsh-hc-com")
console.log(gamecounter)
console.log(gamecounter[0])//array and posioton 
console.log(gamecounter.__proto__)
console.log(gamecounter.length)//length of the string
console.log(gamecounter.toUpperCase())//to make the string uppercase
console.log(gamecounter.toLowerCase())//to make the string lower case
console.log(gamecounter.charAt(2))//which carcter in this positon
console.log(gamecounter.indexOf('t'))//which in index the charcter is prtesent

const newstring=gamecounter.slice(-8,4)
console.log(newstring);//it's slice the string

const newstring1=gamecounter.substring(0,4)
console.log(newstring1);//(start,end-1)it's output alway in range


const newstring2="   swagatika.   "
console.log(newstring2)
console.log(newstring2.trim())//it's remove the blank s[ace]

const url="https://hitesh.com/hitesh%20choudhry"
console.log(url.replace('%20','_'))//it's just replace it

console.log(url.includes('hitesh'))//it ' indecate hitesh is present or not 
// i when it's present it's show the true 
console.log(gamecounter.split('-',3));//it's just diveds the whole string (separator,limit)

