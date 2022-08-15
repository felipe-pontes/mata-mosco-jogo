var altura = 0;
var largura = 0;
var vidas = 1;
var tempo = 5;
var nivel = window.location.search;
nivel = nivel.replace("?", " ");

var criamosquitotempo = 1500;

if (nivel === "normal") {
  criamosquitotempo = 1500;
} else if (nivel === "dificil") {
  criamosquitotempo = 1000;
}

//adaptar a larggura da tela pra gerar as posicoes
function screensize() {
  altura = window.innerHeight;
  largura = window.innerWidth;
  console.log(altura, largura);
}

screensize();

var cronometro = setInterval(function () {
  tempo -= 1;
  if (tempo <= 0) {
    clearInterval(cronometro);
    clearInterval(criacao);
    window.location.href = "vitoria.html";
  } else {
    document.getElementById("cronometro").innerHTML = tempo;
  }
}, 1000);

//funcao que gera as posicoes randomicas
function posirandom() {
  //remover o mosquito anterior
  if (document.getElementById("mosquito")) {
    document.getElementById("mosquito").remove();
    if (vidas > 3) {
      window.location.href = "fimdejogo.html";
    } else {
      document.getElementById("v" + vidas).src = "imagens/coracao_vazio.png";
      vidas++;
    }
  }
  /*variaveis  usando a biblioteca Math para pegar as posicoes e tambem evitar
  das moscas sairem da area da tela
  */
  var positionx = Math.floor(Math.random() * largura - 90);
  var positiony = Math.floor(Math.random() * altura) - 90;
  positionx = positionx < 0 ? 0 : positionx;
  positiony = positiony < 0 ? 0 : positiony;

  //definicao da mosca que aparece randomicamente no doc html
  var mosquito = document.createElement("img");
  mosquito.src = "imagens/mosca.png";
  mosquito.className = tamanhorandom() + lado();
  mosquito.style.left = positionx + "px";
  mosquito.style.top = positiony + "px";
  mosquito.style.position = "absolute";
  mosquito.id = "mosquito";
  document.body.appendChild(mosquito);
  mosquito.onclick = function () {
    this.remove();
  };
}

//tamanho randomico para a moscas
function tamanhorandom() {
  var classe = Math.floor(Math.random() * 3);
  switch (classe) {
    case 0:
      return "mosquito";

    case 1:
      return "mosquito2";

    case 2:
      return "mosquito3";
  }
}

//mudar o lado para o qual a mosca olha
function lado() {
  var lado = Math.floor(Math.random() * 2);
  switch (lado) {
    case 0:
      return " Ladoa";

    case 1:
      return " Ladob";
  }
}

//logica da pontuacao
