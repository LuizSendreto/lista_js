/*Crie um algoritmo que peça ao usuário uma letra do alfabeto.
O programa deverá verificar se a letra digitada é:
➔ Vogal
➔ Consoante
E mostrar o resultado no console.*/

function verificarLetra() {
    let letra = prompt("Digite uma letra:" + letra);

    if (
        letra == "a" ||
        letra == "e" ||
        letra == "i" ||
        letra == "o" ||      
        letra == "u"    
    ) {
        console.log("Vogal");
    } else {
        console.log("Consoante");
    }
}

//verificarLetra();