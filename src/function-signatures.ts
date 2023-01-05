// in function signatures, you can basically define the structure of your functions.

let funcOne: () => void; //this just states that funcOne is a function that takes no parameter and returns void
funcOne = () => {
    console.log("funcOne doesn't have any parameters");
}

type string_num = string | number
let funcTwo: (a: string, b: number) => string_num;// this states that funcTwo is a function that takes two parameters and returns a number.
// the parameters do not need to be named a and b

funcTwo = (bodyType: string, height: number) => {
    return(`His body type is ${bodyType} and his height is ${height}`);
}

let funcThree: (obj: {name: string, age: number, roomNumber: string_num}) => void;  //this implies that funcThree is a function that accepts an object
// as a parameter and returns void.

funcThree = (loginDetails: {name: string, age: number, roomNumber: string_num}) => {
    console.log(loginDetails);
}