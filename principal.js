var banners = ["Os melhores do Brasil!","Qualidade e preço baixo!"];
var bannerAtual = 0;

function trocaBaner () {
	bannerAtual = (bannerAtual + 1) % 2;
	document.querySelector('h2#mensagem').textContent = banners[bannerAtual];
}

setInterval(trocaBaner,2000);