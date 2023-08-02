// for...on

let person = {
    name: 'John',
    age: 30,
    weight: 80
}

for (let property in person){
    console.log(property)
    console.log(person[property])
}
