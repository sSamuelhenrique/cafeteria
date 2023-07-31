//setTimeout executa uma função N vezes
//depois de X milisegundos
const timeOut = 10000;
const finished = () => {console.log("done!")};

setInterval(finished, timeOut);