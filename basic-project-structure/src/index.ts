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

class User{
    protected _courseCount: number = 1;
    private readonly city: string = 'New York';
     constructor( public name: string,public age: number){
         this.name = name;
         this.age = age;
     }
     get getCity(){
         return this.city;
     }
     get courseCount(){
         return this._courseCount;
     }
     set courseCount(count: number){
         if(count <=1){
            throw new Error('Invalid count');
         } 
         this._courseCount = count;
     } 
}

class SubUser extends User{
    isFamily: boolean = true;
    changeCourseCount(){
        // proteted members can be accessed in child class
        this._courseCount=5;
    }
}


const user = new User('John', 30);
//console.log(user.city) - not allowed as private
// default modifier is public