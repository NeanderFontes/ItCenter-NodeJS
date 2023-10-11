// Analisar Data e Hora do sistema:
// Dia:
// Mês:
// Ano:
// Numero da Semana:
// Dia da semana:
// Hora:
// Minutos:
// Segundos:

//Data Atual do sistema:
const dataAtual = new Date();
console.log(dataAtual);

//Array para Dias da Semana:
const diaSemanaNome = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"]
const mesAnoNome = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]

//Dia Atua do Sistema através de Numerações(0 = Domingo, 1 = Seg, 2 = Ter...):
const diaSemanaNumerico = dataAtual.getDay();
console.log("Dia da Semana = " + diaSemanaNome[diaSemanaNumerico] + "(" + diaSemanaNumerico + ")");

//Data do dia:
const diaAtualNome = dataAtual.getDate();
console.log("Dia Atual = " + diaAtualNome);

//Mês atual:
const mesAtualNumerico = dataAtual.getMonth();
console.log("Mês Atual = " + mesAnoNome[mesAtualNumerico] + "(" + (mesAtualNumerico + 1) + ")")

//Ano Atual: 
const anoAtual = dataAtual.getFullYear();
console.log("Ano Atual = " + anoAtual)

//Numero da Semana:
//const numSemana = dataAtual.getWeek();

//Hora Atual: 
const horaAtual = dataAtual.getHours();
console.log("Hora = " + horaAtual);

//Minutos Atual:
const minutoAtual = dataAtual.getMinutes();
console.log("Minutos = " + minutoAtual)

//Segundos Atual:
const segundoAtual = dataAtual.getSeconds();
console.log("Segundos = " + segundoAtual)