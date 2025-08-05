const users = new Array("Tom", "Bill", "Alice");
const people = ["Sam", "John", "Kate"];
 
console.log(users); // ["Tom", "Bill", "Alice"]
console.log(people); // ["Sam", "John", "Kate"]

const men = ["Tom", "Sam", "Bob"];
const women = ["Kate", "Alice", "Mary"];
const people2 = [...men, "Alex", ...women];
 
console.log(people2);     //  ["Tom", "Sam", "Bob", "Alex", "Kate", "Alice", "Mary"]

const people3 = ["Tom", "Sam", "Bob"];
 
function print(first, second, third){
    console.log(first);
    console.log(second);
    console.log(third);
}
print(...people3); 


const people4 = ["Tom", "Sam", "Bob"];
 
people.reverse();
console.log(people4);         // ["Bob", "Sam", "Tom"]

const numbers = [ 1, 2, 3, 4, 5, 6];
 
numbers.forEach(n => 
    console.log("N * N", n, "=", n * n )
);

class Team extends Array{
     
    constructor(name, ...members){
        super(...members);
        this.name = name;
    }
}

const barcelona = new Team("Barcelona", "Tom", "Sam", "Bob");
console.log(barcelona);     // Team(3) ["Tom", "Sam", "Bob"]