const message = "Hello";
console.log(message[0]); 
console.log(message[4]); 

const hello = "hello,world, bye world";
 
console.log(hello.includes("hello")); // true

const hello2 = "Hello Том";
console.log(hello.toLowerCase()); 
console.log(hello.toUpperCase()); 

let hello3 = "   Hello Том  ";
const beforeLength = hello.length;
hello = hello.trim();
const afterLength = hello.length;
console.log("The length of sentence before: ", beforeLength);     // 15
console.log("The length of sentence after: ", afterLength);   // 10

const name = "Tom";
const age = 37;
const userInfo = `${name} is ${age} years old`;
console.log(userInfo);      // Tom is 37 years old

const exp = /[0-9][0-9][0-9][0-9]/; 
 
const code1 = "1234";
const code2 = "jav5";
const code3 = "3452";
console.log(exp.test(code1));   // true
console.log(exp.test(code2));   // false
console.log(exp.test(code3));   // true

const exp2 = /\d-?\d\d\d-?\d\d\d-?\d\d\d\d/; 
 
const phone1 = "+1-234-567-8901";
const phone2 = "12345678901";
const phone3 = "1-2345678901";
console.log(exp2.test(phone1));   // true
console.log(exp2.test(phone2));   // true
console.log(exp2.test(phone3));   // true

const exp3 = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/u;
const text = "Publication Date: 2021-09-06"
const result = exp3.exec(text);
console.log(result.groups);         // {year: "2021", month: "09", day: "06"}
console.log(result.groups.year);    // 2021
console.log(result.groups.month);   // 09
console.log(result.groups.day);     // 06

const exp4 = /\d{4}-\d{2}-\d{2}/g;
let text2 = "Publication Date: 2021-09-06\nUpdated on: 2021-09-14"
 
text2 = text2.replace(exp4, function(date){
    const arr = date.split("-");
    return `${arr[2]}.${arr[1]}.${arr[0]}`;
});
console.log(text2);
