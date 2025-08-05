try{
    callSomeFunc();
    console.log("The end of try block");
}
catch{
    console.log("Unexpected Error!");
}
console.log("Etc..");


class Person{
  
    constructor(name, age){
        if(age < 0) throw new Error("Age must be positive");
        this.name = name;
        this.age = age;
    }
    print(){ console.log(`Name: ${this.name}  Age: ${this.age}`);}
}
const tom = new Person("Tom", -123);    
tom.print();

class PersonError extends Error {
  constructor(value, ...params) {
    super(...params)
    this.name = "PersonError"
    this.argument = value;
  }
}

