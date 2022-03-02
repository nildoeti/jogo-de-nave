function start() { // início da função start
    $("#inicio").hide();

    $("#fundoGame").append("<div id='jogador' class='anima1'></div>");
    $("#fundoGame").append("<div id='inimigo1' class='anima2' ></div>");
    $("#fundoGame").append("<div id='inimigo2'></div>");
    $("#fundoGame").append("<div id='amigo' class='anima3'></div>");

    //Principais variáveis do jogo
	var jogo = {};

    // definindo as teclas do jogo
    var TECLA = {
        W: 87,
        S: 83,
        D: 68
    };

    jogo.pressionou = [];

    //Verifica se o usuário pressionou alguma tecla
    $(document).keydown(function(e){
    jogo.pressionou[e.which] = true; // para quando o usuário pressiona uma tecla for true
    });


    $(document).keyup(function(e){
    jogo.pressionou[e.which] = false; // para quando o usuário pressiona uma tecla for false
    });


	//Loop do jogo
	jogo.timer = setInterval(loop,30);

	function loop() {
        movefundo();

	} // Fim da função loop()  


    //Função que movimenta o fundo do jogo

	function movefundo() {
        esquerda = parseInt($("#fundoGame").css("background-position"));
	    $("#fundoGame").css("background-position",esquerda-1);

	} // fim da função movefundo()

} // fim da função start