# tinnova-challenge

Abaixo encontra-se a lista de items a serem implementados no desafio de acordo com o [documento disponibilizado](https://github.com/vinicius-hso/challenge/blob/main/docs/avaliacao_tinnova_2022.pdf):

[x] 1. Votos em relação ao total de eleitores

[x] 2. Algoritmo de ordenação Bubble Sort

[x] 3. Fatorial

[x] 4. Soma dos múltiplos de 3 ou 5

[x] 5. Cadastro de veículos

### Excutando 

Para executar os items 1, 2, 3 e 4 do desafio, execute os seguintes commandos:

```bash
cd ./tinnova-challenge-algorithms

npm install

npm run start
```

Para acessar o código fonte:

[1. Votos em relação ao total de eleitores](https://github.com/vinicius-hso/challenge/tree/main/tinnova-challenge-algorithms/src/VotesPercentual.ts)

[2. Algoritmo de ordenação Bubble Sort](https://github.com/vinicius-hso/challenge/tree/main/tinnova-challenge-algorithms/src/BubbleSort.ts)

[3. Fatorial](https://github.com/vinicius-hso/challenge/tree/main/tinnova-challenge-algorithms/src/Fatorial.ts)

[4. Soma dos múltiplos de 3 ou 5](https://github.com/vinicius-hso/challenge/tree/main/tinnova-challenge-algorithms/src/MultiplesOf3And5.ts)


Para executar o item 5 (cadastro de veículos), execute os seguintes comandos:

```bash
# iniciando o banco de dados via bash
bash ./start.sh

cd ./tinnova-challenge-back

# instalando dependencias da API
npm install

# iniciando API
npm run dev

# a API deverá iniciar em http://localhost:3000/

# indo para o diretório do frontend
cd ../tinnova-challenge-fron

# instalando dependencias do frontend da aplicação
npm install

npm run dev

# a aplicaçãp deverá iniciar em http://localhost:5173/
```

### Tecnologias

Para o desenvolvimento da API foram utilizadas as seguintes tecnologias:

![](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

![](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

![](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)

[TypeORM](https://typeorm.io/)

Para o desevolvimento do banco de dados foram utilizadas as seguintes tecnologias:

![](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)

![](https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white)

Para o frontend da aplicação foram utilizadas as seguintes tecnologias:

![](https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D)

![](https://img.shields.io/badge/Chart.js-FF6384?style=for-the-badge&logo=chartdotjs&logoColor=white)

[Axios](https://axios-http.com/docs/intro)

### Funcionalidades

#### Adicionar veículo

![](https://github.com/vinicius-hso/challenge/blob/main/gifs/create.gif)


#### Editar veículo

![](https://github.com/vinicius-hso/challenge/blob/main/gifs/edit.gif)


#### Excluir veículo

![](https://github.com/vinicius-hso/challenge/blob/main/gifs/delete.gif)

#### Dashboard

* Total de veículos não vendidos

* Total de veículos adicionados na última semana

* Distribuição de veículos por década de fabricação

* Distribuição de veículos por fabricante

![](https://github.com/vinicius-hso/challenge/blob/main/gifs/dashboard.gif)

### API Endpoints

#### Veículos

> GET /veiculos 

*retorna todos os veículos*

![](https://github.com/vinicius-hso/challenge/blob/main/gifs/list-all.gif)

> GET /veiculos?marca={marca}&ano={ano}&cor={cor}

*retorna todos os veículos de acordo com os parâmetros passados*

![](https://github.com/vinicius-hso/challenge/blob/main/gifs/list-all-by-query.gif)

> GET /veiculos/{id}

*retorna os detalhes do veículo*

![](https://github.com/vinicius-hso/challenge/blob/main/gifs/get-by-id.gif)

> POST /veiculos 

*adiciona um novo veículo*

![](https://github.com/vinicius-hso/challenge/blob/main/gifs/create-veiculo.gif)

> PUT /veiculos/{id}

*atualiza os dados do veículo*

![](https://github.com/vinicius-hso/challenge/blob/main/gifs/put.gif)

> PATCH /veiculos/{id}

*atualiza apenas alguns dados do veículo*

![](https://github.com/vinicius-hso/challenge/blob/main/gifs/patch.gif)

> DELETE /veiculos/{id}

*apaga o veículo*

![](https://github.com/vinicius-hso/challenge/blob/main/gifs/put.gif)

#### Marcas

> GET /marcas

*retorna todas as marcas de veículos*

![](https://github.com/vinicius-hso/challenge/blob/main/gifs/marcas.gif)