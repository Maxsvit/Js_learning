let username = "Tom";
        console.log("username before changing:", username);
        username = "Bob";
        console.log("username after changing:", username);

const user = "Tom";
const age = 37;
const isMarried = false;
const text = `Name: ${user}  Age: ${age}   IsMarried: ${isMarried}`;
console.log(text);

const user2 = {name: "Bom", age:24};
console.log(user2.name);

let a = 23;
a += 5; 
console.log(a);

const income = 100;
const strIncome = "100";
const result = income === strIncome;
console.log(result); // false

//Wow
const number1 = "56";
const number2 = 4;
const resultWow = number1 + number2;
console.log(resultWow); // 564

const resultInt = parseInt(number1) + number2;
console.log(resultInt); // 60

const people = ["Tom", "Alice", "Sam"];
console.log(people);    // ["Tom", "Alice", "Sam"];

//WowX2
const objects = ["Tom", 12, true, 3.14, false];
console.log(objects);

const peopleRes = [
        ["Tom", 25, false],
        ["Bill", 38, true],
        ["Alice", 21, false]
];
 
console.log(peopleRes[0]); // ["Tom", 25, false]
console.log(peopleRes[1]); // ["Bill", 38, true]

const incomes = 200;
if(incomes > 50) {
    console.log("Incomes more than 50");
}
else if(incomes === 50){
    console.log("Incomes is 50");
}
else{
    console.log("Incomes less than 50");
}

for(let i = 10; i > 5; i--){ 
    console.log(i);
} 

const person = {name: "Tom", age: 37};
for(prop in person){
      
console.log(prop);
}