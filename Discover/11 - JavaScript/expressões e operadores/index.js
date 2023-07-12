/* Expressões e Operadores

- Expressions: qualquer linha de código
- Operators
    Unary (console.log(++number))
    Binary (console.log(number+1))
    Ternary (console.log(true ? 'alo' : 'nada'))

*/

// unary 
//     let auto = 1
//     console.log(auto++)

// binary
//     let number = 1
//     console.log(number+2);

// ternary 

//     console.log(true ? 'sim' : 'não')


/*
    new

    * left-hand-side expression
    * criar um novo objeto
*/

// let name = new String('José');
// name.surName = 'Bezerra'
// let age = new Number(23);
// let date = new Date();
// console.log(name, age,date);


/*
    Operadores unários
    typeof
    delete
*/

// const person = {
//     name: 'José',
//     age: 22,
//     height: 1.70
// };

// delete person.height;

// console.log(typeof person)

/* operadores de comparação
    estritamente igual e estritamente diferente
*/

// let x = 1 
// let y = '1'
// console.log (1 == 1);
// console.log (1 === 1);

// console.log (1 != 1);
// console.log (1 !== 1);

/* operadores de atribuição
*/

// let x
// x = 1
// x += 2
// x *= 2
// x -= 2
// x /= 2
// x **= 2
// x %= 2

/* operadores lógicos */

// let bread = true
// let milk = false

// console.log(bread && milk);
// console.log(bread || milk);
// console.log(!milk && bread);

/* operador condicional ternário */

// café top
let pao = true
let cafe = false

const niceBreakfest = pao || cafe ? 'Café top' : 'Café meia boca'
console.log(niceBreakfest)

// Maior de 18

let age = 18 
const driverLicense = age >= 18 ? 'Pode dirigir' : 'Não pode dirigir'