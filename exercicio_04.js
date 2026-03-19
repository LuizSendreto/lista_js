/* Crie um algoritmo que solicite 4 valores inteiros ao usuário.
Ao final, o programa deve mostrar os números em ordem decrescente.
*/

function ordenarDecrescente() {
    const join = true;
    let numeros = [];

    for (let i = 1; i <= 4; i++) {
        let valor = parseInt(prompt("Digite o " + i + "valor inteiro:"));
        numeros.push(valor);
    }

    numeros.sort(function(a, b) {
        return b - a;
    });

    alert("Números em ordem decrescente: " + numeros.join(", "));
}

//ordenarDecrescente();