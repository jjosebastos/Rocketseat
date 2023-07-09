/*
    function () constructor

    * expressão new
    * criar um novo objeto
    * this keyword
 */

    function Person (name){
        this.name = name
        this.walk = function(){
            return this.name + ' está andando'
        }
    }
    const jose = new Person('José')
    const kethelin = new Person('Kethelin')
    console.log(jose.walk())
    console.log(kethelin.walk())