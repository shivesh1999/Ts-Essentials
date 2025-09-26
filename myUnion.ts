let score: number | string =33
score = "thirty three"
score = 33

type User = {
    name: string
    age: number
}

type Admin = {
    username: string
    age: number
}

let shivesh: User | Admin = {
    name: "Shivesh",
    age: 26
}

shivesh = {
    username: "Shivesh",
    age: 26
}

// function getDBId(id : string | number){
//     console.log(id);
// }

getDBId("ABC")
getDBId(123)

function getDBId(id : string | number){
    if(typeof id === "string"){
        id.toUpperCase();
    }
    console.log(id);
}


//array
const data : (number | string)[] = [1,2,3,"4",5]

let seatAllotmnet: "asiel" | "middle" | "window" = "middle"

seatAllotmnet = "window"

seatAllotmnet = "crew" 