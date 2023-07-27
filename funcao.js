function getFlag(string){
   const index = process.argv.indexOf(string) + 1;
   return process.argv[index];
}
module.exports = getFlag;

********* SABER COMO FUNCIONA O CINEMA DEPOIS QUE O SHOPPING FECHA
crie 2 arquivos javascript
o primeiro, irá exportar uma função chamada getFlag() que receberá um argumento do tipo string. Essa função deverá buscar
dentro do array process.argv a flag deseja, que é a String e retornar o valor da flag

O segundo irá importar a função e passar a flag desejada

Iremos rodar no terminal o segundo arquivo as flags --name e --greeting para que seja impresso no terminal a saudação e o nome da pessoa.