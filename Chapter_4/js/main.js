const user = {}
user.name = "Tom";
user.age = 26;

console.log(user.name); // "Tom"
console.log(user.age);  // 26
console.log(user); // { name: 'Tom', age: 26 }

const user2 = {};
user2.name = "Tom";
user2.age = 26;
user2.display = function(){
     
    console.log(user2.name);
    console.log(user2.age);
};
 
user2.display();

const prop1  = "name";
const prop2  = "age";
const tom = { 
    [prop1]: "Tom",
    [prop2]: 37
};
console.log(tom);           // {name: "Tom", age: 37}
console.log(tom.name);      // Tom
console.log(tom["age"]);    // 37

var bar = "global bar";
  
function foo(){
    var bar = "foo bar";
    function moo(){
          
        console.log(this.bar);
    }
    moo();
}
foo();  // global bar

const country = {
 
    name: "Germany",
    language: "Deutsch",
    capital:{
     
        name: "Berlin",
        population: 3375000,
        year: 1237
    }
};
console.log("Capital:", country.capital.name); // Berlin
console.log("Population:", country["capital"]["population"]); // 3375000
console.log("Year of created:", country.capital["year"]); // 1237

const tom2 = { name: "Tom"};
const bob = tom2;


console.log(tom2.name);  // Tom
console.log(bob.name);  // Tom
         
bob.name = "Bob";

console.log("After changing name property");
console.log(tom2.name);  // Bob
console.log(bob.name);  // Bob

const user3 = {};
user3.name = "Tom";
user3.age = 26;
user3.print = function(){
     
    console.log(this.name);
    console.log(this.age);
};
const hasNameProp = "name" in user3;
console.log(hasNameProp); // true 
 
const hasWeightProp = "weight" in user3;
console.log(hasWeightProp); // false

function createUser(pName, pAge) {
    return {
        name: pName,
        age: pAge,
        print: function() {
            console.log(`Name: ${this.name}  Age: ${this.age}`);
        }
    };
};
const tom3 = createUser("Tom", 26);
tom3.print();
const alice = createUser("Alice", 24);
alice.print();

function Person(pName, pAge) {
    this.name = pName;
    this.age = pAge;
    this.print = function(){
        console.log("Name: ", this.name);
        console.log("Age: ", this.age);
    };
}

const tom4 = {name: "Tom", age: 39};
 

console.log(tom.__proto__);                 // Object
console.log(Object.getPrototypeOf(tom));    // Object

console.log(Person.prototype);            // Person {}


function User5(uName, uAge) {
    this.name = uName;
    let _age = uAge;
    // getter
    this.getAge = function() { return _age; }
    // setter
    this.setAge = function(age) {
        if(age >0 && age<110){      
            _age = age;
        } else {
            console.log("Недопустимое значение");
        }
    }
 
    this.print = function(){
        console.log(`Name: ${this.name}  Age: ${_age}`);
    };
}

const user6 = {
    name: "Tom",
    age: 24,
};
const {namee  = "Sam", email: mailAddress = "sam@gmail.com"} = user6;
console.log(namee);              // Tom
console.log(mailAddress);       // sam@gmail.com

const users = ["Tom", "Sam", "Bob", "Ann", "Alice", "Kate"];
const [,second,,forth] = users;
 
console.log(second);        // Sam
console.log(forth);         // Ann