#INSERT INTO aventureiro (cartao_aventureiro,nome,ranque,classe,gold,nome_cidade) VALUES ("IBO06TFM4NT","Rhiannon",1,"Paladino",586,"Cidade dos Magos"),
#("UAO79LVV6BR","Lacota",8,"Bárbaro",111,"Cidade dos Mercadores");
import random
import sys

def gera_cartao():
    """Gera um número único para cada aventureiro

    Returns:
        cartao (string): String de 12 caracteres que são inteiros aleatórios de 1 a 9
    """
    cartao = ''
    for x in range(12):
        x = random.randint(1,9)
        cartao+=str(x)
    return cartao

def get_nome():
    """Pega um nome de uma lista pré escrita de nomes

    Returns:
        nome: Um nome aleatório da lista de nomes
    """
    nomes = ['Xion','Aerich','Opik','Cecimeric','Nria','Nasyra','Robick',
             'Vor','Brie','Pan','Craith','Patyna','Knani','Eloria','Astram',
             'Odo','Ito','Dasterian','Refu','Iliathorr','Fanuilos','Folduin',
             'Galrandir','Amaryll','Leilatha','Shafel','Hironna','Talaedra']
    return nomes[random.randint(0,len(nomes))-1]

def get_classe(i):
    """Pega uma classe de uma lista pré feita de classes

    Args:
        i (int): posição na lista de classes

    Returns:
        classe(string): Retorna a string que estava na posição i da lista de classes
    """
    classe = ['Artificer','Barbaro','Bardo','Clerigo','Druida','Guerreiro','Monge']
    return classe[i]

def get_cidade(i):
    """Pega uma cidade de uma lista pré feita de cidades

    Args:
        i (int): inteiro para a posição na lista de cidades

    Returns:
        cidade(string): retorna a cidade que estava na posição i da lista de cidades
    """
    cidade = ['Cidade SQL', 'Cidade dos Mercadores','Cidade dos Magos']
    return cidade[i]

def gera_lista():
    """Gera uma lista com dicionários, os dicionários tem como as chaves os valores esperados da tabela aventureiro

    Returns:
        lista_gerada: Retorna uma lista de dicionários, esse que tem as chaves correspondentes aos valores esperados iguais aos valores na tabela aventureiro do banco de dados
    """
    lista_gerada = []
    for x in range(100):
        cartao_aventureiro = gera_cartao()
        nome = get_nome()
        ranque = random.randint(1,9)
        classe = get_classe(random.randint(0,6))
        gold = round(random.random()*1000)
        nome_cidade = get_cidade(random.randint(0,2))
        dict = {'cartao_aventureiro':cartao_aventureiro,'nome':f'{nome}','ranque':ranque,'classe':f'{classe}',
                'gold':gold,'nome_cidade':f'{nome_cidade}'}
        lista_gerada.append(dict)
    return lista_gerada

#Escrevendo em um arquivo .sql os valores gerados na lista
lista = gera_lista()
original_sdout = sys.stdout
with open('preenche_lista.sql', 'w') as f:
    sys.stdout = f
    for x in lista:
        print(f"INSERT INTO aventureiro (cartao_aventureiro,nome,ranque,classe,gold,nome_cidade) VALUES ({x['cartao_aventureiro']},'{x['nome']}', {x['ranque']}, '{x['classe']}', {x['gold']}, '{x['nome_cidade']}');")
    sys.stdout = original_sdout