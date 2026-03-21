/*Transformação de Número Par e Ímpar
Desenvolva um algoritmo que:
➔ Peça um número inteiro ao usuário.
➔ Verifique se o número é par ou ímpar.
O programa deverá:
➔ Se for par, transformá-lo em ímpar.
➔ Se for ímpar, transformá-lo em par.
➔ Mostre o valor final no console.&*/




function verificarParImpar() {
    let numero = parseInt(prompt("Digite um nmero: " + numero));
    if (numero % 2 == 0) {
        numero = numero + 1;
    } else {
        numero = numero + 1;
    }

    console.log("Valor final é: " + numero);

}

//verificarParImpar();