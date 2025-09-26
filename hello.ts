let greetings: string = "Hello, World!";
console.log(greetings);
//number
let age: number = 20;;
//boolean
let isUpdated: boolean = true;
//infered type
let message = "Hello, World!";  
//function
function add(a: number=1, b: number=1): number {
    return a + b;
}
let logiUser=()=>console.log("User logged in");
const heros= ["Superman", "Batman","spiderman"];
heros.map(hero=>console.log(`${hero} is a hero`));
//never is used to represent the return type of a function that never returns
function handleError(message: string): never {
    throw new Error(message);
}
let sum=add(1, 2);
console.log(sum);
 