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

- Criar tutoriais
- Listar todos os tutoriais
- Buscar por título
- Atualizar tutoriais
- Deletar tutoriais
- Marcar tutoriais como publicado ou não publicado

---

## Arquitetura dos Containers

O projeto roda utilizando **4 containers**, cada um com uma responsabilidade específica:

| Container        | Descrição                                                              | Porta Local |
|------------------|------------------------------------------------------------------------|-------------|
| `node-app`       | API backend desenvolvida em **Node.js + Express**                     | `8080`      |
| `react-frontend` | Aplicação web frontend feita em **React**                             | `3000`      |
| `mongo`          | Banco de dados **MongoDB**, responsável pela persistência dos dados   | `27017`     |

---
## Como Executar o Projeto

### Clone o repositório e suba os containers

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
docker-compose up -d
```
## Acessos

- Interface web: http://localhost:3000/

