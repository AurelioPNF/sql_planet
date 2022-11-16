<!DOCTYPE html>
<html>
<head>
	<title>Chat</title>
	<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
	<script src="http://code.jquery.com/jquery-latest.min.js" type="text/javascript"></script>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
	<script src="javascript/scripts.js" type="text/javascript"></script>
	<meta charset="utf-8">
	<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
	<link rel="stylesheet" type="text/css" href="css/styles.css">
</head>
<body>
	<div style="margin-bottom: 2.3%;"> <!--Div Externa -->

		<div class="Diamond"></div> <!-- Div Diamond --> <!--Fim div Diamond -->

		<div class="speech-bubble"><!--Div speech-bubble -->

			<div id = "quest"><!--Div quest -->
				Olá! Você acordou finalmente! Estive te esperando por 234 horas, 34 minutos,  25 segundos e 510 milésimos!
			</div><!--Fim Div quest -->

			<div class="caixa-botao">&nbsp; <!--Div caixa-botao -->
				<button class="btnVoltar">Voltar</button>
				<button class="btnContinuar">Continuar</button>
			</div> <!-- Fim div caixa-botao -->
		</div><!--Fim speech-bubble -->

		<div id="chatDiv"><!-- 'chatDiv' Div -->
			<div class="chat" id="chat"> <!-- chat Div -->
				
			</div><!-- Fim chat Div -->

			<div id="mensagens"><!-- mensagens Div -->	
				<textarea id="comandos" class="comandos" placeholder="SELECT * from cidades"></textarea>
				<button class="btnBotao">Enviar</button>
			</div><!-- Fim mensagens Div -->

			<div class="tabelas"><!--Div tabelas -->
				COMIDAS(nome, preco, validade)   CIDADES(nome_cidade,guilda, prefeito, qtd_habitantes)   AVENTUREIRO(cartao_aventureiro,nome,ranque,classe,gold,nome_cidade)
			</div><!--Fim div tabelas -->

		</div><!--Fim 'chatDiv' Div-->


	</div><!--Fim Div Externa -->
</body>
</html>