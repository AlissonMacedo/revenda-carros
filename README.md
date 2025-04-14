## Descrição

Tech Challenge - Software Architecture

Acesse a [Wiki do Projeto](https://github.com/tshadz/soat3-tech-chalenge/wiki) para mais informações a respeito dos:

- Requisitos técnicos (business)
- Domain-Driven Design
- S-SDLC
- Arquitetura
- Vídeo explicativo postado no Vimeo

<p align="center">
  <a href="#tecnologias">Tecnologias</a> &#xa0; | &#xa0;
  <a href="#running">Como rodar a aplicação</a> &#xa0; | &#xa0;
  <a href="#docker-compose">Docker Compose</a> &#xa0; | &#xa0;
</p>

<h2 id="tecnologias"> Tecnologias </h2>

As seguintes ferramentas foram usadas na construção do projeto:

- Typescript
- Node.js
- REST Api
- MySQL
- Swagger
- Nest Js

<h2 id="running"> Como rodar a aplicação </h2>

Foi disponibilizado o passo-a-passo para rodar esse projeto localmente com o uso do docker-compose.

```bash
# Clone este repositório
$ git clone <https://github.com/AlissonMacedo/revenda-carros>

# Acesse a pasta do projeto no terminal
$ cd ./revenda-carros

# Crie um arquivo `.env` na pasta raíz do projeto com as suas informações:

DATABASE_URL="mysql://root:root@localhost:3306/revenda-carros-db"
MYSQL_HOST = "localhost"
MYSQL_ROOT_PASSWORD = "root"
MYSQL_ROOT_USER = "root"
MYSQL_DATABASE = "revenda-carros"
MYSQL_USER = "user"
MYSQL_PASSWORD = "user"
MYSQL_PORT = 3306
IMAGE_NAME="revenda-carros"

```

<h3 id="docker-compose"> Docker-compose </h3>

```bash
# Iniciar o projeto
$ docker compose up -d --build

# Acesse o container
$ docker exec -it revenda-carros sh

# Dentro do container rode o seed
$ npx ts-node prisma/seed.ts

# O servidor inciará na porta:8080 - acesse <http://localhost:8080>
```

![docker compose up](https://github.com//AlissonMacedo/revenda-carros/assets/01)
![conect to database](https://github.com//AlissonMacedo/revenda-carros/assets/02)

## Swagger

### Após rodar o projeto, acesse http://localhost:8080/swagger

![swegger](https://github.com//AlissonMacedo/revenda-carros/assets/03)

## Fluxo para consumo da API simulando um atendimento no totem

1. Post - Cadastrar um veículo para venda (Marca, modelo, ano, cor e preço)
2. Patch - Editar os dados do veículo;
3. Patch - Efetuar a venda de um veículo (CPF da pessoa que comprou, data da venda);
4. Get - Listagem de veículos à venda, ordenada por preço, do mais barato para o mais caro
5. Get - Listagem de veículos vendidos, ordenada por preço, do mais barato para o mais caro.
