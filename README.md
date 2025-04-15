## Descrição

Tech Challenge - Software Architecture

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

# Caso queria popupar o banco, acesse o container
$ docker exec -it revenda-carros sh

# Dentro do container rode o seed
$ npx ts-node prisma/seed.ts

# O servidor inciará na porta:8080 - acesse <http://localhost:8080>
```

<a>docker compose up</a>

<p align="center">
  <img src="./assets/01.gif" alt="search" title="search">
</p>

<a>conect to database</a>

<p align="center">
  <img src="./assets/02.gif" alt="search" title="search">
</p>

## Swagger

### Após rodar o projeto, acesse http://localhost:8080/swagger

<a>swegger</a>

<p align="center">
  <img src="./assets/03.gif" alt="search" title="search">
</p>

## Fluxo para consumo da API simulando um atendimento no totem

1. Post - Cadastrar um veículo para venda (Marca, modelo, ano, cor e preço)
<p align="center">
  <img src="./assets/04.gif" alt="search" title="search">
</p>
2. Patch - Editar os dados do veículo;
<p align="center">
  <img src="./assets/05.gif" alt="search" title="search">
</p>
3. Patch - Efetuar a venda de um veículo (CPF da pessoa que comprou, data da venda);
<p align="center">
  <img src="./assets/06.gif" alt="search" title="search">
</p>
4. Get - Listagem de veículos à venda, ordenada por preço, do mais barato para o mais caro.
<p align="center">
  <img src="./assets/07.gif" alt="search" title="search">
</p>
5. Get - Listagem de veículos vendidos, ordenada por preço, do mais barato para o mais caro.
<p align="center">
  <img src="./assets/08.gif" alt="search" title="search">
</p>
6. Registrar todas as datas de alteração das informações relacionadas ao veículo.
<p align="center">
  <img src="./assets/09.gif" alt="search" title="search">
</p>
