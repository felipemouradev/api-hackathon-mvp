# API Delta
API entrypoint

# Tecnologias do Projeto
- Mongo
- (JS) Typescript
- NestJs Framework (e Typegoose)

# Rodar em Desenvolvimento

- npm run start:dev -> Inicia a a API

# Atenção
Documentação: a documentação do projeto encontra-se disponivel em <host-da-aplicação>:<porta que a aplicação estiver rodando>/api
escrita em swagger, é possivel executar url e verificar os modelos de dados usados pela aplicação

MONGO: Este projeto usa mongo então atenção nas variaveis de ambiente do projeto

AWS: Verificar as variaveis de ambiente no .env se não existir você deve criar

Seu .env deve ser parecer com isso:

Conta teste paypal
apidelta@mailinator.com / 12345678

```
# MONGO

DB_USER=<SEU USER SE TIVER>
DB_PASSWD=<SEU PASSWORD SE TIVER>
DB_HOST=<SEU HOST>
DB_DATABASE=kraken-hub-db

```

# Deploy para Produção

- npm run prestart:prod  -> Cria uma pasta dist, dentro dessa pasta em /src então:
- copiar `node_modules`, `.env` e `examples_files` da raiz do projeto para dentro da pasta `dist` criada appós rodar o comando acima
- node main.js -> Roda o projeto em produção (Sugestão, usar pm2 ou forever para manter o node de pé)
