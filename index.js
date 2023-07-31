/* process standard output write - saída padrão do processo - FUNÇÃO PARA ESCREVER DADOS NA SAÍDA PADRAO*/

/* array com perguntas */
const questions = [
    "Digite seu nome: ",
    "O que você aprendeu hoje? ",
    "O que te deixou aborrecido? E o que você pode fazer para melhorar? ",
    "O que te deixou feliz hoje? ",
    "Quantas pessoas você ajudou hoje? "
]

/* função que ao ser executada irá imprimir as questoes que estão no array no seu índice respectivo que será passado como argumento da função */
const ask = (index = 0) => {
    process.stdout.write(questions[index]);
}
/* array que salvará as respostas */
const answers = [];

/* process.stdin.on (standard input) é um método que irá permitir o usuário escrever atraves do terminal e on espera que ao teclar Enter quando terminar 
de inserir os dados a função callback é acionada*/
process.stdin.on("data", data => {
    /* assim o array salva esse valor que foi passado no atributo da função transformando ele em string*/
    answers.push(data.toString().trim());
    /* a condição passada é que enquanto o array de respostas for menor que o array de questões a função ask é executada passando o tamanho do array 
    answers como argumento, portanto cada pergunta será impressa de acordo com o índice, que sera a quantidade de elementos no array answers */
    if (answers.length < questions.length) {
        ask(answers.length);
        /* se a condição for false, ou seja, o número de elementos do array answers é igual ou maior que o numero de elementos do array questions */
    } else {
        /* o processo é parado */
        process.exit()
    }
});
/* assim esse processo entende que o processo anterior é parado, acionando a função callback que imprime o que o usuário digitou */
process.on('exit', () => {
    const transformToNumber = Number(answers[4].toUpperCase().replace("PESSOAS", ""))
    console.log(`
    Olá ${answers[0]}!
    O que você aprendeu hoje foi: ${answers[1]}
    O que te deixou aborrecido e o que você poderia fazer para melhorar é: ${answers[2]}
    O que te deixou feliz foi ${answers[3]}
    Você ajudou um total de ${transformToNumber} pessoas

    Volte amanhã para mais perguntas!

    `)
})




ask();
