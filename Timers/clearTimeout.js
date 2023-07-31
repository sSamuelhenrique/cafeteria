/* clearTimeout cancela um timeOut */

const timeOut = 1000;
const finished = () => console.log("done!!")
const teste = 62000
const cancelaTimeout = setTimeout(finished, timeOut);

console.log("teste");
clearTimeout(cancelaTimeout);
