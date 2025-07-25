class Person{
    name;
    age;
    constructor(pName, pAge){
        this.name = pName;
        this.age = pAge;
    }
    move(place){
        console.log(`Go to ${place}`);
    }
    eat(){
        console.log("Eat apples");
    }
}
const tom = new Person();
tom.name = "Tom";
tom.age = 37;
console.log(tom.name);  // Tom
console.log(tom.age);   // 37
tom.move("Hospital");   // Go to Hospital
tom.move("Cinema");     // Go to Cinema
tom.eat();          // Eat apples

class Person{
    #name;
    #age;
    #ageValue = 1;
    constructor(name, age){
        this.#name = name;
        this.#age = age;
    }
    print(){
        console.log(`Name: ${this.#name}  Age: ${this.#age}`);
    }
    setAge(value){ if(value>0 && value < 110) this.#ageValue = value; }
}
const tom = new Person("Tom", 37);
// tom.#name = "Sam";   // ! Ошибка - нельзя обратиться к приватному полю
// tom.#age = -45;      // ! Ошибка - нельзя обратиться к приватному полю
tom.print();    // Name: Tom  Age: 37

class Person{
    static retirementAge = 65;
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    static print(person){ 
        console.log(`Имя: ${person.name}  Возраст: ${person.age}`);
    }
    print(){ 
        console.log(`Имя: ${this.name}  Возраст: ${this.age}`); 
    }
}
 
console.log(Person.retirementAge); // 65
Person.retirementAge = 62;
console.log(Person.retirementAge); // 62
Person.print(tom);  // Tom 37

class Person{
    name;
    age;
    print(){
        console.log(`Name: ${this.name}  Age: ${this.age}`);
    }
}
class Employee extends Person{
    company;
    work(){
        console.log(`${this.name} works in ${this.company}`);
    }
}
  
const tom = new Person();
tom.name = "Tom"; 
tom.age= 34;
const bob = new Employee();
bob.name = "Bob"; 
bob.age = 36; 
bob.company = "Google";
tom.print();    // Name: Tom  Age: 34
bob.print();    // Name: Bob  Age: 36
bob.work();     // Bob works in Google