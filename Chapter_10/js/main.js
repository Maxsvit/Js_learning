const people = ["Tom", "Bob", "Sam"];
for(const person of people){
    console.log(person);
}

const people2 = ["Tom", "Bob", "Sam"];
const iter = people2[Symbol.iterator]();
console.log(iter.next());    // {value: "Tom", done: false}
console.log(iter.next());    // {value: "Bob", done: false}
console.log(iter.next());    // {value: "Sam", done: false}
console.log(iter.next());    // {value: undefined, done: true}

function* getNumber(){
    yield 5;
}
const numberGenerator = getNumber();
const result = numberGenerator.next();
console.log(result);    // {value: 5, done: false}

function* getNumber2(){
    yield 5;
    yield 25;
    yield 125;
}
const numberGenerator2 = getNumber2();
 
for(const num of numberGenerator2){
    console.log(num);
}

const arr = [1, 1, 2, 3, 4, 5, 2, 4];
const numbers = new Set(arr);
console.log(numbers);  // Set(5) {1, 2, 3, 4, 5}

const numbers2 = new Set([1, 2, 3, 5]);
 
numbers2.forEach(function(value1, value2, set){
    console.log(value1);
})

const myMap = new Map([[1, "a"], [2, "b"], [3, "c"]]);
console.log(myMap);     // Map(3){1 => "a", 2 => "b", 3 => "c"}

const weakSet = new WeakSet();
weakSet.add({lang: "JavaScript"});
weakSet.add({lang: "TypeScript"});
console.log(weakSet);   // {{lang: "JavaScript"}, {lang: "TypeScript"}}

let key1 = {key:1};
let key2 = {key:2};
let value1 = {name: "Tom"};
let value2 = {name: "Sam"};
 
const weakMap2 = new WeakMap([[key1, value1]]);
weakMap2.set(key2, value2);
weakMap2.set(key1, {name: "Kate"});
console.log(weakMap2.get(key1));    //{name: "Kate"}
console.log(weakMap2.get(key2));    //{name: "Sam"}