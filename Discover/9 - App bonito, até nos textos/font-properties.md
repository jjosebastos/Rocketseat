# trabalhando com fontes

Tipografia transmite mensagem

        - negrito
        - tamanho
        - estilo
-------------------------------------------------------

## Basic Font Properties

* font-family
* font-weight
* font-style
* font-size

-------------------------------------------------------

## Font Family

* Tipo de fonte de um elemento 
* Lista de fontes e ordem de prioridade
* inclui *fallback* font

```css
p {
    font-family: "Times New Roman", Times, serif;
}
```
    - serif
    - sans
-------------------------------------------------------

## Font Weight

* Peso da fonte

```css 
p {
    font-weight: bold;
}
```
-------------------------------------------------------

## Font Size

* O tamanho da fonte

```css
    p {
        font-size: 18px;
    }
```
-------------------------------------------------------

## Web Fonts

- fontes do sistema x fontes da web
- como usar fontes para web?

    * @font-face
    * @import
    * link


-------------------------------------------------------

## font-variant

* variações na apresentação fonte

```css
P {
    font-variant: small-caps;
}
```

-------------------------------------------------------

## font-stretch 

* alargamento ou encolhimento da fonte
* aceita pavra-chaves como: expanded, condensed, normal
* aceita procentagens de 50% a 200%

```css
p {
    font-stretch: 50%;
}
```

-------------------------------------------------------

## letter-spacing

* Espaços entre caracteres
```css
p {
    letter-spacing: 4px;
}
```

-------------------------------------------------------
## letter-spacing

* Espaços entre palavras
```css
p {
    word-spacing: 4px;
}
```
-------------------------------------------------------

## line-height

* Espaços entre linhas
* Pode ser com unidades ou sem unidades de medida
* Comuns: 1.5 ou 2

```css
p {
    line-height: 1.6;
}
```
-------------------------------------------------------

## text-transform

* Transformação do texto

```css
p {
    text-transform: uppercase; /* capitalize | lowercase | nome */
}
```
-------------------------------------------------------

## text-decoration

* aparencia decorativa de um texto
* line: underline | overline | line-through
    * podemos aplicar mais de 1 valor
* style: wavy | dotted | double | dashed | solid
* color: `<color>` values

```css
p {
    text-decoration: underline ; /* shorthand */
}
```
-------------------------------------------------------

## text-align

* Alinhamento de um texto

```css
p {
    text-align: center; /* left | right | center | justify */
}
```

-------------------------------------------------------

## text-shadow

* Sombra aplicada a um texto
* Permite múltiplos valores

```css
p {
    text-shadow: 1px 1px 1px red,
                2px 2px 1px green; /* offset-x | offset-y | blur-radius | color*/
}
```
-------------------------------------------------------

## shorthand 

* font-style, font-variant, font-weight, font-stretch, font-size, line-height e font-family;

```css
p {
    /*-style, -variant, -weight, -stretch, -size, line-height, e -family*/
    font: italic normal bold normal 3em/1.5 Helvetica, Arial, sans-serif;
}
```




ref: https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant