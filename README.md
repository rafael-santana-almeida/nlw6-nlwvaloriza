# <img src="https://nextlevelweek.com/favicon.ico" align="left" height="48" width="48" > Next Level Week#6 - Together | Rocketseat | NLW Valoriza

## :memo: Resumo
A aplicação consiste em uma API para elogiar os usuários através de Tags, perfeito para implementar no ambiente de trabalho.


## :wrench: Tecnologias utilizadas
* :white_check_mark: Nodejs
* :white_check_mark: Express
* :white_check_mark: Typescript
* :white_check_mark: TypeORM
* :white_check_mark: SQLite


## :books: Bibliotecas utilizadas
* :white_check_mark: uuid
* :white_check_mark: bcrypt
* :white_check_mark: jsonwebtoken
* :white_check_mark: class-transformer

## :rocket: Como executar
Para executar a aplicação, siga os passos abaixo.
```
# Clone o repositório
git clone git@github.com:rafael-santana-almeida/nlw6-nlwvaloriza.git

# Acesse a pasta do projeto
cd nlw6-nlwvaloriza

# Instale as dependências
yarn

# Inicialize o proejto
yarn dev
```

## 🛣️ Rotas disponíveis
baseURL: ```http://localhost:3333/```

* POST: ```/users```: Cria um novo usuário.
* GET: ```/users```: Lista todos os usuário da aplicação. Preecisa estar logado.
* POST: ```/login```: Login do usuário na aplicação. 
* POST: ```/compliments```: Cria um elogio para um usuário da aplicação. Precisa estar logado.
* POST: ```/tags```: Cria uma nova Tag. Precisa estar logado e ser Admin. 
* GET: ```/tags```: Lista todas as Tags disponíveis. Precisa estar logado.
* GET: ```/users/compliments/send```: Lista todos os elogios que o usuário logado realizou.
* GET: ```/users/compliments/receive```: Lista todos os elogios recebidos pelo o usuário logado.
