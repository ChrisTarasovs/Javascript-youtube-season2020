// THINGS( Objects )
// Person and car
class Person{
    // Propeties
    name = '';
    age = 0;
    height = 0;
    clothes = [];
    interest = '';
    constructor(obj){
        this.name = obj.name;
        this.age = obj.age;
        this.height = obj.height;
        this.clothes = obj.clothes;
    }
    grettings = () =>{
        return `Hello, my name ${this.name}`
    }
    farwell = () =>{
        return `${this.name} has left the school,  See you tomorrow.`
    }
    // Methods
    walk = () =>{
        return 'I have started to walk';
    }
    eat = () =>{
        return 'I have started to eat';
    }
    gotOlder  = () =>{
        this.age = this.age + 1;
    }
    getAge  = () =>{

    }
}
// Class Type of Person
class Child extends Person{
    learnging = [];
    constructor(obj){
        super(obj);
        this.learning = obj.learnging;
    }
}
class Teacher extends Person {
    teaches = [];
    constructor(obj){
        super(obj);
        this.teaches = obj.teaches;
    }
}


class Car{
    make = '';
    color = '';
    speed = 0;
    // Decreasing or increasing
    changeSpeed = (value) => {
        this.speed = value;
        return this.speed;
    }
}


// Let's initialise class
const ChrisObject = {
    name: 'Chris',
    age: 7,
    height: 110,
    clothes: ['jacket', 'jeans', 't-shirt'],
    learnging : ['maths']
}
const JamesObject = {
    name: 'James',
    age: 22,
    height: 187,
    clothes: ['jacket'],
    teaches: ['maths', 'english']
}
const Chris = new Child(ChrisObject);
const James = new Teacher(JamesObject);

// console.dir(Chris);
// console.dir(James);

console.log(Chris.grettings());
console.log(James.grettings());
console.log(James.farwell());
console.log(Chris.farwell());