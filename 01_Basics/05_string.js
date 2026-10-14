const name = "Kanhaiya "
const repoCount = 5

// console.log(name + repoCount + " repo")

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const newString = new String('thisIsString')

console.log(typeof(newString));
console.log(newString[0]);
console.log(newString.__proto__);
console.log(newString.length);
console.log(newString.toLowerCase());
console.log(newString.toUpperCase());
console.log(newString.charAt(3));
console.log(newString.indexOf('n'))
// console.log(newString)
const anotherNewString_1 = newString.substring(0,4)
console.log(anotherNewString_1)

const anotherNewString_2 = newString.slice(-8,5)
console.log(anotherNewString_2)

const anotherNewString_3 = "     kanhaiya   "
console.log(anotherNewString_3)
console.log(anotherNewString_3.trim())

const anotherNewString_4 = "https://kanhaiya.com"
anotherNewString_4.replace('n','o')
console.log(anotherNewString_4)
console.log(anotherNewString_4.includes('kanh'));
console.log(anotherNewString_4.includes('kaoh'));

const anotherNewString_5 = "jgksg-kcg-jcsgs-keug-ueb"
console.log(anotherNewString_5.split('-'));