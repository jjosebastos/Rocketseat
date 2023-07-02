# Box Model

- Fundamental para fazer layouts para a web
- Maior facilidade para aplicar o CSS

##  O que é?

Uma caixa retangular.
Essa caixa possui propriedades de uma caixa (2D)

- Tamanho (largura x altura)    width | heigth 
- Conteúdo                      content
- Bordas                        border
- Preenchimento interno         padding
- Espaços fora da caixa         margin

*Cada elemento na sua página, será considerado uma caixa.*

## box-sizing

Como será calculado o tamanho total da caixa?

- content-box|border-box
- por padrão o css conta o tamanho da caixa pelo conteúdo, causando diferenças no calculo do tamanho da caixa com a adição do padding. para corrigir isso coloque o comando abaixo.


```css
div{
    box-sizing: border-box;
}
```

## display: block vs display: inline
- Como as caixas se comportam em relação às outras caixas
- Comportamento externo das caixas

|**block**                       |**inline**                             |
|--------------------------------|---------------------------------------|
| Ocupa toda a linha, colocando  | Elemento ao lado do utro              |
|o próximo elemento abaixo desse |                                       |
|                                |                                       |
|--------------------------------|---------------------------------------|
| width e height são respeitados | width e height não são espeitados    |
|--------------------------------|---------------------------------------|
| Padding, margin, border irão   | Somente valores horizontais de margin,|
| funcionar normalmente.         |                                       |
|--------------------------------|---------------------------------------|
    

exemplos
block: `<p> <div> <section>`, todos os headings `<h1><h2>...`
inline: `<a> <strong> <span> <em>`


## margin

Espaço entre os elementos
- margin-top | margin-right | margin-bottom | margin-left
- values: `<length>` | `<percentage>` 

```css
div {
    /*shorthand*/
    margin: 12px 16px 10px 4px; /*top, right, bottom, left - sentido horário*/
    margin: 12px 16px 0; /*top, (left/right), bottom*/
    margin: 8px  16px; /*(top/bottom) e (right/left)*/
    margin: 8px; /*all*/
}
``` 

*margin collpasing: quando a margin dos elemento tipo block se juntam em um valor único. Caso você coloque duas margins diferentes o CSS vai selecionar a maior*

* margin: auto; - vai calcular e organizar de forma horizontal

## padding
Preenchimento interno da caixa

- padding-top | padding-right | padding-bottom | padding-left
- values: `<length>` | `<percentage>` | auto

```css
div {
    padding: 12px 16px 10px 4px;
    padding: 12px 16px 0;
    padding: 8px 16px;
    padding: 8px;
}

        *Padding poderá causar diferença na largura de um elemento*
``` 
## border 

As bordas da caixa

- value: `<border-style>` | `<border-width>` | `<border-color>`
    - style: solid | dotted | dashed | double | groove | ridge | inset | outset
    - width: `<lenght>`
    - color: `<color>`

```css
div{
    /* shorthand */
    border-top: solid 2px; /* top | right | bottom | left */

    /* style*/
    border: solid;
    
    /* width <length> | style */
    border: 2px dotted;

    /* style | color */
    border: outset #f33;

    /* width | style | color */
    border: medium dashed green;
}
```