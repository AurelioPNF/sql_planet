$(document).ready(function(){
	var contador = 0;
	var m = 1;
	var split_Query;
	//Queries esperadas em ordem
	var query_Tutorial = '[{"nome":"Carne de Vaca","preco":"20","validade":"3"},{"nome":"Carne de Porco","preco":"15","validade":"2"},{"nome":"Repolho","preco":"5","validade":"6"},{"nome":"Cenoura","preco":"6","validade":"7"}]';
	var query1 = '[{"nome_cidade":"Ganglegoft City","prefeito":"Irubius Montefar","qtd_habitantes":"3215"},{"nome_cidade":"Merchandise City","prefeito":"Stonkes","qtd_habitantes":"4932"},{"nome_cidade":"Sql City","prefeito":"SQL Master","qtd_habitantes":"4512"}]';
	var query2 = '[{"nome":"Junne","profissao":"Guard Leader","gold":"1531","cidade":"Sql City"},{"nome":"Maled","profissao":"Guild Master","gold":"155654","cidade":"Sql City"},{"nome":"Bronk","profissao":"Stable Master","gold":"1123","cidade":"Sql City"},{"nome":"Allie","profissao":"Food Corporation Master","gold":"46846","cidade":"Sql City"},{"nome":"Arline","profissao":"Guard","gold":"3201","cidade":"Sql City"},{"nome":"Graeme","profissao":"Guild Worker","gold":"4154","cidade":"Sql City"},{"nome":"Burke","profissao":"Stable Assistant","gold":"16413","cidade":"Sql City"},{"nome":"Flavia","profissao":"Cook","gold":"4323","cidade":"Sql City"},{"nome":"Tahmuras","profissao":"Cook","gold":"165","cidade":"Sql City"},{"nome":"Uttara","profissao":"Guard","gold":"6301","cidade":"Sql City"},{"nome":"Ingram","profissao":"Guild Guard","gold":"448","cidade":"Sql City"},{"nome":"Sacheverell","profissao":"Horse Rider","gold":"1663","cidade":"Sql City"},{"nome":"Elliott","profissao":"Storage Master","gold":"1123","cidade":"Sql City"},{"nome":"Vonda","profissao":"Storage Worker","gold":"655","cidade":"Sql City"},{"nome":"Clytia","profissao":"Guard","gold":"8897","cidade":"Sql City"},{"nome":"Brigitte","profissao":"Guild Worker","gold":"3456","cidade":"Sql City"},{"nome":"Henderson","profissao":"Stable Assistant","gold":"4213","cidade":"Sql City"},{"nome":"Delta","profissao":"Cook","gold":"2013","cidade":"Sql City"},{"nome":"Rukmini","profissao":"Cook","gold":"16548","cidade":"Sql City"},{"nome":"Rolan","profissao":"Guard","gold":"6384","cidade":"Sql City"},{"nome":"Wynonna","profissao":"Guild Guard","gold":"31435","cidade":"Sql City"},{"nome":"Georgia","profissao":"Horse Rider","gold":"654","cidade":"Sql City"},{"nome":"Vidar","profissao":"Storage Worker","gold":"2135","cidade":"Sql City"},{"nome":"Vidar","profissao":"Storage Worker","gold":"2135","cidade":"Sql City"},{"nome":"Hector","profissao":"Guard Leader","gold":"6126","cidade":"Ganglegoft City"},{"nome":"Lucie","profissao":"Guild Master","gold":"85472","cidade":"Ganglegoft City"},{"nome":"Annie","profissao":"Stable Master","gold":"2456","cidade":"Ganglegoft City"},{"nome":"York","profissao":"Food Corporation Master","gold":"37934","cidade":"Ganglegoft City"},{"nome":"Thorn","profissao":"Blacksmith","gold":"612","cidade":"Ganglegoft City"},{"nome":"Xena","profissao":"Warrior","gold":"1563","cidade":"Ganglegoft City"},{"nome":"Kiev","profissao":"Gate Keeper","gold":"1523","cidade":"Ganglegoft City"},{"nome":"Celene","profissao":"Witch","gold":"7232","cidade":"Ganglegoft City"},{"nome":"Geralt","profissao":"Witcher","gold":"7232","cidade":"Ganglegoft City"},{"nome":"Veigas","profissao":"Cook","gold":"1535","cidade":"Ganglegoft City"},{"nome":"Zelphar","profissao":"High Mage","gold":"7561","cidade":"Ganglegoft City"},{"nome":"Aela","profissao":"Huntress","gold":"2223","cidade":"Ganglegoft City"},{"nome":"Vidar","profissao":"Storage Worker","gold":"21235","cidade":"Ganglegoft City"},{"nome":"Kronk","profissao":"Guard Leader","gold":"1235","cidade":"Merchandise City"},{"nome":"Willow","profissao":"Guild Master","gold":"1516436","cidade":"Merchandise City"},{"nome":"Fealth","profissao":"Stable Master","gold":"4568","cidade":"Merchandise City"},{"nome":"Hemst","profissao":"Food Corporation Master","gold":"65485","cidade":"Merchandise City"},{"nome":"Feit","profissao":"Dwarf Blacksmith","gold":"13764","cidade":"Merchandise City"},{"nome":"Aeon","profissao":"Blacksmith","gold":"9887","cidade":"Merchandise City"},{"nome":"Julius","profissao":"Bodybuilder","gold":"512","cidade":"Merchandise City"},{"nome":"Manicon","profissao":"Builder","gold":"1231","cidade":"Merchandise City"},{"nome":"Carn","profissao":"Weapon Sharpener","gold":"7856","cidade":"Merchandise City"},{"nome":"Luke","profissao":"Stable Guard","gold":"531","cidade":"Merchandise City"},{"nome":"Veidar","profissao":"Storage Worker","gold":"155","cidade":"Merchandise City"},{"nome":"Carene","profissao":"Stable Worker","gold":"2223","cidade":"Merchandise City"}]';
	var query3 = '[{"nome":"Junne","profissao":"Guard Leader","gold":"1531","cidade":"Sql City"},{"nome":"Maled","profissao":"Guild Master","gold":"155654","cidade":"Sql City"},{"nome":"Bronk","profissao":"Stable Master","gold":"1123","cidade":"Sql City"},{"nome":"Allie","profissao":"Food Corporation Master","gold":"46846","cidade":"Sql City"},{"nome":"Arline","profissao":"Guard","gold":"3201","cidade":"Sql City"},{"nome":"Graeme","profissao":"Guild Worker","gold":"4154","cidade":"Sql City"},{"nome":"Burke","profissao":"Stable Assistant","gold":"16413","cidade":"Sql City"},{"nome":"Flavia","profissao":"Cook","gold":"4323","cidade":"Sql City"},{"nome":"Tahmuras","profissao":"Cook","gold":"165","cidade":"Sql City"},{"nome":"Uttara","profissao":"Guard","gold":"6301","cidade":"Sql City"},{"nome":"Ingram","profissao":"Guild Guard","gold":"448","cidade":"Sql City"},{"nome":"Sacheverell","profissao":"Horse Rider","gold":"1663","cidade":"Sql City"},{"nome":"Elliott","profissao":"Storage Master","gold":"1123","cidade":"Sql City"},{"nome":"Vonda","profissao":"Storage Worker","gold":"655","cidade":"Sql City"},{"nome":"Clytia","profissao":"Guard","gold":"8897","cidade":"Sql City"},{"nome":"Brigitte","profissao":"Guild Worker","gold":"3456","cidade":"Sql City"},{"nome":"Henderson","profissao":"Stable Assistant","gold":"4213","cidade":"Sql City"},{"nome":"Delta","profissao":"Cook","gold":"2013","cidade":"Sql City"},{"nome":"Rukmini","profissao":"Cook","gold":"16548","cidade":"Sql City"},{"nome":"Rolan","profissao":"Guard","gold":"6384","cidade":"Sql City"},{"nome":"Wynonna","profissao":"Guild Guard","gold":"31435","cidade":"Sql City"},{"nome":"Georgia","profissao":"Horse Rider","gold":"654","cidade":"Sql City"},{"nome":"Vidar","profissao":"Storage Worker","gold":"2135","cidade":"Sql City"},{"nome":"Vidar","profissao":"Storage Worker","gold":"2135","cidade":"Sql City"}]';
	var query4 = '[{"nome":"Arline","profissao":"Guard","gold":"3201","cidade":"Sql City"},{"nome":"Uttara","profissao":"Guard","gold":"6301","cidade":"Sql City"},{"nome":"Clytia","profissao":"Guard","gold":"8897","cidade":"Sql City"},{"nome":"Rolan","profissao":"Guard","gold":"6384","cidade":"Sql City"}]';
	var query5 = '[{"nome":"Arline","profissao":"Guard","gold":"3201","cidade":"Sql City"},{"nome":"Uttara","profissao":"Guard","gold":"6301","cidade":"Sql City"},{"nome":"Clytia","profissao":"Guard","gold":"8897","cidade":"Sql City"},{"nome":"Rolan","profissao":"Guard","gold":"6384","cidade":"Sql City"},{"nome":"Joaquim","profissao":"Guard","gold":"1000","cidade":"Sql City"}]'
	//console.log(contador);
	$(".btnBotao").prop("disabled",true);
	var falas = [
		[
			/*Fala do Diamond*/["Olá! Você acordou finalmente! Estive te esperando por 234 horas, 34 minutos, 25 segundos e 510 milésimos!"],
			/*Estado do botão de enviar query (0 - Bloqueado 1- Desbloqueado)*/[0],
			/*Resultado esperado da query enviada*/[""],
			/*Query escrita automaticamente, no caso de tutoriais*/[""],
			/*Estado do botão de continuar, das falas do Diamond*/[1]
		],
		/*[
			["Eu estava tão sozinho! O Mestre SQL quase não tem uso pra mim com suas incríveis habilidades! Então saber que posso ajudar o seu novo discípulo me deixa cheio de orgulho e satisfação!"],
			[0],
			[""],
			[""],
			[1]
		],
		[
			["Ah! Quem sou eu? Desculpe, esqueci de me apresentar! Ahem!"],
			[0],
			[""],
			[""],
			[1]
		],
		[
			["Meu nome é Duplicated Inteligence Adapter – Mobile Operation Nullifier D... Ou melhor conhecido como: D.I.A.M.O.N.D. É um prazer em te conhecer, jovem aprendiz!"],
			[0],
			[""],
			[""],
			[1]

		],
		[
			["Bom, direto a negócios! Nós estamos na situação mais desesperadora possível! A ilha SQL irá explodir em breve. Isso tudo porque o Mestre SQL sumiu! Do nada, sabe?!"],
			[0],
			[""],
			[""],
			[1]

		],
		[
			["Ele deve querer que eu, o incrível, charmoso e extremamente inteligente DIAMOND ajude seu novo discípulo a salvar a ilha!"],
			[0],
			[""],
			[""],
			[1]

		],
		[
			["Tudo bem! Vamos lá então! Primeiro, aprendiz, vamos te ensinar o que é um banco de dados!"],
			[0],
			[""],
			[""],
			[1]

		],
		[
			["Já selecionei o banco de dados 'lista_de_compras' pra você!É só clicar no botão ENVIAR e o exemplo vai aparecer!"],
			[1],
			[query_Tutorial],
			["SELECT * from Comidas"],
			[0]

		],
		[
			["Em um banco de dados, existem diversas tabelas cheias de colunas, que são cheias de linhas também, imagine igual uma lista de compras!"],
			[0],
			[""],
			[""],
			[1]

		],
		[
			["Na lista de compras, o banco de dados seria a lista toda!"],
			[0],
			[""],
			[""],
			[1]

		],
		[
			["Dentro da lista, todos os tipos de produtos, como Comida, Produtos de Limpeza, Remédios, etc. Essas seriam as tabelas. No momento, estamos olhando a tabela 'Comidas'."],
			[0],
			[""],
			[""],
			[1]

		],
		[
			["E dentro dessas tabelas, na tabela 'Comidas' por exemplo, nós temos as colunas. As colunas são 'nome', 'preco', 'validade'... Atenção que não usei pontuação na nomeclatura das colunas!"],
			[0],
			[""],
			[""],
			[1]

		],
		[
			["E o que vai preenchendo as colunas é o conteúdo que guardamos! Considerando a comida, no lugar do nome temos por exemplo Carne de Vaca, no preço temos 20 e na validade temos 3"],
			[0],
			[""],
			[""],
			[1]

		],
		[
			["Viu? É bem simples! ‘Select’ quer dizer selecionar, o asterisco(*) é usado quando queremos selecionar tudo dentro de uma tabela, digitar ‘from’ é o equivalente a digitar ‘de’, mas de uma maneira que o banco de dados vai entender,  e ‘Comidas’ é o nome da tabela que queremos olhar!"],
			[0],
			[""],
			[""],
			[1]

		],
		[
			["Ou seja, ‘Selecionar tudo de Comidas’ é igual a digitar ‘SELECT * from Comidas’!"],
			[0],
			[""],
			[""],
			[1]

		],
		[
			["Ótimo! Agora que expliquei o básico, por que você não tenta? O nome da tabela que queremos olhar é ‘cidade’, dentro dessa tabela achamos as cidades da ilha sql e suas informações!"],
			[1],
			[query1],
			[""],
			[0]

		],
		[
			["Uau! Você aprendeu tão rápido! Essa proeza é digna de um aprendiz do grande Mestre SQL!"],
			[0],
			[""],
			[""],
			[1]

		],
		[
			["Como pode ver no modelo, na ilha sql nós temos 3 cidades! A cidade que estamos agora é a Sql City!"],
			[0],
			[""],
			[""],
			[1]

		],
		[
			["Agora que pode ver as cidades, viu quantos habitantes tem em cada uma?"],
			[0],
			[""],
			[""],
			[1]

		],
		[
			["Vamos dar uma olhada em alguns habitantes, vou fazer uma tabela com alguns interessantes pra você!"],
			[0],
			[""],
			[""],
			[1]

		],
		[
			["Tente selecionar tudo de 'habitante'!"],
			[1],
			[query2],
			[""],
			[0]

		],
		[
			["Woah! Olha quanta gente!"],
			[0],
			[""],
			[""],
			[1]

		],
		[
			["Desse jeito mal dá pra ver todo mundo!"],
			[0],
			[""],
			[""],
			[1]

		],
		[
			["Okay, já sei como resolver! Vamos tentar selecionar só as pessoas que moram em Sql City."],
			[0],
			[""],
			[""],
			[1]

		],
		[
			["Pra fazer isso, precisamos usar um novo comando, chamado 'WHERE', que significa onde. Usamos WHERE assim: 'WHERE coluna = algo'"],
			[0],
			[""],
			[""],
			[1]

		],
		[
			["Então vamos escrever assim 'Selecionar tudo de habitante onde cidade é igual a 'Sql City', mas em uma lingua que o banco de dados vá entender!"],
			[0],
			[""],
			[""],
			[1]

		],
		[
			["Então vamos lá, o comando que queremos escrever é 'SELECT * from habitante WHERE cidade = 'Sql City''"],
			[1],
			[query3],
			["SELECT * from habitante WHERE cidade = 'Sql City'"],
			[0]

		],
		[
			["Boa! Olha só todas essas pessoas! Isso me faz querer ainda mais resolver o problema da explosão da ilha!"],
			[0],
			[""],
			[""],
			[1]

		],
		[
			["Imagina se todo mundo tivesse que procurar novas casas? Seria uma tragédia! Por isso mesmo, tenho que te explicar tudo muito bem!"],
			[0],
			[""],
			[""],
			[1]

		],
		[
			["Falando nisso, se entendeu bem como funciona o comando WHERE, tente selecionar tudo de 'habitante', onde 'profissao' seja igual a 'Guard'"],
			[1],
			[query4],
			[""],
			[0]

		],
		[
			["Isso ai! Você está cada vez melhor!"],
			[0],
			[""],
			[""],
			[1]

		],
		[
			["Esses são os guardas das cidades, eles protegem todos os cidadãos! Percebeu quão poucos são? Isso é porquê uma enorme anomalia mágica apareceu, e muitos saíram pra lutar contra monstros!"],
			[0],
			[""],
			[""],
			[1]

		],
		[
			["Esse é um problema que precisamos resolver, mas não ainda! Usando os poderes do Mestre SQl primeiro vamos adicionar mais soldados!"],
			[0],
			[""],
			[""],
			[1]

		],
		[
			["Para isso, você precisa aprender um novo comando: 'INSERT'! "],
			[0],
			[""],
			[""],
			[1]

		],*/
		[
			["Usando INSERT podemos inserir novas coisas no banco de dados, usando os poderes do Mestre SQL, podemos criar novos guardas assim!"],
			[0],
			[""],
			[""],
			[1]

		],
		[
			["Sendo assim, vamos lá, vou adicionar um guarda!"],
			[1],
			[""],
			["INSERT into habitante(nome, profissao, gold, cidade) VALUES ('Joaquim', 'Guard', 1000, 'Sql City')"],
			[0]

		],
		[
			["Agora vamos ver se funcionou! Selecione tudo de habitante onde profissao seja igual a 'Guard'"],
			[1],
			[query5],
			[""],
			[0]

		],
		[
			["Ótimo! Viu o poder do Mestre SQL? Nem parece que acabamos de criar uma pessoa do nada!"],
			[0],
			[""],
			[""],
			[1]

		],
		[
			["Deixe-me te explicar bem como funciona!"],
			[0],
			[""],
			[""],
			[1]

		],
		[
			["Quando usamos os comando INSERT, precisamos seguir o modelo já estabelecido na tabela. O modelo pode ser visto na parte inferior do site."],
			[0],
			[""],
			[""],
			[1]

		],
		[
			["Como queremos adicionar algo a habitante, devemos seguir o modelo de habitante! E esse é: habitante(nome, profissao, gold, cidade)"],
			[0],
			[""],
			[""],
			[1]

		],
		[
			["VALUES são os valores que colocaremos em cada espaço do modelo de habitante, respectivamente, seu nome, sua profissao, seu ouro e sua cidade."],
			[0],
			[""],
			[""],
			[1]

		],
		[
			["Segundo o modelo então, por que não tenta? Vou escrever a maior parte para você, só coloque os detalhes!"],
			[1],
			[""],
			["INSERT into habitante(nome, profissao, gold, cidade) VALUES ('Coloque o nome aqui', 'A profissao aqui', O ouro aqui mas sem aspas, 'e o nome da cidade aqui')"],
			[0]

		],
		[
			["--- Fim do conteúdo atual---"],
			[1],
			[""],
			[""],
			[1]

		]
	];



	$(".btnContinuar").click(function(){
		contador++;
		$("#quest").text(falas[contador][0]);
		//console.log(contador);
		if(falas[contador][1] == 0){
			$(".btnBotao").prop("disabled",true);
		}else{
			$(".btnBotao").prop("disabled",false);
		}
		if(falas[contador][4] == 0){
			$(".comandos").val(falas[contador][3]);
			$(".btnContinuar").prop("disabled",true);
		}
		if(contador!=7 && contador!=26){
			$(".comandos").prop("readonly",false);
		}else{
			$(".comandos").prop("readonly",true);
		}
		if(falas[contador-1][4] == 0){
			$(".comandos").val(falas[contador][3]);
		}
	});
	$(".btnVoltar").click(function(){
		contador--;
		if(contador<0){
			contador=0;
		}
		$("#quest").text(falas[contador][0]);
		//console.log(contador);
		if(falas[contador][1] == 0){
			$(".btnBotao").prop("disabled",true);
		}else{
			$(".btnBotao").prop("disabled",false);
		}
		if(falas[contador][4] == 0){
			$(".comandos").val(falas[contador][3]);
			$(".btnContinuar").prop("disabled",true);
		}
		if(falas[contador+1][4] == 0){
			$(".comandos").val('');
			$(".btnContinuar").prop("disabled",false);
		}
		if(contador!=7 && contador!=26){
			$(".comandos").prop("readonly",false);
		}else{
			$(".comandos").prop("readonly",true);
		}
	});

	$(".btnBotao").click(function(){
		let query = $(".comandos").val();
		$.ajax({
			type: "POST",
			url: "procQuery.php",
			data: {sql: query}, //sql será enviado como post, com o valor da variável query
			success: function(result){
				//$(".chat").html(result);
				console.log(result);
				let json = $.parseJSON(result);
				//console.log(json);
				split_Query = query.split(" ");
				let string = "<div class='speech-bubble3'>Query: "+query+"</div>"
				if(json[0]== "FALSE"){
					string+= "<div class='speech-bubble3'>Erro: "+json[1]+"  Resultado: Falha na Execução. </div>";
				}
				else if(json[0] == "TRUE"){
					string+="<div class='speech-bubble3'>Resultado: Sucesso. </div>";
				}
				else{
					string += "<div class='speech-bubble2'><table>";
					let head = 1;
					$(json).each(function(i,val){
						if(head){
							string += "<tr>";
							$.each(val,function(k,v){
								string += "<th>" + k + "</th>";
							});
							string += "</tr>";
							head = 0;
						}
						string += "<tr>";
						$.each(val,function(k,v){
							string += "<td>" + v + "</td>";
						});
						string += "</tr>";
					});
					string += "</table></div>";
				}
				string +="<br>";

				if(falas[contador][2] == result || split_Query[0] == "INSERT" || split_Query[0] == "UPDATE" || split_Query[0] == "DELETE"){ 		// Checa se o resultado da query para a fala é o esperado, contador conta qual fala é a atual e 
					string+= "<div class='speech-bubble4'>Sucesso!</div>";																			//checa o espaço [2] de fala, onde fica a query esperada. Isso não é necessario no caso de INSERT, 
					$(".btnContinuar").prop("disabled",false);																						//etc então há condições específicas para esses casoscheca o espaço [2] de fala, onde fica a query esperada. 
				}else{																																//Isso não é necessario no caso de INSERT, etc então há condições específicas para esses casos
					string+= "<div class='speech-bubble4'>Tem certeza que esse é o comando certo? Tente novamente.</div>";
				}

				$(".chat").append(string);
			}
			
		});
		var n =  $(".chat").height() * m;
		$(".chat").animate({
    		scrollTop: n
  		}, n);
  		m++;
  		//console.log(n);
		/*var n = $(".chat").height() * 2;
    	$(".chat").animate({ scrollTop: n }, 100);
		*/
		/*if(falas[contador][4] == 0){
			$(".btnContinuar").prop("disabled",false);
		}
		*/
	});
});