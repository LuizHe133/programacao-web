const readline = require('readline');

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

async function jogar() {
  const secreto = getRandomInt(1, 20);
  let tentativas = 0;

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  function pergunta(perguntaTexto) {
    return new Promise((resolve) => {
      rl.question(perguntaTexto, (resposta) => {
        resolve(resposta);
      });
    });
  }

  console.log('Jogo: adivinhe um número entre 1 e 20');

  while (true) {
    const entrada = await pergunta('Digite seu palpite: ');
    const palpite = Number(entrada);

    if (!Number.isInteger(palpite) || palpite < 1 || palpite > 20) {
      console.log('Por favor, insira um número inteiro entre 1 e 20.');
      continue;
    }

    tentativas += 1;

    if (palpite === secreto) {
      console.log(`Parabéns! Você acertou o número ${secreto} em ${tentativas} tentativa(s).`);
      break;
    }

    if (palpite < secreto) {
      console.log('Errado! O número secreto é maior. Tente novamente.');
    } else {
      console.log('Errado! O número secreto é menor. Tente novamente.');
    }
  }

  rl.close();
}

jogar().catch((err) => {
  console.error('Erro no jogo:', err);
  process.exit(1);
});
