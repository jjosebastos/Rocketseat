# Page layouts

- Tables
- Floats e clear
- Frameworks e Grid systems
- Flexbox
- Grid


## Posicionamentos

Controlar onde, na página, o elemento irá fical alterando o fluxo normal dos elementos.

- Name: position
- Values: static|relative|absolute|fixed


## Relative

- top, right, bottom, left, z-index

## Absolute 

- Torna o elemento absoluto na página de acordo com o seu pai (tags ou o root).

## Fixed

- Deixa o elemento fixo na página.

## Element Stacking

- Empilhamento. Coloca o elemento em uma camada diferente de acordo com a quantidade de camadas (`position: absolute;`). 



# Flexbox

* Nos permite posicionar os elementos dentro da caixa.
* Controle em uma dimensão (horizontal ou vertical).
* Alinhamento, direcionamento, ordernar e tamanhos.

```css
div.parent{
    display: flex;
}
``` 

## flex-direction

* Qual a direção do flex: horizontal ou vertical
* row | column

## alinhamento 

* justify-content: space-between | center;
* align-items

# Grid

* Posicionamento dos elementos dentro da caixa
* Posicionamento horizontal e vertical ao mesmo tempo
* Pode ser flexíuvel ou fixo
* Cria espaços para os elementos filhos habitarem  

- para configurar o grid no elemento pai: 

grid-template-areas: 
"cabecalho cabecalho"
"main aside"
"footer footer";

grid-template-rows: 30px 1fr 40px;
grid-template-columns: 1fr 80px;