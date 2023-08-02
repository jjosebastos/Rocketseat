# Manipulação de strings e numbers

## Conversão de string para number (vice e versa)

- Number(nomeDaVariável)
- String(nomeDaVariável)

## contar quantos caracteres que tem em uma palavra

- nomeDaVariável.length
    * método só funciona com strings

## diminuir o número de casas decimais 

- toFixed(2); -> diminui para duas casas decimais
- Math.round(number) -> arrendonda para o numero inteiro mais próximo
- Math.ceil(number) -> arrendonda pra cima
- Math.floor(number) -> arredonda pra baixo


## metodo replace

- substitui um caractere por outro
    * exemplo: 
```js
    let number = 2309.10293123;

    console.log(number.toFixed(2).replace(".","."));
```    

## metodo toLowerCase e toUpperCase

- converte texto para minúsculo (lowercase)
ou maiúsculo (uppercase)

## metodo split e join 

- split: separa um texto de acordo com os parametros
exemplo: 
```js
    let text = 'Eu quero ser campeão da liberta';
    let example = text.split(' ');
    console.log(example);
    /*pode ser espaços, letras específicas como a "o" */

```

- join: junta um texto de acordo com os paramtros
exemplo: 
```js
    let text = 'Eu quero ser campeão da liberta';
    let example = text.split(' ');
    let exemploJoin = text.join('_');
    console.log(example);
    
```

## metodo includes 

- verifica se tem caracteres dentro de uma variável string

```js
let phrase = 'Eu quero ter dinheiro!';
console.log(phrase.includes("dinheiro"));
```

# manipulando arrays

## criar um array com construtor

- utilizar o new (tanto para objetos quanto para arrays)

```js
    let myArray = new Array('a','b','c');
    console.log(myArray);
```

## contar elementos de um array

- utilizar a property length

```js
    console.log([
        "a",
        {type: array},
        function(){ return "hello"},
    ].length);
```

## transformar uma cadeia de caracteres em elementos de um array

- objeto global disponível que permite a transformação de uma string em elementos de um array.

```js
    let word = "manipulação"
    console.log(Array.from(word)); 
```

## métodos de array

### adicionar um item no fim

-  metodo: push('');

```js
    let array = ['José','Maria'];
    array.push('Kethelin');
```

### adicionar no começo 

- metodo: unshift('');

```js
    array.unshift('Hilton');
```

### remover do final 

- metodo: pop();
```js
    array.pop();
```

### pegar somente alguns elementos do array
- slice(1,3)
    * vai remover os termos 1 e 3 do array

```js
    array.slice(1,3)
```

### remover um ou mais itens em qualquer posição do array
- splice(1,2)
    * remove vai remover 2 termos a partir do index 1
```js
    array.splice(1,2);
```

### encontrar a posição de um elemento no array
- indexOf('nome_do_termo');
```js
    array.indexOf('José');
```