/* ***** UTILIZAR EVENTO ***** */
/* desestruturação (destructuring) É PEGAR DIRETAMENTE DE UM ARRAY OU OBJETO O VALOR DO ELEMENTO. NESSE CASO DENTRO DO OBJETO events CONTÉM UMA 
PROPRIEDADE QUE SE CHAMA EventEmitter, ENTAO CRIAMOS UMA CONSTANTE COM O MESMO NOME DA KEY DA PROPRIEDADE, ASSIM O SEU VALOR SERÁ SALVO NA 
EventEmitter (O VALOR É UMA FUNÇÃO DO ESTILO CLASSE)*/
const { EventEmitter } = require('events');
/* A CONSTANTE ev É UM NOVO OBJETO QUE ESTÁ INSTANCIANDO A CLASSE EventEmitter */
const ev = new EventEmitter();

/* console.log(EventEmitter) */

/* ***** OUVINDO E EXECUTANDO AÇOES PARA EVENTOS ***** */
/* QUANDO O EVENTO É EMITIDO O .on RECEBE OUVE ESSA EMISSÃO E ATIVA A FUNÇÃO REFERENTE AO EVENTO */
ev.on('saySomething', (name) => {
    process.stdout.write(`Olá ${name}\n`)
})

/* ATIVAÇÃO DA FUNÇÃO REFERENTE AO EVENTO É ATIVADA APENAS UMA VEZ */
/* ev.once('saySomething', (name) => {
    console.log(`Olá ${name}`)
}) */ //RESULTADO Olá Samuel

/* ***** EMITIR EVENTOS ***** */
/* ESTAREI EMITINDO UM EVENTO CHAMADO saySomething */
ev.emit('saySomething', 'Samuel');
ev.emit('saySomething', 'Jamelão')



