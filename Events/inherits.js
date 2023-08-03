
/* inherits UMA FUNÇÃO QUE É PROPRIEDADE DO MÓDULO util QUE É USADA PARA ESTABELECER A HERANÇA DE PROPRIEDADES E METODOS DE UMA CLASSE PARA OUTRA*/
/* EM RESUMO É UM UTILITARIO DO NODE.JS QUE PERMITE A HERANÇA DE FUNCIONALIDADES DE UMA FUNÇÃO CONSTRUTORA(CLASSE) PARA OUTRA. ASSIM A FUNÇÃO FILHA HERDA
AS PROPRIEDADES E METODOS DA FUNÇÃO CONSTRUTORA PAI (PRIMEIRA FUNÇÃO) */
const { inherits } = require('util');
/* A CONSTANTE EventEmitter RECEBEU UMA FUNÇÃO CHAMADA EventEmitter QUE É O VALOR DA KEY EventEmitter*/
const { EventEmitter} = require('events');
/* FUNÇÃO CONSTRUTORA (CLASSE) QUE IRÁ CRIAR UM NOVO OBJETO */
function Character(name){
    /* this REFERENCIA AO OBJETO ATUAL CRIADO 
    .name É A KEY DA PROPRIEDADE DO OBJETO
    = name INDICA QUE A KEY name IRÁ RECEBER O VALOR DO PARAMETRO name*/
    this.name = name;
}
/* inherits FARÁ COM QUE A CLASSE Character HERDE A FUNÇÃO EventEmitter, ASSIM O OBJETO CRIADO NA FUNÇÃO Character PODERÁ CRIAR EVENTOS */
inherits(Character, EventEmitter);

/* CRIAÇÃO DO OBJETO chapolin PASSANDO 'Chapolin' COMO ARGUMENTO PARA FUNÇÃO Character, SENDO ASSIM O VALOR DA KEY name*/
const chapolin = new Character('Chapolin');

/* ENTÃO AGORA QUE O OBJETO chapolin HERDOU A FUNÇÃO DO EventEmitter DE CRIAR EVENTOS, chapolin ATRAVES DO .on SERÁ UM LISTENER (OUVINTE) REGISTRADO
QUE QUANDO A EVENTO 'help' FOR EMITIDO O OUVINTE SERÁ ACIONADO ASSIM EXECUTANDO A ARROW FUNCTION E IMPRIMINDO O console.log ABAIXO */
chapolin.on('help', () =>{
    console.log(`\n\nEu! O ${chapolin.name} Colorado!`);
})
console.log("Oh! E agora, quem poderá me defender?");
/* EMISSÃO DO EVENTO 'help' */
chapolin.emit('help');

