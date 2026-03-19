const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Digite a quantidade de termos: ', input => {
  const n = parseInt(input.trim(), 10);

  if (isNaN(n) || n <= 0) {
    console.log('Informe um número inteiro positivo.');
    readline.close();
    return;
  }

  let soma = 0;
  let termo = 0;
  let sequencia = [];

  for (let i = 1; i <= n; i++) {
    termo = termo * 10 + 1;
    soma += termo;
    sequencia.push(termo);
  }

  console.log(sequencia.join(' + '));
  console.log('A soma é:', soma.toLocaleString('pt-BR'));
  readline.close();
});
