const readline = require('readline');

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
}

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Digite um número para ver a tabuada: ", (entrada) => {
  const n = Number(entrada.replace(",", ".").trim());
  if (Number.isNaN(n)) {
    console.log("Valor inválido. Digite um número.");
  } else {
    console.log(`Tabuada de ${n}:`);
    for (let i = 1; i <= 10; i++) {
      console.log(`${n} x ${i} = ${n * i}`);
    }
  }
  rl.close();
});
