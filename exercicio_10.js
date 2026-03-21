/* Folha de Pagamento Simplificada
Crie um programa que simule uma folha de pagamento simples.
O programa deve solicitar:
➔ Nome do funcionário
➔ Salário bruto
➔ Considere que a taxa de desconto do INSS é de 8%.
O programa deverá mostrar:
➔ Nome do funcionário
➔ Salário bruto
➔ Valor do desconto do INSS
➔ Salário líquido
*/

function folhaPagamento () {

    let nome = prompt("Digite seu nome: ");
    let salario = parseInt(prompt("Digite seu salario: "));
    let desconto = 0.08 * salario;
    let salarioLiquido = salario - desconto;

    console.log("Nome do funcionário:", nome);
    console.log("Salário bruto:", salario);
    console.log("Desconto INSS:", desconto);
    console.log("Salário líquido:", salarioLiquido);


}