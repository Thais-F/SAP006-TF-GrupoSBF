# Servidor Fake

Para a realização do teste será necessário consumir as informações
que serão disponbilizadas pelo servidor.

## Requisitos

Para rodar o servidor será necessário que você tenha instalado em sua máquina:

- Node v12.18.x ou maior
- NPM v6.14.x ou maior

## Comandos

Todos os comandos abaixo poderão ser executados na raíz do diretório

- `npm install` - Instale as dependências necessárias

- `npm run start` - Inicie o servidor

- `npm run test` - Rode a suite de testes

## Endpoints

Ao inicializar o servidor, a aplicação estará disponível nesse endereço
<http://localhost:3000>

Abaixo há uma lista com todos os endpoints disponíveis:

| Funçao                            | URI                | Método |
| --------------------------------- | -------------------| ------ |
| Busca de produtos                 | /search            | GET    |
| Promoções em destaque             | /promotions        | GET    |
| Finaliza uma compra               | /checkout          | POST   |
| Documentação da API               | /api-docs          | GET    |
