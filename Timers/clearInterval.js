/* O clearInterval irá cancelar um setInterval, OU SEJA, SE A CADA X MILISEGUNDOS UMA FUNÇÃO É EXECUTADA O clearInterval IRÁ PARAR ESSE INTERVALO */
let timeOut = 1000;
let checking = () => console.log("checking");


let interval = setInterval(checking, timeOut);

/* PORÉM O clearInterval IRIA PARAR A FUNÇÃO LOGO DE INICIO, ENTÃO USAMOS UM setTimeout QUE AGENDA O CANCELAMENTO DA FUNÇÃO CALLBACK SÓ APOS DE X 
MILISEGUNDOS, ASSIM A FUNÇÃO É EXECUTADA VARIAS VEZES ENQUANTO O AGENDAMENTO DE CANCELAMENTO NAO FOR ATINGIDO */
setTimeout( () => clearInterval(interval), 3000)