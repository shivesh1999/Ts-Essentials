"use strict";
console.log('Hello World');
// class User{
//     name: string;
//     age: number;
//     private readonly city: string = 'New York';
//      constructor(name: string, age: number){
//          this.name = name;
//          this.age = age;
//      }
// }
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this._courseCount = 1;
        this.city = 'New York';
        this.name = name;
        this.age = age;
    }
    get getCity() {
        return this.city;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(count) {
        if (count <= 1) {
            throw new Error('Invalid count');
        }
        this._courseCount = count;
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        // proteted members can be accessed in child class
        this._courseCount = 5;
    }
}
const user = new User('John', 30);
//console.log(user.city) - not allowed as rprivate
// default modifier is public
