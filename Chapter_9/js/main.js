const currentDate = new Date();
console.log(currentDate);   // Current date and time

const today = new Date(); 
console.log(today.getDate());       
console.log(today.getDay());        
console.log(today.getMonth());      
console.log(today.getFullYear());   

const x = -25;
console.log(Math.abs(x)); // 25
const y = 34;
console.log(Math.abs(y)); // 34

const max = Math.max(19, 45); // 45
const min = Math.min(33, 24); // 24
console.log(max);
console.log(min);

const r = Math.random();

const x2 = Number.MAX_VALUE
const y2 = Number.MAX_VALUE
const z = x2 * y2;
if(z===Number.POSITIVE_INFINITY)
    console.log("Infinity");
else
  console.log(z);
  

const target = {name: "Tom", age: 37};
const handler = {
  set: function(target, prop, value) {
        console.log(value);
        target[prop] = value;
  }
};
const proxy = new Proxy(target, handler);
proxy.name = "Tomas";
console.log(proxy.name);    // Tomas
proxy.age = 22;             
console.log(proxy.age);     // 22