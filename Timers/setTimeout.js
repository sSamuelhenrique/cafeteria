/* RODA UMA FUNÇÃO DEPOIS DE X MILISEGUNDOS */
let timeOut = 5000;
let finished = () => {console.log('done!')}

/* setTimeout função que recebe uma função e um tempo, quando esse tempo for correspondido a função é executada */
setTimeout(finished, timeOut);
/* primeiro será impresso o Mostrar, POIS O setTimeout É ASSINCRONO, OU SEJA, ELE GUARDA UMA REFERENCIA AO CODIGO COLOCANDO O CÓDIGO DA FUNÇÃO NA FILA 
DE TAREFAS (task queue), EXECUTANDO TUDO QUE PUDER ANTES DESSE INTERVALO SER ALCANÇADO, TORNANDO setTimeout ASSINCRONO, DE MANEIRA GROSSEIRA ELE É 
GUARDADO E SO QUANDO O TEMPO DELE FOR ALCANÇADO SERÁ EXECUTADO */
console.log("Mostrar");