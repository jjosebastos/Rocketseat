/*  ### Sistema de gasto familiar

    Crie um objeto que possuirá 2 propriedades, ambas do tipo array

Agora crie uma função que irá calcular o total de receitas
e despesas e irá mostrar uma mensagem se a família está com
saldo positivo ou negativo, seguido do valor do saldo

*/

let familyCost = {
    incomes: [1200, 3400, 1220, 4000, 4903, 360.39],
    expenses: [320.23, 150, 6000, 1245.13]
}


function sum(array){
    let total = 0;

    for(let value of array){
        total += value;
    }

    return total;
}

function calculateBalance(gastosFamiliares){
    const calculateIncomes = sum(familyCost.incomes);
    const calculateExpenses = sum(familyCost.expenses);
   
    const total = calculateIncomes - calculateExpenses;

    let balanceText = "Negativo";

    if (total >= 0){
        balanceText = "Positivo";
    } 
    console.log(`Seu saldo é ${balanceText}:R$ ${total.toFixed(2)}`);
}

calculateBalance();