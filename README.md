## Pré-requisitos


  - É necessário importar o arquivo do banco de dados (backend/src/database/db.sql) para o seu servidor MySQL local.
  - Deve-se criar um arquivo .env, seguindo o template do ".env.example", onde deve-se inserir as configurações de conexão do banco de dados e um segredo que será utilizado pela camada de autenticação para assinar o token.
  - É necessário possuir o [Node.js](https://nodejs.org/en/) instalado na máquina
  - Também, é preciso ter um gerenciador de pacotes seja o [NPM](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/).


## Como Executar

### 1. Clone o projeto e acesse a pasta do mesmo: 

```bash
$ git clone https://github.com/felipefrm/city-group-app

$ cd city-group-app
```

### 2. Execute o backend: 

```bash
# Navegue para o diretório do backend
$ cd backend

# Instale as dependências
$ npm install

# Inicie o backend
$ npm run dev
```

### 3. Execute o frontend: 

```bash
# Navegue para o diretório do frontend
$ cd web

# Instale as dependências
$ npm install

# Inicie o frontend
$ npm run dev
```

### 4. O projeto estará disponível no seu browser pelo endereço http://localhost:3000.