$( window ).on("load", function(){
	var contador = 0;
	var m = 1;
	var split_Query;
	//Queries esperadas em ordem
	var query_Tutorial = '[{"nome":"Carne de Vaca","preco":"20","validade":"3"},{"nome":"Carne de Porco","preco":"15","validade":"2"},{"nome":"Repolho","preco":"5","validade":"6"},{"nome":"Cenoura","preco":"6","validade":"7"}]';
	var query1 = '[{"nome_cidade":"Cidade dos Magos","guilda":"Guilda dos Magos","guildmaster":"Mestre dos Magos","quantidade_habitantes":"12564"},{"nome_cidade":"Cidade dos Mercadores","guilda":"Guilda de Mercadores","guildmaster":"Mestre Stonkes","quantidade_habitantes":"8896"},{"nome_cidade":"Cidade SQL","guilda":"Guilda SQL","guildmaster":"Mestre SQL","quantidade_habitantes":"21659"}]';
	var query2 = '[{"cartao":"142287422228","nome":"Nasyra","ranque":"1","classe":"Druida","gold":"791","nome_cidade":"Cidade SQL"},{"cartao":"147398479268","nome":"Refu","ranque":"5","classe":"Barbaro","gold":"566","nome_cidade":"Cidade dos Mercadores"},{"cartao":"168873473879","nome":"Refu","ranque":"8","classe":"Druida","gold":"970","nome_cidade":"Cidade dos Mercadores"},{"cartao":"181565991581","nome":"Leilatha","ranque":"5","classe":"Monge","gold":"631","nome_cidade":"Cidade dos Mercadores"},{"cartao":"185685622237","nome":"Refu","ranque":"3","classe":"Artificer","gold":"665","nome_cidade":"Cidade SQL"},{"cartao":"197198165496","nome":"Talaedra","ranque":"9","classe":"Artificer","gold":"661","nome_cidade":"Cidade dos Magos"},{"cartao":"229851531159","nome":"Refu","ranque":"4","classe":"Barbaro","gold":"657","nome_cidade":"Cidade dos Mercadores"},{"cartao":"244291477227","nome":"Patyna","ranque":"3","classe":"Bardo","gold":"295","nome_cidade":"Cidade SQL"},{"cartao":"315921313967","nome":"Folduin","ranque":"3","classe":"Guerreiro","gold":"128","nome_cidade":"Cidade SQL"},{"cartao":"321955461894","nome":"Galrandir","ranque":"4","classe":"Barbaro","gold":"964","nome_cidade":"Cidade SQL"},{"cartao":"346265144287","nome":"Opik","ranque":"2","classe":"Bardo","gold":"307","nome_cidade":"Cidade SQL"},{"cartao":"378884556434","nome":"Nria","ranque":"5","classe":"Artificer","gold":"371","nome_cidade":"Cidade dos Magos"},{"cartao":"394273744328","nome":"Folduin","ranque":"9","classe":"Monge","gold":"692","nome_cidade":"Cidade dos Mercadores"},{"cartao":"419454738384","nome":"Galrandir","ranque":"6","classe":"Druida","gold":"343","nome_cidade":"Cidade dos Mercadores"},{"cartao":"429969751933","nome":"Hironna","ranque":"8","classe":"Barbaro","gold":"668","nome_cidade":"Cidade SQL"},{"cartao":"452719557286","nome":"Astram","ranque":"4","classe":"Artificer","gold":"633","nome_cidade":"Cidade dos Mercadores"},{"cartao":"462773417698","nome":"Vor","ranque":"3","classe":"Monge","gold":"769","nome_cidade":"Cidade dos Magos"},{"cartao":"486627445755","nome":"Craith","ranque":"7","classe":"Druida","gold":"159","nome_cidade":"Cidade dos Magos"},{"cartao":"529215493975","nome":"Pan","ranque":"9","classe":"Monge","gold":"782","nome_cidade":"Cidade dos Magos"},{"cartao":"537591194971","nome":"Odo","ranque":"2","classe":"Monge","gold":"508","nome_cidade":"Cidade dos Magos"},{"cartao":"539772777796","nome":"Aerich","ranque":"5","classe":"Barbaro","gold":"552","nome_cidade":"Cidade SQL"},{"cartao":"544862692255","nome":"Eloria","ranque":"5","classe":"Clerigo","gold":"330","nome_cidade":"Cidade dos Magos"},{"cartao":"553833427477","nome":"Dasterian","ranque":"1","classe":"Barbaro","gold":"228","nome_cidade":"Cidade SQL"},{"cartao":"565595538856","nome":"Brie","ranque":"4","classe":"Guerreiro","gold":"489","nome_cidade":"Cidade dos Magos"},{"cartao":"578792293578","nome":"Xion","ranque":"5","classe":"Bardo","gold":"908","nome_cidade":"Cidade dos Magos"},{"cartao":"582592524251","nome":"Opik","ranque":"9","classe":"Monge","gold":"495","nome_cidade":"Cidade SQL"},{"cartao":"585181786594","nome":"Pan","ranque":"5","classe":"Barbaro","gold":"475","nome_cidade":"Cidade dos Magos"},{"cartao":"597676222429","nome":"Cecimeric","ranque":"2","classe":"Clerigo","gold":"536","nome_cidade":"Cidade dos Magos"},{"cartao":"618959737336","nome":"Hironna","ranque":"9","classe":"Monge","gold":"568","nome_cidade":"Cidade SQL"},{"cartao":"647957215456","nome":"Ito","ranque":"6","classe":"Clerigo","gold":"415","nome_cidade":"Cidade dos Mercadores"},{"cartao":"675876559141","nome":"Patyna","ranque":"8","classe":"Barbaro","gold":"51","nome_cidade":"Cidade SQL"},{"cartao":"675991475933","nome":"Pan","ranque":"3","classe":"Clerigo","gold":"195","nome_cidade":"Cidade SQL"},{"cartao":"685197968986","nome":"Talaedra","ranque":"9","classe":"Clerigo","gold":"565","nome_cidade":"Cidade SQL"},{"cartao":"739745335235","nome":"Refu","ranque":"7","classe":"Artificer","gold":"653","nome_cidade":"Cidade dos Mercadores"},{"cartao":"751596831414","nome":"Galrandir","ranque":"6","classe":"Guerreiro","gold":"369","nome_cidade":"Cidade dos Magos"},{"cartao":"834449126124","nome":"Nasyra","ranque":"2","classe":"Druida","gold":"654","nome_cidade":"Cidade SQL"},{"cartao":"844724616626","nome":"Opik","ranque":"1","classe":"Bardo","gold":"357","nome_cidade":"Cidade dos Magos"},{"cartao":"911252442533","nome":"Talaedra","ranque":"7","classe":"Barbaro","gold":"648","nome_cidade":"Cidade SQL"},{"cartao":"923392373843","nome":"Cecimeric","ranque":"5","classe":"Barbaro","gold":"133","nome_cidade":"Cidade dos Magos"},{"cartao":"961625269421","nome":"Knani","ranque":"9","classe":"Barbaro","gold":"765","nome_cidade":"Cidade dos Magos"}]'
	var query3 = '[{"cartao":"142287422228","nome":"Nasyra","ranque":"1","classe":"Druida","gold":"791","nome_cidade":"Cidade SQL"},{"cartao":"185685622237","nome":"Refu","ranque":"3","classe":"Artificer","gold":"665","nome_cidade":"Cidade SQL"},{"cartao":"244291477227","nome":"Patyna","ranque":"3","classe":"Bardo","gold":"295","nome_cidade":"Cidade SQL"},{"cartao":"315921313967","nome":"Folduin","ranque":"3","classe":"Guerreiro","gold":"128","nome_cidade":"Cidade SQL"},{"cartao":"321955461894","nome":"Galrandir","ranque":"4","classe":"Barbaro","gold":"964","nome_cidade":"Cidade SQL"},{"cartao":"346265144287","nome":"Opik","ranque":"2","classe":"Bardo","gold":"307","nome_cidade":"Cidade SQL"},{"cartao":"429969751933","nome":"Hironna","ranque":"8","classe":"Barbaro","gold":"668","nome_cidade":"Cidade SQL"},{"cartao":"539772777796","nome":"Aerich","ranque":"5","classe":"Barbaro","gold":"552","nome_cidade":"Cidade SQL"},{"cartao":"553833427477","nome":"Dasterian","ranque":"1","classe":"Barbaro","gold":"228","nome_cidade":"Cidade SQL"},{"cartao":"582592524251","nome":"Opik","ranque":"9","classe":"Monge","gold":"495","nome_cidade":"Cidade SQL"},{"cartao":"618959737336","nome":"Hironna","ranque":"9","classe":"Monge","gold":"568","nome_cidade":"Cidade SQL"},{"cartao":"675876559141","nome":"Patyna","ranque":"8","classe":"Barbaro","gold":"51","nome_cidade":"Cidade SQL"},{"cartao":"675991475933","nome":"Pan","ranque":"3","classe":"Clerigo","gold":"195","nome_cidade":"Cidade SQL"},{"cartao":"685197968986","nome":"Talaedra","ranque":"9","classe":"Clerigo","gold":"565","nome_cidade":"Cidade SQL"},{"cartao":"834449126124","nome":"Nasyra","ranque":"2","classe":"Druida","gold":"654","nome_cidade":"Cidade SQL"},{"cartao":"911252442533","nome":"Talaedra","ranque":"7","classe":"Barbaro","gold":"648","nome_cidade":"Cidade SQL"}]'
	var query4 = '[{"cartao":"315921313967","nome":"Folduin","ranque":"3","classe":"Guerreiro","gold":"128","nome_cidade":"Cidade SQL"},{"cartao":"565595538856","nome":"Brie","ranque":"4","classe":"Guerreiro","gold":"489","nome_cidade":"Cidade dos Magos"},{"cartao":"751596831414","nome":"Galrandir","ranque":"6","classe":"Guerreiro","gold":"369","nome_cidade":"Cidade dos Magos"}]'
	var query5 = '[{"cartao":"01","nome":"Joaquim","ranque":"1","classe":"Guerreiro","gold":"1000","nome_cidade":"Cidade SQL"},{"cartao":"315921313967","nome":"Folduin","ranque":"3","classe":"Guerreiro","gold":"128","nome_cidade":"Cidade SQL"},{"cartao":"565595538856","nome":"Brie","ranque":"4","classe":"Guerreiro","gold":"489","nome_cidade":"Cidade dos Magos"},{"cartao":"751596831414","nome":"Galrandir","ranque":"6","classe":"Guerreiro","gold":"369","nome_cidade":"Cidade dos Magos"}]'
	var query6 = '[{"nome":"Carne de Vaca","preco":"15","validade":"2"},{"nome":"Carne de Porco","preco":"15","validade":"2"},{"nome":"Repolho","preco":"5","validade":"6"},{"nome":"Cenoura","preco":"6","validade":"7"}]';
	var query7 = '[{"cartao":"01","nome":"Joaquim","ranque":"9","classe":"Guerreiro","gold":"1000","nome_cidade":"Cidade SQL"}]';
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
		[
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
			["Bom, direto a neg??cios! N??s estamos na situa????o mais desesperadora poss??vel! O planeta SQL ir?? explodir em breve. Isso tudo porque o Mestre SQL sumiu! Do nada, sabe?!"],
			[0],
			[""],
			[""],
			[1]

		],
		[
			["Ele deve querer que eu, o incr??vel, charmoso e extremamente inteligente DIAMOND ajude seu novo disc??pulo a salvar o mundo!"],
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
			["J?? selecionei o banco de dados pra voc??!?? s?? clicar no bot??o ENVIAR e o exemplo vai aparecer, selecionando tudo da tabela comidas!"],
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
			["??timo! Agora que expliquei o b??sico, por que voc?? n??o tenta? O nome da tabela que queremos olhar ?? ???cidades???, dentro dessa tabela achamos as cidades do planeta sql e suas informa????es!"],
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
			["Como pode ver no modelo, no planeta sql n??s temos v??rias cidades, mas nesse caso, selecionei para voc?? s?? as mais importantes! A cidade que estamos agora ?? a Cidade SQL!"],
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
			["Vamos dar uma olhada em alguns aventureiros, vou fazer uma tabela com alguns interessantes pra voc??!"],
			[0],
			[""],
			[""],
			[1]

		],
		[
			["Tente selecionar tudo de 'aventureiro'!"],
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
			["Okay, j?? sei como resolver! Vamos tentar selecionar s?? os aventureiros que moram na Cidade SQL."],
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
			["Ent??o vamos escrever assim 'Selecionar tudo de aventureiro onde nome_cidade ?? igual a 'Cidade SQL', mas em uma lingua que o banco de dados v?? entender!"],
			[0],
			[""],
			[""],
			[1]

		],
		[
			["Ent??o vamos l??, o comando que queremos escrever ?? 'SELECT * from aventureiro WHERE nome_cidade = 'Cidade SQL''"],
			[1],
			[query3],
			["SELECT * from aventureiro WHERE nome_cidade = 'Cidade SQL'"],
			[0]

		],
		[
			["Boa! Olha s?? todas essas pessoas! Isso me faz querer ainda mais resolver o problema da explos??o do planeta!"],
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
			["Falando nisso, se entendeu bem como funciona o comando WHERE, tente selecionar tudo de 'aventureiro', onde 'classe' seja igual a 'Guerreiro'"],
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
			["Esses s??o os guerreiros, eles protegem todos os cidad??os! Percebeu qu??o poucos s??o? Isso ?? porqu?? uma enorme anomalia m??gica apareceu, e muitos sa??ram pra lutar contra monstros!"],
			[0],
			[""],
			[""],
			[1]

		],
		[
			["Esse ?? um problema que precisamos resolver, mas n??o ainda! Usando os poderes do Mestre SQl primeiro vamos adicionar mais guerreiros!"],
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

		],
		[
			["Usando INSERT podemos inserir novas coisas no banco de dados, usando os poderes do Mestre SQL, podemos criar novos guerreiros assim!"],
			[0],
			[""],
			[""],
			[1]

		],
		[
			["Sendo assim, vamos l??, vou adicionar um guarda!"],
			[1],
			[""],
			["INSERT into AVENTUREIRO(cartao,nome,ranque,classe,gold,nome_cidade) VALUES ('01','Joaquim',1, 'Guerreiro', 1000, 'Cidade SQL')"],
			[0]

		],
		[
			["Agora vamos ver se funcionou! Selecione tudo de aventureiro onde 'classe' seja igual a 'Guerreiro'"],
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
			["Quando usamos os comando INSERT, precisamos seguir o modelo j?? estabelecido na tabela. O modelo pode ser visto logo a baixo de onde escreve os comandos!"],
			[0],
			[""],
			[""],
			[1]

		],
		[
			["Como queremos adicionar algo a aventureiro, devemos seguir o modelo de aventureiro!"],
			[0],
			[""],
			[""],
			[1]

		],
		[
			["VALUES s??o os valores que colocaremos em cada espa??o do modelo de aventureiro, respectivamente, o n??mero do seu cart??o de aventureiro, seu nome, seu ranque, sua classe, o ouro que ele tem, e por fim a cidade onde mora!"],
			[0],
			[""],
			[""],
			[1]

		],
		[
			["Segundo o modelo ent??o, por que n??o tenta? Vou escrever a maior parte para voc??, s?? coloque os detalhes!"],
			[1],
			[""],
			["INSERT into AVENTUREIRO(cartao,nome,ranque,classe,gold,nome_cidade) VALUES ('o cartao de aventureiro aqui cuidando para que ele seja unico','o nome aqui',o ranque dele sem aspas,'a classe aqui', o ouro aqui mas sem aspas, 'e o nome da cidade aqui')"],
			[0]

		],
		[
			["Aaahhh... Eles crescem t??o r??pido... J?? aprendeu metade de tudo que precisa!"],
			[0],
			[""],
			[""],
			[1]

		],
		[
			["Vamos terminar em breve, e voc?? ent??o poder?? salvar a todos!"],
			[0],
			[""],
			[""],
			[1]

		],
		[
			["Bom... Parando de enrolar! Vamos ao pr??ximo passo!"],
			[0],
			[""],
			[""],
			[1]

		],
		[
			["Em muitas ocasi??es, pode ser necess??rio apenas alterar as informa????es dentro de uma tabela, sem inserir novos itens ou mesmo deletar."],
			[0],
			[""],
			[""],
			[1]

		],
		[
			["Nesses casos, usamos o comando UPDATE."],
			[0],
			[""],
			[""],
			[1]

		],
		[
			["Ele nos permite, por exemplo, alterar a classe de um aventureiro da Cidade SQL! Isso sem ter que criar o aventureiro do nada!"],
			[0],
			[""],
			[""],
			[1]

		],
		[
			["Mas vamos l??, n??o temos todo o tempo do mundo, o planeta explodir?? em breve, afinal!"],
			[0],
			[""],
			[""],
			[1]

		],
		[
			["Para usar UPDATE, fazemos assim: Primeiro usamos o comando UPDATE, seguido da tabela que queremos atualizar."],
			[0],
			[""],
			[""],
			[1]

		],
		[
			["Em seguida definimos as informa????es que ser??o mudadas com SET."],
			[0],
			[""],
			[""],
			[1]

		],
		[
			["Por ??ltimo, dizemos onde acontecer??o essas mudan??as usando do comando WHERE. E executamos o comando!"],
			[1],
			[""],
			["UPDATE COMIDAS SET preco = '15', validade = '2' WHERE nome= 'Carne de Vaca'"],
			[0]

		],
		[
			["Selecione agora a tabela comidas para ver o resultado! Lembrando, antes os pre??o da 'Carne de Vaca' era 20 e a sua validade 3!"],
			[1],
			[query6],
			[""],
			[0]

		],
		[
			["??timo, atualizado com sucesso! Sua vez agora!"],
			[0],
			[""],
			[""],
			[1]

		],
		[
			["Tente alterar o ranque do aventureiro de classe Guerreiro que adicionamos antes, Joaquim, para 9, para promov??-lo! Lembre-se que pode sempre voltar se tiver d??vidas!"],
			[1],
			[""],
			[""],
			[0]

		],
		[
			["??timo, muito bem! Agora selecione de aventureiros apenas onde o nome seja igual a Joaquim, para vermos o resultado!"],
			[1],
			[query7],
			[""],
			[0]

		],
		[
			["Muito bom! Agora temos mais um guerrerio de ranque alto! Assim as defesas da cidade SQL est??o novamente est??veis!"],
			[0],
			[""],
			[""],
			[1]

		],
		[
			["Voc?? ?? um aprendiz muito talentoso! Tenho tanto orgulho de ser professor de um prod??gio!"],
			[0],
			[""],
			[""],
			[1]

		],
		[
			["Bom... Talvez o professor mere??a um pouco dos m??ritos tamb??m hmm..."],
			[0],
			[""],
			[""],
			[1]

		],
		[
			["Uh? Ah, sim! Verdade, o planeta! Vamos continuar aprendendo ent??o!"],
			[0],
			[""],
			[""],
			[1]

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
		console.log("a")
		contador++;
		$("#quest").text(falas[contador][0]);
		console.log(contador);
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
		console.log(query)
		split_Query = query.split(" ");
		if(split_Query[0] == "aaaaaaaaaa"){
			
		}
		else{
			$.ajax({
				type: "POST",
				url: "../php/procQuery.php",
				data: {sql: query}, //# 'sql' ser?? enviado como post, com o valor da vari??vel query
				success: function(result){
					//$(".chat").html(result);
					console.log(result);
					let json = $.parseJSON(result);
					console.log(json);
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

					if(falas[contador][2] == result || split_Query[0] == "INSERT" || split_Query[0] == "UPDATE" || split_Query[0] == "DELETE" || contador == 43){ 		// Checa se o resultado da query para a fala ?? o esperado, contador conta qual fala ?? a atual e 
						string+= "<div class='speech-bubble4'>Sucesso!</div>";																							//checa o espa??o [2] de fala, onde fica a query esperada. Isso n??o ?? necessario no caso de INSERT,etc 
						$(".btnContinuar").prop("disabled",false);																										//ent??o h?? condi????es espec??ficas para esses casos.
					}else{																																
						string+= "<div class='speech-bubble4'>Tem certeza que esse ?? o comando certo? Tente novamente.</div>";
					}

					$(".chat").append(string);
				}
				
			});
		}
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