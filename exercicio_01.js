
/*console.log("Olá, Mundo");

let nome = "Luiz";
let idade = 17;
let peso = 60;
let sabe = true;


console.log("Meu nome é:"+ nome);
*/

function somarNumeros() {
    let soma = 0;
    let continuar = true;

    while(continuar){
        let numero = parseFloat(prompt("Digite um numero(ou digite '0' para encerrar):"));

        if (!isNaN(numero)){
            soma += numero;
        } else{
            alert("Por favor, digite um numero válido.");
        }

        continuar = confirm("Deseja adicionar mais numeros?");

    }

    alert("A soma dos numeros é: " + soma );
}

//somarNumeros();