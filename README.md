# Node + React + MongoDB - Dockerized

## Descrição do Projeto

Este projeto consiste em uma aplicação fullstack composta por:

- **Backend:** API desenvolvida em **Node.js + Express**, responsável pela gestão dos dados.
- **Frontend:** Interface web em **React**, que consome a API.
- **Banco de Dados:** **MongoDB** para persistência dos dados.

O objetivo deste projeto é demonstrar a conteinerização completa de uma aplicação web utilizando **Docker** e **Docker Compose**, promovendo boas práticas de deploy, escalabilidade e desenvolvimento moderno.

---

## Participante

- **Yasmin Victoria Oliveira**  
RA: 812308

---

## Funcionalidades da API

- Criar usuários
- Listar todos os usuários
- Buscar usuário por nome ou outros critérios
- Atualizar usuários
- Deletar usuários

---

## Arquitetura dos Containers

O projeto roda utilizando **3 containers**, cada um com uma responsabilidade específica:

| Container        | Descrição                                                              | Porta Local |
|------------------|------------------------------------------------------------------------|-------------|
| `node-app`       | API backend desenvolvida em **Node.js + Express**                     | `8080`      |
| `react-frontend` | Aplicação web frontend feita em **React**                             | `3000`      |
| `mongo`          | Banco de dados **MongoDB**, responsável pela persistência dos dados   | `27017`     |

---
## Uso do Nginx no Frontend

O frontend React é compilado em arquivos estáticos e servido pelo **Nginx**, um servidor web leve e eficiente. Essa abordagem permite:

- Servir a aplicação React como uma Single Page Application (SPA), garantindo que todas as rotas do React sejam atendidas corretamente pelo Nginx.
- Melhor desempenho e estabilidade no ambiente de produção.
- Configuração de proxy reverso para redirecionar chamadas à API para o backend Node.js, mantendo a separação de responsabilidades e facilitando o desenvolvimento.

---
## Como Executar o Projeto

### Clone o repositório e suba os containers

```bash
git clone https://github.com/yasminvo/DevOps-T1
cd DevOps-T1
docker compose up --build
```
## Acessos

- Interface web: http://localhost:3000/

