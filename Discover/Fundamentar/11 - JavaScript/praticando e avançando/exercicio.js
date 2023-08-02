// 1. Declare uma variável de nome weight

let weight

// 2. que tipo de dado é a variável acima?
// console.log(typeof weight)
/*
    3. Declare uma variável e atribua valores para cada um dos dados:
        * name: String
        * age: Number (integer)
        * stars: Number (float)
        * isSubscribed: Boolean
*/
// const name = 'José'
// let age = 22
// let stars = 4.5
// const isSubscribed = true


/*
    4. A variável student abaixo é que tipo de dados?
    // let student = {}
    // console.log(typeof student)

    4.1 Atributa ela as mesmas propriedades e valores do exercício 3

    const student = {
        name: 'José',
        age: 23,
        weight: 74.50,
        stars: 4.5,
        isSubscribed: true
    }

    4.2 mostre no console a seguine mensagem: 

        <name> de idade <age> pesa <weight> kg.

        Atenção, substitua <name> <age> e <weight> pelos valores de cada propriedade do objeto

        // console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg`);
*/


/*
    5. Declare um variável do tipo array, de nome students e não atribua a ela nenhum valor, ou seja, somente o Array vazio 

 */
let students = []

/*
    6. reatribua um valor para a variável acima, colocando dentro dela o objeto student da questão 4. (Não copiar e coloar o bojeto, mas usar o objeto criado e inserir ele no Array)
 
 */
let student = {
    name: 'José',
    age: 23,
    weight: 75.50,
    stars: 4.9,
    isSubscrided: true

}
students = [
    student
]

console.log(students)

/*
    7. Coloque no consoleo valor da posição zero do Array acima
    // console.log(students[0]);
*/


/*
    8. Crie um novo student e coloque na posição 1 do Array students

    let newStudent = {
        name: 'Kethelin',
        age: 22,
        weight: 65,
        stars: 5.0,
        isSubscrided: true
    }
    students[1] = newStudent
    // students.push(newStudent)
    // console.log(students)

*/


/*
    9. Sem rodar o código abaixo responda qual é a resposta do console e porque? Após a sua resposta, rode o código e veja se você acertou

    console.log(a)
    var a = 1
    R: undefined -> ocorre devido ao ação de hoisting do javascript que eleva o var sem a atribuição.
 */


