function exibir(cotacao, simbolos) {
	const nome = document.querySelector(".nome__input");
	const nomeExibicao = document.querySelector(".resposta__nome");
	const valorExibicao = document.querySelector(".resposta__valor");
	const valorBitcoin = calcularBitcoin();
	const valorCalculado = calcularResultado(cotacao);
	const nomeErroMsg = document.querySelector(".nome__msg--erro");

	if (nome.value == "") {
		valorExibicao.innerHTML = "";
		nomeErroMsg.innerHTML = `<p class= msg__erro>Digite seu nome</p>`;
	} else {
		nomeExibicao.innerText = "";
		nomeExibicao.innerText = `Conversão feita para ${nome.value}`;
		valorExibicao.innerHTML = "";
		valorExibicao.innerHTML = `${simbolos} ${valorCalculado} <br> valor em bitcoin (BTC): ${valorBitcoin}`;
		nomeErroMsg.innerHTML = "";
	}
}

function calcularResultado(cotacao) {
	const valor = document.querySelector(".valor__input");
	const valorMsgErro = document.querySelector(".conversor__msg--erro");

	if (!valor.value == "") {
		let valorConvertido = valor.value * cotacao;
		valor.value = "";
		valor.focus();
		valorMsgErro.innerHTML = "";
		return (valorConvertido = valorConvertido.toFixed(2));
	} else {
		valorMsgErro.innerHTML = `<p class= msg__erro>Digite o valor a ser convertido</p>`;
		return "";
	}
}

function calcularBitcoin() {
	const valor = document.querySelector(".valor__input");
	const valorBitcoinEmReal = 117030.70;
	
	if (!valor.value == "") {
		let valorBitcoinCalculado = valor.value * valorBitcoinEmReal;
		return valorBitcoinCalculado.toFixed(2);
	} else {
		return "";
	}
}

const btnDolar = document.querySelector(".dolar");
const btnIene = document.querySelector(".iene");
const btnEuro = document.querySelector(".euro");

btnDolar.addEventListener("click", () => {
	exibir(5.12, "$");
});
btnIene.addEventListener("click", () => {
	exibir(0.039, "¥");
});
btnEuro.addEventListener("click", () => {
	exibir(5.55, "Є");
});
