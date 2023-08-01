/* desestruturação (destructuring) É PEGAR DIRETAMENTE DE UM ARRAY OU OBJETO O VALOR DO ELEMENTO. NESSE CASO DENTRO DO OBJETO events CONTÉM UMA 
PROPRIEDADE QUE SE CHAMA EventEmitter, ENTAO CRIAMOS UMA CONSTANTE COM O MESMO NOME DA KEY DA PROPRIEDADE, ASSIM O SEU VALOR SERÁ SALVO NA 
EventEmitter (O VALOR É UMA FUNÇÃO DO ESTILO CLASSE)*/
const { EventEmitter } = require('events');
/* A CONSTANTE ev É UM NOVO OBJETO QUE ESTÁ INSTANCIANDO A CLASSE EventEmitter */
const ev = new EventEmitter();
console.log(ev)
/* console.log(EventEmitter) */