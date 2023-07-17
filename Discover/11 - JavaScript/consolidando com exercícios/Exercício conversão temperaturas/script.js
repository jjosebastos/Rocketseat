/* ### Celsius em fahrenheit

    Crie uma funação que receba uma string em celsius ou fahrenheit e faça a transformação de uma unidade para a outra
*/


// tranformDegree ('50F');

function transformDegree(degree){

    // fluxo de erro
    const celsiusCheck = degree.toUpperCase().includes('C')
    const fahrenheitCheck = degree.toUpperCase().includes('F')

    if (!celsiusCheck && !fahrenheitCheck){
        throw new Error('Grau não identificado')
    } 
    
    // fluxo ideal, F para C
    let updatedDegree = Number(degree.toUpperCase().replace("F", ""))
    let formula = (fahrenheit) => (fahrenheit - 32 ) * 5/9
    let degreeSign = '°C'
    
    // fluxo alternativo
    if (celsiusCheck){
        updatedDegree = Number(degree.toUpperCase().replace("C", ""));
        formula = (celsius) => celsius * 9/5 + 32
        degreeSign = '°F' 
    }

    return formula(updatedDegree) + degreeSign
}


try {
    console.log(transformDegree('10C')) 
    console.log(transformDegree('50F')) 
    console.log(transformDegree('50Z')) 

} catch (error) {
    console.log(error.message)
}