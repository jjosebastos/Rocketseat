# Expressions e Operators

- Expressions: qualquer linha de código que resolva alguma coisa
- Operators:
    * Unary = autoincremento
    * Binary = um operador aritmético que une dois termos
    * Ternary = operador condicional

# New 

- Também chamado de left-hand-side expression
- serve para a criação de um novo objeto, arrays e datas


```js
    let name = new String('José');
    name.surName = 'Bezerra';
    
    let fruit = new Array('Banana', 'Maça', 'Laranja');
    fruit.push('Melancia');

    let date = new Date('2023-07-11');
```

# Operadores unários

- typeof: exibe o tipo do operando
- delete: remove um atributo que exista dentro do objeto.

```js
    let number = 1
    const person = {
        name: 'Jojo',
        age: 22
    }
    delete person.age
    console.log(number, person);
```

# Operadores Aritméticos 

- multiplicação: "*"
    * console.log(3.2 * 5.5)

- divisão: "/"
    * console.log(12 / 2)

- soma: "+"
    * console.log (34+66)

- subtração: "-"
    * console.log(34 - 23)

- resto da divisão: "%"
    * let remainder
          remainder = 11 % 11

- incremeto: "++"
    * increment++
    * ++increment

- decremento: "--"
    * --icrement
    * increment--

- exponencial: "**"
    * console.log(3 ** 3)

# Operadores de comparação igual e estritamente igual

- igualdade: ==
    * exemplo: 
        console.log(1 == 1);

- estritamente igual: checa tipo e valor.  
    * exemplo:
        console.log (1 === '1');

- estritamente diferente: checa diferenças de tipo e valor.
    * exemplo: 
        console.log (1 !== 1);
        console.log (1 !== '1');


# Operadores de atribuição 

- assignment: quando eu atribuo a variável a um valor.

- addition assignment
    * exemplo: x += 2

- multiplication assignment
    * exemplo: x *= 2

- division assignment
    * exemplo: x /= 2

- exponential assignment
    * exemplo: x **= 2

- remainder assignment
    * exemplo: x %= 2

# Operadores lógicos 

- 2 valores do tipo boolean que quando verificados vai resultar em verdadeiro ou falso

- AND &&: precisa que os dois valores sejam verdadeiros para resultar em verdadeiro

- OR ||: precisa que pelo menos um dos dois sejam verdadeiros para resultar em verdadeiro

- NOT !: negação.

# Operador ternário

- Um condicional que faz comparação de valores para retornar um novo valor.
    * exemplo:

```js
    let age = 18
    const driverLicense = age >= 18 ? 'Can drive' : "Can't drive"
```