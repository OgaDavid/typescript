// you can explicitly define functions
let greet: Function;

// you have to specify the types of parameters in functions.

const add = (a: number, b: number) => {
    console.log(a + b);
};

add(5, 2);

// setting optional parameters - use a question mark

const divide = (a: number, b: number, c?: number | string) => {
    console.log(a / b);
    console.log(c);
};

divide(2, 3);