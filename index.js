/* process standard output write - saída padrão do processo - FUNÇÃO PARA ESCREVER DADOS NA SAÍDA PADRAO*/


const questions = [
    "O que você aprendeu hoje? ", 
    "O que te deixou aborrecido? E o que você pode fazer para melhorar? ",
    "O que te deixou feliz hoje? ",
    "Quantas pessoas você ajudou hoje? "
]

const ask = (index = 0) => {
    process.stdout.write(questions[index]);
}
const answers = [];


    process.stdin.on("data", data =>{
      answers.push(data.toString().trim() + '\n') 
      
    if(answers.length < questions.length){
        ask(answers.length)
    }else{
        console.log(answers)
        process.exit()
    }
    });
    




ask();
