# API Contacts
Olá está é uma api para você cadastrar seus contatos

## Instalação
Para rodar a aplicação é necessário Node v18.13.0 ou maior, não foi testado em versões inferiores

1º Passo - Clonando repositório <br>
No seu terminal digite os comandos abaixo
```
git clone git@github.com:wilsonmesquita03/contacts.git
cd contacts
```
2º Passo - Instalando dependências
```
yarn install
```
3º Passo - Rodando o servidor
```
yarn dev
```
### Variáveis de ambiente
O projeto por padrão utiliza db.sqlite3 na memória, então sempre que reinicia os dados são apagados <br>
É possivel alterar isso passando dados de um banco de dados postgreSQL no .env e setando a chave ```NODE_ENV=build``` no .env
```
HOST=
POSTGRES_USER=
POSTGRES_PASSWORD=
POSTGRES_DB=
SECRET_KEY=
NODE_ENV=
```

## Rotas <br>
Temos um CRUD de usuários e de contatos <br>
<br>
baseUrl: localhost:8000
<br>
<br>
GET - /client

```
STATUS 200 
```
Response
```
[
  {
    "id": number
    "email": string
    "tel_number": string
    "created_at": Date
    "updated_at": Date
    "contacts": contacts[]
  },
  {
    "id": number
    "email": string
    "tel_number": string
    "created_at": Date
    "updated_at": Date
    "contacts": contacts[]
  }
]
```
<br>
<br>
POST - /client

```
STATUS 200 
```
Body  
```
{
  "email": string,
  "name": string,
  "tel_number": string,
  "password": string
}
```
Response
```
{
  "email": string,
  "name": string,
  "tel_number": string,
  "id": number,
  "created_at": Date,
  "updated_at": Date
}
```
Há outras rotas ainda não documentadas aqui



## Front-End <br>
Temos um front online: https://contacts-web-wilsonmesquita03.vercel.app/ <br>
Você também pode clonar aqui: https://github.com/wilsonmesquita03/contacts-web <br>
Caso clone é preciso criar um .env na raiz do projeto front e passar a base url do servidor ```REACT_APP_API_BASE_URL=<baseUrl>```

