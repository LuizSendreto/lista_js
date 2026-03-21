/* Crie um programa que declare duas variáveis inteiras.
O programa deve mostrar no console:
Os dois valores do maior para o menor */

function ordenacaoDoisNumeros() {
    let numero1 = parseInt(prompt("Digite o primeiro numero:"));
    let numero2 = parseInt(prompt("Digite o segundo numero:"));

    if (numero1 >> numero2) {
        console.log(numero1, numero2);
    } else {
        console.log(numero2, numero1)
    }


}
