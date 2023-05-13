let num = 42; // num is now a number
num = "bar"; // num is now a string
num = true; // num is now a boolean

const numb = 42; // numb is a number
const result = foo + "1"; // JavaScript coerces numb to a string, so it can be concatenated with the other operand
console.log(result); // 421


console.log(42 / +0); // Infinity
console.log(42 / -0); // -Infinity


let counter = 120;
console.log(typeof(counter)); // "number"

counter = false; 
console.log(typeof(counter)); // "boolean"

counter = "Hi";
console.log(typeof(counter)); // "string"


let van;
console.log(van);        // undefined
console.log(typeof van); // undefined

let obj = null;
console.log(typeof obj); // object


console.log(null == undefined); // true

let price = 200.00; // interpreted as an integer 200


console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // 5e-324


console.log(Number.MAX_VALUE + Number.MAX_VALUE); // Infinity
console.log(-Number.MAX_VALUE - Number.MAX_VALUE); // -Infinity

console.log('a'/2); // NaN;



console.log(NaN/2); // NaN
console.log(NaN == NaN); // false

let message = 'I\'m also a valid string'; // use \ to escape the single quote (')

let s = 'JavaScript';
s[0] = 'j';
console.log(s)


let inProgress = true;
let completed = false;

console.log(typeof completed); // boolean


console.log(Boolean('Hi'));// true
console.log(Boolean(''));  // false

console.log(Boolean(20));  // true
console.log(Boolean(Infinity));  // true
console.log(Boolean(0));  // false

console.log(Boolean({foo: 100}));  // true on non-empty object
console.log(Boolean(null));// false

let emptyObject = {};


let person = {
    firstName: 'John',
    lastName: 'Doe'
}; //object


let contact = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '(408)-555-9999',
    address: {
        building: '4000',
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        country: 'USA'
    }
} //object that holds the another object


console.log(contact.firstName);
console.log(contact.lastName);

console.log(contact.age); // undefined

console.log(contact['phone']); // '(408)-555-9999'
console.log(contact['email']); // 'john.doe@example.com'

//javaScript has the two types :
//primitive types: number, string, boolean, null & undefined
// complex type: object.