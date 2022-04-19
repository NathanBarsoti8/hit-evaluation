# HIT EVALUATION

API construída para cadastrar clubes e jogadores de futebol e associar uns aos outros


## Instruções

Clone o projeto

```bash
  git clone https://github.com/NathanBarsoti8/hit-evaluation.git
```

Entre no diretório. Caso nunca tenha executado o projeto, rode o seguinte comando. Ele instalará todas as dependências necessárias e iniciará a API na porta 8080.

```bash
  npm run initialUsage 
```

Caso já tenho instalado as dependências anteriormente, rode o seguinte comando. Ele iniciará a API na porta 4444.

```bash
  npm run start 
```

## Endpoints

Criação de jogadores e clubes

```bash
  POST - http://localhost:4444/api/v1/players
  POST - http://localhost:4444/api/v1/clubs
```
Listagem de jogadores e clubes cadastrados

```bash
  GET - http://localhost:4444/api/v1/players
  GET - http://localhost:4444/api/v1/clubs
```

Vincular um jogador a um clube

```bash
  PUT - http://localhost:4444/api/v1/players/:id
```