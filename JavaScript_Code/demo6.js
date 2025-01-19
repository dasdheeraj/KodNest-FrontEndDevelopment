// inheritance in javascript
class Employee {
    constructor() {
        this.company = 'KodNest';
    }
    login(){
        console.log("Login at 10 AM");
    }
    task(){
        console.log("Complete your task");
    }
}

class Developer extends Employee{
    task(){
        console.log("Complete your development task");
    }
    develop(){
        console.log("Develop an application");
    }
}

class Tester extends Employee {
    task(){
        console.log("Complete your testing task");
    }
    test(){
        console.log("Test an application");
    }
}

dev = new Developer() //creating object
console.log(dev.company)
dev.login()      //inherited method
dev.task()       //overridden method
dev.develop()    //child-specific method

test = new Tester()
console.log(dev.company)
test.login()
test.task()
test.test()