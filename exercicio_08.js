/* Operações com Duas Variáveis
Crie um programa que declare duas variáveis inteiras e atribua valores a elas.
O programa deverá mostrar:
➔ a) A diferença entre as duas variáveis.
➔ b) O dobro da primeira variável somado ao triplo da segunda.
➔ c) A multiplicação das duas variáveis. */

function declaradorVariaveis () {
    let numero_1 = prompt("Digite o primeiro numero")
    let numero_2 = prompt("Digite o segundo numero")

    if (numero_1>numero_2){
        console.log("A diferença é: ", + numero_1 - numero_2)
    } else if (numero_1*2 + numero_2*3){
        console.log ("O resultado é: ", + numero_1*2 + numero_2*3 )
    } else if (numero_1 * numero_2){
        console.log("O resultado é: ", numero_1 * numero_2 )
    };

    
        

    }

    //declaradorVariaveis()


