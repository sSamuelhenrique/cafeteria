/* clearTimeout cancela um timeOut */
/*QUANDO UMA FUNÇÃO setTimeout É EXECUTADA É GERADO UM OBJETO CONTENDO O ID DO Timeout QUE CONTEM O TEMPO EM QUE A FUNÇÃO CALLBACK DEVERÁ SER EXECUTADA  */

const timeOut = 5000;
const finished = () => console.log("done!!")
const cancelaTimeout = setTimeout(finished, timeOut);
/* PORTANTO O clearTimeout VE O VALOR DESSE ID E CANCELA O setTimeout ANTES DELE SER EXECUTADO */
/* EM RESUMO O clearTimeout É USADO PARA CANCELAR UMA FUNÇÃO QUE FOI AGENDADA PARA SER CHAMADA APÓS UM ATRASO USANDO setTimeout */
clearTimeout(cancelaTimeout);
