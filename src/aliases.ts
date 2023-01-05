// aliases in typescript just implies giving union types sort of a variable.

type str_num = string | number;

function hello(a: str_num = "Hola", b: str_num = 8) {
    console.log(a, b);
}

hello(2, "sup man");