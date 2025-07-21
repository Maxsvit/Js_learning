function print(){
     
    printHello();
    printHello();
    printHello();
 
    function printHello(){
        console.log("Hello");
    }
}
print();
//printHello();   // Uncaught ReferenceError: printHello is not defined


function printPerson(person) {
    console.log("Name:", person[0]);
    console.log("Age:", person[1]);
    console.log("Email:", person[2]);
    console.log("=========================");
}
const tom = ["Tom", 39, "tom@example.com"]; 
const bob = ["Bob", 43, "bob@example.com"]; 
 
printPerson(tom);
printPerson(bob);