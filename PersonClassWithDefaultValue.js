// 5. Implementing a Person Class with Default Values
// Create a class called Person with two properties: name and age. The class should have a method called
// getDetails that returns a string in the format "Name: <name>, Age: <age>". Use default parameters in the
// constructor to set the values of name and age to "Unknown" and 0 if they are not provided.
class Person{
    
    constructor(name="Unknown", age=0)  //default values 
    {
        this.name=name;
        this.age=age;
    }
    getDetail(){
        return `Name: ${this.name} Age: ${this.age}`
    }
}

// Instantiate an instance of the Person class
const p=new Person("pratik",21);

console.log(p.getDetail());

// Instantiate another instance without providing name and age
const p2=new Person();
console.log(p2.getDetail());
