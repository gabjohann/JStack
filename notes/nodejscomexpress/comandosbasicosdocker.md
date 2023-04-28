# Comandos básicos de Docker

**Baixar imagens Docker:**

docker pull nome_da_imagem

exemplo: `docker pull postgres`

**Listas images docker:**

`docker image ls`

**Criar container docker:**

`docker run --name nome_do_container`
`docker run --name pg -e POSTGRES_USER=root -e POSTGRES_PASSWORD=root -p 5432:5432 -d postgres`

o _-e_ define variáveis de ambiente

o _-p_ define a porta a ser utilizada

o _-d_ define o modo detached para rodar em segundo plano

5432:5432 está dizendo que a porta 5432 do host está fazendo uma mapeamento para a porta 5432 do container

**Listar containers docker que estão em execução:**

`docker container ls` || `docker ps`

**Para execução de um container:**

`docker stop container_id` || `docker stop container`

**Executar um container:**

`docker stop container_id` || `docker start container`

**Deletar um container:**

`docker container rm nome_container`

**Deletar uma imagem docker:**

Para parar uma imagem, os containers que usam está imagem nao podem estar vivos.

`docker rmi nome_container`
