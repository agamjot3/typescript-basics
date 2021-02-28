export{}

let a = 'hello';

console.log(a);


let x = 10;
const y = 20;

let sum;

const title = 'TypeScript Tutorial';


let isBeginner: boolean = true;

let total: number = 10;

let name: string = 'Vishwas';

let sentence: string = `My name is ${name}`;


console.log(sentence);

total = 25;

console.log(total);

let list1: number[] = [1,2,3];
let list2: Array<number> = [5,6,7];

console.log(list1);
console.log(list2);


let person1: [string, number] = ['Chris', 22];

console.log(person1);


enum Color {Red, Green, Blue};

let c: Color = Color.Green;

console.log(c);


let random: any = 10;
random = 'hello';


let random1: unknown = 'hello';

(random1 as string).toUpperCase();

console.log(random1);


let multiType: number | boolean;
multiType = 20;
multiType = true;


function add(num1: number, num2?: number){
    if(num2)
      return num1 + num2;
    else
      return num1;
}

let sum1 = add(10,23);
console.log(sum);

let sum2 = add(5);
console.log(sum2);


interface Person{
    firstName: string,
    lastName: string;
}
function fullName(person: Person}){
      console.log(`${person.firstName} ${person.lastName}`);
}

let p ={
    firstName: "Bruce",
    lastName: "Wayne"
}

fullName(p);

class Employee {
    employeeName:string;

    constructor(name: string){
        this.employeeName = name;
    }

    greet(){
        console.log(`Good Morning ${this.employeeName}`);
    }


}

let emp1 = new Employee('Vishwas');
console.log(emp1.employeeName);
emp1.greet();


class Manager extends Employee{

}

