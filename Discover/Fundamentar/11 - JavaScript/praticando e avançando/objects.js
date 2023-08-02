// object

const pessoa = {
    name: null ,
    age: 30,
    weight: 88.6,
    isAdmin: true
}

const {nome='Sem nome', age:idade, weight} = pessoa

console.log(nome, idade, weight);