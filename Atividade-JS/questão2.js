const readline = require('readline');

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
}
const opcoes = ["pedra", "papel", "tesoura"];

function jogarOpcao(opcaoUsuario) {
  opcaoUsuario = opcaoUsuario.trim().toLowerCase();
  if (!opcoes.includes(opcaoUsuario)) {
    console.log("Opção inválida. Use 'pedra', 'papel' ou 'tesoura'.");
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * opcoes.length);
  const opcaoComputador = opcoes[indiceAleatorio];

  console.log("Você escolheu:", opcaoUsuario);
  console.log("Computador escolheu:", opcaoComputador);

  if (opcaoUsuario === opcaoComputador) {
    console.log("Empate!");
    return;
  }

  const ganhou =
    (opcaoUsuario === "pedra" && opcaoComputador === "tesoura") ||
    (opcaoUsuario === "papel" && opcaoComputador === "pedra") ||
    (opcaoUsuario === "tesoura" && opcaoComputador === "papel");

  console.log(ganhou ? "Você venceu!" : "Computador venceu.");
}

if (typeof prompt === "function") {
  const resposta = prompt("Escolha: pedra, papel ou tesoura");
  if (resposta !== null) jogarOpcao(resposta);
} else {
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Escolha: pedra, papel ou tesoura\n", (resposta) => {
    jogarOpcao(resposta);
    rl.close();
  });
}
