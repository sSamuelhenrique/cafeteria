// Função personalizada para processar a entrada do usuário

  
  // Ouvinte para o evento "data" do stdin
  process.stdin.on('data', processarEntrada = (input) => {
    const numero = parseInt(input.toString().trim());
    const resultado = numero * 2;
    console.log(`O dobro do número digitado é: ${resultado}`);
    process.exit(); // Encerra o programa após processar a entrada
  });
  
  process.stdout.write("Digite um número:");