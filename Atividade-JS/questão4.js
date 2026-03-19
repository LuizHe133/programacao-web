const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

readline.question('Digite o número de linhas para o triângulo: ', input => {
  const n = parseInt(input, 10);

  if (isNaN(n) || n <= 0) {
    console.log('Informe um número inteiro positivo.');
    readline.close();
    return;
  }

  for (let i = 1; i <= n; i++) {
    console.log('*'.repeat(i));
  }

  readline.close();
});
