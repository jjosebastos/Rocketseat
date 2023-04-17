// coalescing nullish operator 
// const defaultColor = 'Preto';
// const costChoose = 'Amarelo' ?? defaultColor;



// console.log(costChoose);

// const age = 0;
// document.body.innerText = 'Sua idade é:' + (age ?? 'Não informado');

// Objects 

//  const user = {
//      name: 'José Bezerra',
//      secondName: 'Bastos Neto',
//      age: 23,
//      address:{
//          street: 'Benjamin constant',
//          number: 1653,
//          zip: '08430170',
//      },
//  };

// document.body.innerText = JSON.stringify(Object.keys(user));

// manipulando Objects 

// const {name = 'nome', secondName = 'Sobrenome'} = user; // colocando um valor default
// const {name: nome, secondName: sobrenome} = user; // mudando o valor dos campos do object
// const {adress, name, secondName, ...rest} = user;
// const {name, address} = user; 

// function showAge({age, name:nome}){
//     return document.body.innerText = `Seu nome é: ` + nome + ` e sua idade é: ` + age; 
// }

// showAge(user);

// desestruturação arrays 

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const [first, , ...rest] = array;


// short syntax 

// const name = 'Diego';
// const idade = 27;

// const user1 = {
//     name,
//     idade,
// };


// Optional chaining 

// const user = {
//     name: 'José',
//     age: 27,
//     // address: {
//     //      street: 'Rua Benjamin',
//     //      number: 1653,
//     //      zip: {
//     //         code: 08170880,
//     //      },
//     // },
//     showFullAddress(){
//         return 'Ok';
//     }
// };

// const key = 'street';

// document.body.innerText = user.address?.[key];


// Métodos de array


// for (const i of array){
//     document.body.innerText += i;
// }

// const novoArray1 = []
//  array.forEach(item => {
//     novoArray1.push(item * 2);
//  });

// console.log(JSON.stringify(novoArray1));

// map nunca irá exceder a qtd de elementos do array a ser copiado/manipulado
// só uso quando eu quero transformar um array em outro mudando alguma coisa nos itens desse array
const array = [1, 2, 3, 4, 5, 'José'];

// const novoArray = array.map(item => {
//     if (item % 2 === 0){
//         return item * 10;
//     } 
//     return item;
// })

// map, filter, every, some, find, findIndex, reduce

// const novoArray = array
//      .filter(item => item % 2 !== 0)
//      .map(item => item * 10);

// const allAreNumber = array.every(item => {
//     return typeof item === 'number';
// });

// const someIsNotNumber = array.some ( item => {
//     return typeof item !== 'number'
// });

// retorna o primeiro valor par dentro do array
// const par = array.find(item => item % 2 === 0);


// indice do primeiro valor par do array
// const par = array.findIndex(item => item % 2 === 0);


// const soma = array.reduce((acc, item) => {
//     return acc + item;
// }, 0);

// Template Literals

// const name = null;
// const message = `Bem-vindo, ${name ? name : 'visitante'}`;

// Promises 
// .then/.catch


fetch('https://api.github.com/users/jjosebastos')
    .then(response => {
        response.text().then( body => {
            console.log(body)
        })
    })
    .catch(err =>{
        console.log(err)
    })

// somaDoisNumeros(5,5)
//     .then(soma => {
//         document.body.innerText = soma
//     })
//     .catch (err =>{
//         console.log(err)
//     })


document.body.innerText = message;