//setTimeout executa uma função N vezes
//depois de X milisegundos
const timeOut = 10000;
const finished = () => {console.log("done!")};

/* setInterval É UMA FUNÇÃO QUE EXECUTA UMA FUNÇAO CALLBACK A CADA X MILISEGUNDOS, OU SEJA ELA IRÁ SE REPETIR SEMPRE QUE ESSES MILISEGUNDO FOREM ALCANÇADOS*/
setInterval(finished, timeOut);