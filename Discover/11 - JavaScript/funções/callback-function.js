// callback functio

function sayMyName (name){
    console.log('Antes de executar a funcao callback')

    name()

    console.log('depois de executar a callback')
}

sayMyName(
    () => {
        console.log('Estou em uma callback')
    }
)