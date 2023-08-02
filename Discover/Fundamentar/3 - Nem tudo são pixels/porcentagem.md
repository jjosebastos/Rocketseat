# Porcentagens %

* Em muitos casos é tratado da mesma maneira que as distâncias <length>
* Sempre será relativo a algum valor
Exemplo:
- browser > root:html > body > elements (div,p,h1)

<div>
    <p>Este é um parágrafo</p>
</div>

```css
p {
    font-size: 50%;

    /*vai ser 50% da font do div*/
}
``` 
* root:html por padrão o tamanho da fonte é 16px;
Para alterar o tamanho da fonte:

```css

html:root{
    font-size: 14px;
}

```

