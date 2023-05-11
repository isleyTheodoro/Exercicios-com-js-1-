var numero1 = prompt("Digite um numero:")
var operacao = prompt("A operação será: soma, subtração, multiplicação ou divisão? ")
var numero2 = prompt('Digite outro numero')

    function calc(numero1, numero2, operacao) {

        numero1 = parseInt(numero1)
        numero2 = parseInt(numero2)

        var resultado = 0;

        if (operacao == "+") // aqui eu coloquei o simbolo do + apenas para ficar mais facil na hora da soma' ao inves de eu digitiar soma 

        {
            resultado = numero1 + numero2
        
        }else if ( operacao ==  "-")
        {
            resultado = numero1 - numero2
        
        }else if (operacao == "*")
        {
            resultado = numero1 * numero2
       
        }else if ( operacao == "/")
        {
            resultado = numero1 / numero2
        
        } else{
            document.getElementById("erro").innerHTML = "Não foi possivel realizar o cálculo. Nenhum dado inserido."
        }   

        return resultado

    }
// DOM retornar o resultado dentro de uma div no html
 document.getElementById("resposta").innerHTML = ` <strong> A operação ${ numero1} ${ operacao} ${ numero2}  = ${calc(numero1, numero2, operacao)} </strong> `
 

