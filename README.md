<h1 align="center" style="font-weight: bold;">Project name 💻</h1>

<p align="center">
 <a href="#tech">Technologies</a> • 
 <a href="#started">Getting Started</a> • 
  <a href="#routes">API Endpoints</a> •
 <a href="#colab">Collaborators</a> •
 <a href="#contribute">Contribute</a>
</p>

<p align="center">
    <b>Este projeto é uma API para gerenciar atendimentos, usuários, canais e serviços. Ele utiliza o framework **Express** e o ORM **Sequelize** para interagir com um banco de dados MySQL.</b>
</p>

<h2 id="technologies">💻 Technologies</h2>

- javaScript
- PhpMyadmin
- NodeJS
- expressJs
- Sequelize
  

<h2 id="started">🚀 Getting started</h2>

Aqui está como você pode executar o projeto localmente.

<h3>Pré-requisitos</h3>
Certifique-se de ter os seguintes itens instalados em sua máquina:

Node.js: Ambiente de execução JavaScript. Baixe aqui.
MySQL: Banco de dados relacional. Baixe aqui.
npm: Gerenciador de pacotes do Node.js (geralmente já vem com o Node.js).
Além disso, configure o banco de dados MySQL com as credenciais e informações necessárias no arquivo .env do projeto

<h3>Cloning</h3>

Como clonar o repositório do projeto:

```bash
git clone https://github.com/guilobodev/assistify.git
```

<h3>Starting</h3>

Como iniciar o projeto

```bash
cd nome-do-projeto
npm install
npm start
```

<h2 id="routes">📍 API Endpoints</h2>

Aqui estão as principais rotas da API e os corpos de requisição esperados.
​
| route               | description                                          
|----------------------|-----------------------------------------------------
| <kbd>GET /atendimento</kbd>     | Retorna todos os atendimentos cadastrados com dados relacionados.
| <kbd>POST /atendimento</kbd>     | Cria um novo atendimento. Veja detalhes da requisição.
| <kbd>PUT /atendimento/:id</kbd>     | Atualiza um atendimento existente pelo ID.
| <kbd>>DELETE /atendimento/:id</kbd>     | Deleta um atendimento existente pelo ID.



<h3 id="get-auth-detail">GET /atendimento</h3>

**RESPONSE**
```json
{
    "id": 1,
    "descricao": "Atendimento de suporte",
    "data": "2025-05-08",
    "user": {
      "nome": "João"
    },
    "canal": {
      "nome": "WhatsApp"
    },
    "service": {
      "nome": "Suporte Técnico"
    }
  }
```

<h3 id="post-auth-detail">POST /atendimento</h3>

**REQUEST**
```json
{
  "descricao": "Atendimento de suporte",
  "data": "2025-05-08",
  "userId": 1,
  "canalId": 2,
  "serviceId": 3
}
```

**RESPONSE**
```json
{
  "id": 1,
  "descricao": "Atendimento de suporte",
  "data": "2025-05-08",
  "userId": 1,
  "canalId": 2,
  "serviceId": 3
}
```

