const {EventEmitter} = require('events');

const novoEvento = new EventEmitter();

novoEvento.on('fabrica', (produto) => {
    console.log(`O ${produto} está sendo feito...`);
    console.log(`${produto} finalizado`);
});

function mandaPedido(produto){
    novoEvento.emit('fabrica', produto);
}

mandaPedido('bolo de cenoura')