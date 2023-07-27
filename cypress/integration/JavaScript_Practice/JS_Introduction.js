console.log('Hello World - My first JS program')

/*
•	Var – Can be redeclared & can be reassigned 
•	Let – Can’t be redeclared & can be reassigned
•	Const - Can’t be redeclared & can’t be reassigned
*/

let num = 5 
let x
console.log(x) // it will give undefined output
x = 5
console.log(x)
x = 3
console.log(x)
var y = 6
// var was used in the older versions of JS, now let is used
let a = 2, b = 3, c = 4

/*
A constant is a type of variable whose value cannot be changed.
Also, you cannot declare a constant without initializing it. For example,
*/
const p = 10
// p = 11 // it will throw - TypeError: Assignment to constant variable.
console.log(p)

let fname = "Chittaranjan"
let lname = "Swain"
console.log(fname+' '+lname)

const number1 = 3/0
console.log(number1) // Infinity

const number2 = -3/0
console.log(number2) // -Infinity

// strings can't be divided by numbers
const number3 = "abc"/3 
console.log(number3)  // NaN

const val1 = true
const val2 = false
const val3 = null
console.log(val1, val2, val3)

//Symbol
const val4 = Symbol('hey')
console.log(val4) // Symbol(hey)
console.log(val4.description) // hey

//object 
const student = {
    fname: "Chittaranjan",
    lanme: "Swain",
    age:  34,
    weight: 78.85
}
student.fname = 'Chitta'
console.log(student.fname, ' ', student.lanme, ' ', student.age)

// JS is a dynamically typed language. it automatically decides the datatype of the variables. 
console.log(typeof(student.age)) // number
console.log(typeof(student.weight)) // number
console.log(typeof(student.fname)) // string
console.log(typeof(student)) // object

let f = 20
let l = 3 
console.log('f + l = ', f+l) // f + l =  23
console.log('f - l = ', f-l) // f - l =  17
console.log('f * l = ', f*l) // f * l =  60
console.log('f / l = ', f/l) // f / l =  6.666666666666667
console.log('f % l = ', f%l) // f % l =  2
console.log('f ** l = ', f**l) // f ** l =  8000
console.log('f++ + l-- = ', f++ + l--, f, l) // f++ + l-- =  23 21 2
console.log('++f + --l = ', ++f + --l, f, l) // ++f + --l =  23 22 1

console.log(f>l) // true
console.log(f==l) // false
console.log(f!=l) // true
console.log(f===l) // false - Strict equal to: true if the operands are equal and of the same type
console.log(f!==l) // true

// equal operator
console.log(2 == 2) // true
console.log(2 == '2') // true
// not equal operator
console.log(3 != 2) // true
console.log('hello' != 'Hello') // true
// strict equal operator
console.log(2 === 2) // true
console.log(2 === '2') // false
// strict not equal operator
console.log(2 !== '2') // true
console.log(2 !== 2) // false
console.log('hello' !== 'Hello') // true

let fn = "Chittaranjan"
fn += " Swain" // fn = fn + " Swain"
console.log(fn)

console.log((5>3) ? 'success' : 'error')

delete fn
console.log(fn)

let result

//JavaScript Implicit Conversion

result = '4' + 2
console.log("'4' + 2 = ", result)
result = '4' - 2
console.log("'4' - 2 = ", result)
result = '4' * 2
console.log("'4' * 2 = ", result)
result = '4' / 2
console.log("'4' / 2 = ", result)
result = '4' % 2
console.log("'4' % 2 = ", result)
// Except + all other operators work as mathematical operation, only + act as a concatenation.

// non-numeric string used with - , / , * results to NaN
result = 'hello' - 'world';
console.log(result); // NaN
result = '4' - 'hello';
console.log(result); // NaN

// if boolean is used, true is 1, false is 0
result = '4' - true;
console.log(result); // 3
result = 4 + true;
console.log(result); // 5
result = 4 + false;
console.log(result); // 4

// null is 0 when used with number
result = 4 + null;
console.log(result);  // 4
result = 4 - null;
console.log(result);  // 4

// Arithmetic operation of undefined with number, boolean or null gives NaN
result = 4 + undefined;
console.log(result);  // NaN

//JavaScript Explicit Conversion

// string to number
result = Number('425')
console.log(result - '3') // 422
result = Number('Two')
console.log(result) // Nan
result = Number('324e-1') //32.4
console.log(result)

// boolean to number
result = Number(true)
console.log(result)

// number to string
result = String(425)
console.log(result - '3') // 422
// using toString()
result = (324).toString();
console.log(result); // "324"

result = true.toString();
console.log(result); // "true"

//  You can also generate numbers from strings using parseInt(), parseFloat(), unary operator + and Math.floor(). For example,
result = parseInt('20.66');
console.log(result); // 20
result = parseFloat('20.06');
console.log(result); // 20.06
result = +'20.06';
console.log(result); // 20.06
result = Math.floor('20.66');
console.log(result); // 20

// Convert to Boolean Explicitly
result = Boolean('');
console.log(result); // false
result = Boolean(0);
console.log(result); // false
result = Boolean(undefined);
console.log(result); // false
result = Boolean(null);
console.log(result); // false
result = Boolean(NaN);
console.log(result); // false

result = Boolean(324);
console.log(result); // true
result = Boolean('hello');
console.log(result); // true
result = Boolean(' ');
console.log(result); // true
