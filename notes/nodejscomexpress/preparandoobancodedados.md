# Preparando o banco de dados

Acessando o container: `docker exec -it nome_container bash`

Login postgres: `psql -U user`

o user é o nome utilizando na flag POSTGRES_USER

exemplo: `psql -U root`

Listando base ded dados: `\l`

Selecionando uma base de dados: `\c nome_da_base_dados`

Listar as tabelas de uma base de dados: `\dt`
