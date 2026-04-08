
function jogar() {
    let opcoes = ["pedra", "papel", "tesoura"];

    let jogador = prompt("Escolha: pedra, papel ou tesoura").toLowerCase();

    if (!opcoes.includes(jogador)) {
        alert("Escolha inválida!");
        return;
    }

    let computador = opcoes[Math.floor(Math.random() * 3)];

    alert("Computador escolheu: " + computador);

    if (jogador === computador) {
        alert("Empate!");
    } else if (
        (jogador === "pedra" && computador === "tesoura") ||
        (jogador === "papel" && computador === "pedra") ||
        (jogador === "tesoura" && computador === "papel")
    ) {
        alert("Você ganhou!");
    } else {
        alert("Você perdeu!");
    }
}
