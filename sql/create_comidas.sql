CREATE TABLE IF NOT EXISTS `ilhasql`.`Comidas`(
	nome VARCHAR(255) NOT NULL,
    preco int(11) null default null,
    validade int(11) null default null
);

INSERT INTO Comidas(none, preco, validade) VALUES ("Carne de Vaca",20,3);