# Cores

Usamos CSS para alterar cores do nosso documento.

## Tipos

* background-color (para caixas)
* color (para textos)
* border-color (para caixas)
* outros...

## Valores

Podemos definir valores por 

* palavra-chave (blue, transparent)
* hexadecimal (#990011)
* funções: rgb, rgba, hsl, hsla

```css
    element {
        /* Keyword values */
        color: currentcolor;

        /* <named-color> values*/
        color: red;
        color: orange;
        color: tan;
        color: rebeccapurple;

        /* <hex-color> values 0-F */
        color: #090;
        color: #99003f;
        color: #0089f0;
        color: #fff998;
        color: #009999;
        color: #103f;


        /* <rgb()> values */
        color: rgb(34, 12, 64, 0.6);
        color: rgba(255, 0, 100, 0.8);
        color: rgb(34 12 64/0.6);

        /* <hsl()> values */
        color: hsl(30, 100%, 50%, 0.6);
        color: hsla(90, 100%, 50%, 0.6);
        color: hsl(30 100% 50% / 0.6);
        color: hsla(30 100% 50% / 0.5);

        /* Global values */
        color: inherit;
        color: initial; 
        color: unset; /* vai pegar a cor do contexto*/
        color: currentcolor;


    }
```