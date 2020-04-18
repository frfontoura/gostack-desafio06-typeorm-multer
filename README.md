# Desafio 06: Banco de dados e upload de arquivos no Node.js

Este é um desafio do GoStack Bootcamp da RocketSeat. [Link para o desafio](https://github.com/Rocketseat/bootcamp-gostack-desafios/tree/master/desafio-database-upload)

Nesse desafio, foi desenvolvido uma aplicação de gestão de transações,  para treinar o que foi aprendido até agora no Node.js junto ao TypeScript, mas dessa vez incluindo o uso de banco de dados com o TypeORM e envio de arquivos com o Multer!

Essa é aplicação que armazena transações financeiras de entrada e saída e permite o cadastro e a listagem dessas transações, além de permitir a geração de relatórios a partir do envio de um arquivo csv.

# Requisitos

* NodeJs - (desenvolvido utilizando a versão v12.16.2)
* Yarn - (opcional - versão 1.17.3)

# Técnologias utilizadas

* NodeJs
* Typescript
* TypeORM
* Multer
* CSV-parse

# Instalação

1 - Fazer o gitclone:

```
git clone https://github.com/frfontoura/gostack-desafio06-typeorm-multer
```

2 - Instalar as dependências:
```
yarn
```

3 - Verificar as configurações de banco de dados no arquivo ormconfig.json

4 - Executar as migrations:
```
yarn typeorm migrations:run
```

5 - Inicializar o servidor:
```
yarn dev:server
```

# Executando os testes

Para executar os testes, utilizar o comando:
```
yarn test
```
