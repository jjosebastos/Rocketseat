/* ### Transformar notas escolares

Crie um algoritmo que transforme as notas do sistema
numérico para sistema de notas em caracteres A B C


* de 90 para cima - A
* entre 80 - 89   - B
* entre 70 - 79   - C
* entre 60 - 69   - D
* menor que 60    - F

 */



function calcNote (note){
    let nota;
    if (note >= 90 && note <= 100){
        nota = "A";
    }
    else if (note >= 80 && note <= 89){
        nota = "B";
    }
    else if (note >= 70 && note <= 79){
        nota = "C";
    }
    else if (note >= 60 && note <= 69){
        nota = "D";
    } 
    else if (note < 60 && note >= 0) {
        nota = "F";
    } else {
        nota = "Nota inválida";
    }
    return nota;
}

console.log(calcNote(-1));

