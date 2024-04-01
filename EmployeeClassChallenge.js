// Create a class called Employee with three properties: name, position, and salary. The class should have a
// method called getSalary that returns the employee's salary. Instantiate an instance of the Employee class and
// call the getSalary method.
class EmployeeClassChallenge{
    constructor(n,p,s){
        this.name=n;
        this.position=p;
        this.salary=s;
    }

    getsalary(){
        return this.salary
    }
}

const emp=new EmployeeClassChallenge("pratik","Manager",300000);
console.log(emp.getsalary());