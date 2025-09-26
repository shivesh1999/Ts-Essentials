// type is used when you want to create a new type
type User = {
    readonly _id: string // cannot be changed
    name: string,
    age: number,
    address?: string // optional
};

type commonUser= User & {email: string};

type Mysstring = string;

const user:User={
    _id: "123",
    name: "John",
    age: 20,
}
function logUser(user: User): void  {
    console.log(`User: ${user.name}, Age: ${user.age}`);
}
logUser(user)  