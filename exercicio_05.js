/*Transformação de Número Par e Ímpar
Desenvolva um algoritmo que:
➔ Peça um número inteiro ao usuário.
➔ Verifique se o número é par ou ímpar.
O programa deverá:
➔ Se for par, transformá-lo em ímpar.
➔ Se for ímpar, transformá-lo em par.
➔ Mostre o valor final no console.&*/



function verificarParImpar(numero) {
    if (numero % 2 === 0) {
        return "Par";
    } else {
        return "Ímpar";
    }
}