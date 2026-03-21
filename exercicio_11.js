/* Baseando-se no exercício anterior, crie um programa que calcule o desconto
do INSS de acordo com a faixa salarial.
Tabela de descontos
Faixa Salarial Desconto
Até R$ 1.000,00 8%
De R$ 1.000,01 até R$ 1.500,00 8,5%
Acima de R$ 1.500,00 9%
O programa deverá mostrar:
➔ Salário informado
➔ Taxa de desconto aplicada
➔ Valor do desconto
➔ Salário líquido */

function descontoVariado() {

    let salario = parseFloat(prompt("Digite seu salário:"));
    let taxa;

    if (salario <= 1000) {
        taxa = 0.08;
    } else if (salario <= 1500) {
        taxa = 0.085;
    } else {
        taxa = 0.09;
    }

    let desconto = salario * taxa;
    let salarioLiquido = salario - desconto;

    console.log("Salário informado:", salario);
    console.log("Taxa aplicada:", taxa * 100 + "%");
    console.log("Valor do desconto:", desconto);
    console.log("Salário líquido:", salarioLiquido);
}


