/* Objetos */

// const user = {
//     name:'José',
//     idade: 23,
//     address:{
//         street: 'Rua teste, 1',
//         number: 236
//     },
// };

/* desestruturação */

// const { name, idade:age, nickname = 'sem apelido' } = user;

// document.body.innerText = JSON.stringify({name,age, nickname});


// function mostraIdade ({idade, name}){
//     return (age + name);
// }



/* rest operator */

// const { name, idade, ...rest } = user;

// const array = [1,2,3,4,5,6,7,8,9];

// const [first, ,third, ...rest] = array;


/* short sintax */

// const name = 'Diego';
// const idade = 27;

// const user = {
//     name,
//     idade,
// };

// document.body.innerText = JSON. stringify(user);

/* Optional Chaining */
 const user = {
   name:'José',
   idade: 23,
//     address:{
//     street: 'Rua teste, 1',
//     number: 236,
//      zip:{
//         code: '08430170',
//         city: 'São Paulo'
//     }
//    },
};

document.body.innerHTML =  user.address?.zip.code ?? 'Não informado';