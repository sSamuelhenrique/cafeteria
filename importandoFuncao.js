i/* importando função do arquivo funcao.js */
const getFlag = require('./funcao');
/* quando imprimo isso a função é executada passando a string --name como argumento pra função */
console.log(`Olá ${getFlag('--name')}`)


/* ENTAO A FUNÇÃO É EXECUTADA E DENTRO DA CONSTANTE index É SALVO O ÍNDICE + 1 ONDE O ARGUMENTO FOI PASSADO  */
/* function getFlag(flag){
   const index = process.argv.indexOf(flag) + 1;
   DAI A FUNÇÃO RETORNA O ELEMENTO DO ARRAY PROCESS.ARGV ONDE O ÍNDICE FOI PASSADO 
   return process.argv[index];
}
module.exports = getFlag; */