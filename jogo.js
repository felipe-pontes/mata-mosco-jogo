
//definicoes da tela
var altura = 0;
var largura = 0;
function screensize() {
  altura = window.innerHeight;
  largura = window.innerWidth;
}
screensize();


//variaveis  do sistema dedificuldade e gameplay
var vidas = 1;
var tempo = 5;
var criamosquitotempo = 1500;

//capturar a url para saber a dificuldade
var nivel = window.location.search;
nivel = nivel.replace("?", " ");

//funcao que usa a var nivel para definir a dificuldade
//alterando a velocidade que os mosquitos aparecem
if (nivel === "normal") {
  criamosquitotempo = 1500;
} else if (nivel === "dificil") {
  criamosquitotempo = 1000;
}

//criacao cronometro funcional
var cronometro = setInterval(function () {
  tempo -= 1;
  if (tempo <= 0) {
    clearInterval(cronometro);
    clearInterval(criacao);
    window.location.href = "vitoria.html";
  } 
  else {
    document.getElementById("cronometro").innerHTML = tempo;
  }
}, 1000);

//funcao que gera as posicoes randomicas
function posirandom() {
  /*variaveis  usando a biblioteca Math para pegar as posicoes
   e tambem evitar das moscas sairem da area da tela*/
  var positionx = Math.floor(Math.random() * largura - 90);
  var positiony = Math.floor(Math.random() * altura) - 90;
  positionx = positionx < 0 ? 0 : positionx;
  positiony = positiony < 0 ? 0 : positiony;
  //definicao da mosca que aparece randomicamente no doc html
  //variavel que cria a mosca na tela
  var mosquito = document.createElement("img");
  mosquito.src = "imagens/mosca.png";
  //interacoes das moscas
  mosquito.className = tamanhorandom() + lado();
  //posicionando os mosquitos pelo css
  mosquito.style.left = positionx + "px";
  mosquito.style.top = positiony + "px";
  mosquito.style.position = "absolute";
  mosquito.id = "mosquito";
  document.body.appendChild(mosquito);
  //funcao que remove a mosca caso seja  clicada 
  mosquito.onclick = function () {
    this.remove();
  };
}

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
