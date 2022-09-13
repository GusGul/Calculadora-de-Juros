//Importação do plugin de entrada de dados (readline sync)
import input from 'readline-sync';

//Título
console.log('Aplicação de Juros:');

//Entrada de dados que recebe o valor da dívida
let debt = input.question('\nInforme o valor devido: R$');


//Caso a dívida seja 0 o usuário será informado do erro e deverá informar um valor válido.
if(debt == 0){
    while (debt == 0){
        console.log('O valor da dívida deve ser maior que zero!')
        debt = input.question('Informe o valor devido: R$');
    }
}

//Entrada de dados que recebe os dias em atraso
let days = input.question('Informe quantos dias se passaram desde o vencimento do boleto: ');

//Declaração de variáveis
let fee;
let feeValue;
let totalDebt;

//Condição que verifica se a taxa de juros será de 10% ou 5% dependendo dos dias de atraso, ou 0% caso não haja atraso
if (days == 0) {
    fee = 0;
} else {
    fee = (Number(days) > 15) ? 10 : 5;
}

//Condição: se a taxa for 0% o usuário está "em dia", do contrário, a aplicação segue com o cálculo dos juros
if (fee != 0) {
    //Cálculo do valor total após a aplicação dos juros
    feeValue = (debt / 100) * fee;
    totalDebt = Number(debt) + feeValue;

    //Saída de dados para visualização do usuário caso o boleto esteja em atraso
    console.log('\nValor original da dívida: R$'+debt);
    console.log('Dias atrasados: '+days);
    console.log('Taxa de Juros: '+fee+'%');
    console.log('Valor total com juros: R$'+totalDebt+'\n');
} else {
    //Saída de dados para visualização do usuário caso o boleto não esteja em atraso
    console.log('Você está "em dia"!');
}