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
			/*Fala do Diamond*/["Ol??! Voc?? acordou finalmente! Estive te esperando por 234 horas, 34 minutos, 25 segundos e 510 mil??simos!"],
			/*Estado do bot??o de enviar query (0 - Bloqueado 1- Desbloqueado)*/[0],
			/*Resultado esperado da query enviada*/[""],
			/*Query escrita automaticamente, no caso de tutoriais*/[""],
			/*Estado do bot??o de continuar, das falas do Diamond*/[1]
		],
		/*[
			["Eu estava t??o sozinho! O Mestre SQL quase n??o tem uso pra mim com suas incr??veis habilidades! Ent??o saber que posso ajudar o seu novo disc??pulo me deixa cheio de orgulho e satisfa????o!"],
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
			["Meu nome ?? Duplicated Inteligence Adapter ??? Mobile Operation Nullifier D... Ou melhor conhecido como: D.I.A.M.O.N.D. ?? um prazer em te conhecer, jovem aprendiz!"],
			[0],
			[""],
			[""],
			[1]

		],
		[
			["Bom, direto a neg??cios! N??s estamos na situa????o mais desesperadora poss??vel! A ilha SQL ir?? explodir em breve. Isso tudo porque o Mestre SQL sumiu! Do nada, sabe?!"],
			[0],
			[""],
			[""],
			[1]

		],
		[
			["Ele deve querer que eu, o incr??vel, charmoso e extremamente inteligente DIAMOND ajude seu novo disc??pulo a salvar a ilha!"],
			[0],
			[""],
			[""],
			[1]

		],
		[
			["Tudo bem! Vamos l?? ent??o! Primeiro, aprendiz, vamos te ensinar o que ?? um banco de dados!"],
			[0],
			[""],
			[""],
			[1]

		],
		[
			["J?? selecionei o banco de dados 'lista_de_compras' pra voc??!?? s?? clicar no bot??o ENVIAR e o exemplo vai aparecer!"],
			[1],
			[query_Tutorial],
			["SELECT * from Comidas"],
			[0]

		],
		[
			["Em um banco de dados, existem diversas tabelas cheias de colunas, que s??o cheias de linhas tamb??m, imagine igual uma lista de compras!"],
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
			["Dentro da lista, todos os tipos de produtos, como Comida, Produtos de Limpeza, Rem??dios, etc. Essas seriam as tabelas. No momento, estamos olhando a tabela 'Comidas'."],
			[0],
			[""],
			[""],
			[1]

		],
		[
			["E dentro dessas tabelas, na tabela 'Comidas' por exemplo, n??s temos as colunas. As colunas s??o 'nome', 'preco', 'validade'... Aten????o que n??o usei pontua????o na nomeclatura das colunas!"],
			[0],
			[""],
			[""],
			[1]

		],
		[
			["E o que vai preenchendo as colunas ?? o conte??do que guardamos! Considerando a comida, no lugar do nome temos por exemplo Carne de Vaca, no pre??o temos 20 e na validade temos 3"],
			[0],
			[""],
			[""],
			[1]

		],
		[
			["Viu? ?? bem simples! ???Select??? quer dizer selecionar, o asterisco(*) ?? usado quando queremos selecionar tudo dentro de uma tabela, digitar ???from??? ?? o equivalente a digitar ???de???, mas de uma maneira que o banco de dados vai entender,  e ???Comidas??? ?? o nome da tabela que queremos olhar!"],
			[0],
			[""],
			[""],
			[1]

		],
		[
			["Ou seja, ???Selecionar tudo de Comidas??? ?? igual a digitar ???SELECT * from Comidas???!"],
			[0],
			[""],
			[""],
			[1]

		],
		[
			["??timo! Agora que expliquei o b??sico, por que voc?? n??o tenta? O nome da tabela que queremos olhar ?? ???cidade???, dentro dessa tabela achamos as cidades da ilha sql e suas informa????es!"],
			[1],
			[query1],
			[""],
			[0]

		],
		[
			["Uau! Voc?? aprendeu t??o r??pido! Essa proeza ?? digna de um aprendiz do grande Mestre SQL!"],
			[0],
			[""],
			[""],
			[1]

		],
		[
			["Como pode ver no modelo, na ilha sql n??s temos 3 cidades! A cidade que estamos agora ?? a Sql City!"],
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
			["Vamos dar uma olhada em alguns habitantes, vou fazer uma tabela com alguns interessantes pra voc??!"],
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
			["Desse jeito mal d?? pra ver todo mundo!"],
			[0],
			[""],
			[""],
			[1]

		],
		[
			["Okay, j?? sei como resolver! Vamos tentar selecionar s?? as pessoas que moram em Sql City."],
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
			["Ent??o vamos escrever assim 'Selecionar tudo de habitante onde cidade ?? igual a 'Sql City', mas em uma lingua que o banco de dados v?? entender!"],
			[0],
			[""],
			[""],
			[1]

		],
		[
			["Ent??o vamos l??, o comando que queremos escrever ?? 'SELECT * from habitante WHERE cidade = 'Sql City''"],
			[1],
			[query3],
			["SELECT * from habitante WHERE cidade = 'Sql City'"],
			[0]

		],
		[
			["Boa! Olha s?? todas essas pessoas! Isso me faz querer ainda mais resolver o problema da explos??o da ilha!"],
			[0],
			[""],
			[""],
			[1]

		],
		[
			["Imagina se todo mundo tivesse que procurar novas casas? Seria uma trag??dia! Por isso mesmo, tenho que te explicar tudo muito bem!"],
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
			["Isso ai! Voc?? est?? cada vez melhor!"],
			[0],
			[""],
			[""],
			[1]

		],
		[
			["Esses s??o os guardas das cidades, eles protegem todos os cidad??os! Percebeu qu??o poucos s??o? Isso ?? porqu?? uma enorme anomalia m??gica apareceu, e muitos sa??ram pra lutar contra monstros!"],
			[0],
			[""],
			[""],
			[1]

		],
		[
			["Esse ?? um problema que precisamos resolver, mas n??o ainda! Usando os poderes do Mestre SQl primeiro vamos adicionar mais soldados!"],
			[0],
			[""],
			[""],
			[1]

		],
		[
			["Para isso, voc?? precisa aprender um novo comando: 'INSERT'! "],
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
			["Sendo assim, vamos l??, vou adicionar um guarda!"],
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
			["??timo! Viu o poder do Mestre SQL? Nem parece que acabamos de criar uma pessoa do nada!"],
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
			["Quando usamos os comando INSERT, precisamos seguir o modelo j?? estabelecido na tabela. O modelo pode ser visto na parte inferior do site."],
			[0],
			[""],
			[""],
			[1]

		],
		[
			["Como queremos adicionar algo a habitante, devemos seguir o modelo de habitante! E esse ??: habitante(nome, profissao, gold, cidade)"],
			[0],
			[""],
			[""],
			[1]

		],
		[
			["VALUES s??o os valores que colocaremos em cada espa??o do modelo de habitante, respectivamente, seu nome, sua profissao, seu ouro e sua cidade."],
			[0],
			[""],
			[""],
			[1]

		],
		[
			["Segundo o modelo ent??o, por que n??o tenta? Vou escrever a maior parte para voc??, s?? coloque os detalhes!"],
			[1],
			[""],
			["INSERT into habitante(nome, profissao, gold, cidade) VALUES ('Coloque o nome aqui', 'A profissao aqui', O ouro aqui mas sem aspas, 'e o nome da cidade aqui')"],
			[0]

		],
		[
			["--- Fim do conte??do atual---"],
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
			data: {sql: query}, //sql ser?? enviado como post, com o valor da vari??vel query
			success: function(result){
				//$(".chat").html(result);
				console.log(result);
				let json = $.parseJSON(result);
				//console.log(json);
				split_Query = query.split(" ");
				let string = "<div class='speech-bubble3'>Query: "+query+"</div>"
				if(json[0]== "FALSE"){
					string+= "<div class='speech-bubble3'>Erro: "+json[1]+"  Resultado: Falha na Execu????o. </div>";
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

				if(falas[contador][2] == result || split_Query[0] == "INSERT" || split_Query[0] == "UPDATE" || split_Query[0] == "DELETE"){ 		// Checa se o resultado da query para a fala ?? o esperado, contador conta qual fala ?? a atual e 
					string+= "<div class='speech-bubble4'>Sucesso!</div>";																			//checa o espa??o [2] de fala, onde fica a query esperada. Isso n??o ?? necessario no caso de INSERT, 
					$(".btnContinuar").prop("disabled",false);																						//etc ent??o h?? condi????es espec??ficas para esses casoscheca o espa??o [2] de fala, onde fica a query esperada. 
				}else{																																//Isso n??o ?? necessario no caso de INSERT, etc ent??o h?? condi????es espec??ficas para esses casos
					string+= "<div class='speech-bubble4'>Tem certeza que esse ?? o comando certo? Tente novamente.</div>";
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