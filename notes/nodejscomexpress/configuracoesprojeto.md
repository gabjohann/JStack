# Configuração para projetos JS

Para manter padrão de sintaxe em projetos JS pode ser utilizado eslint.

Instalação do eslint:

`yarn add eslint -D`

Inicialização do eslint:

`yarn eslint --init`

- How would you like to use ESLint? To check syntax, find problems, and enforce code style
- What type of modules does your project use? CommonJS
- Where does your project code run? Node
- Which style guide do tou want to follow? Airbnb
- Would you like to install them now with npm? Yes

Após o fim da execução, rodar comando `yarn` para o yarn instalar os pacotes.

Para padronizar a indentação, existe a extensão .editorconfig

```
root = true

[*]
indent_style = space
ident_size = 2
charset = utf-8
trim_trailing_whitespace = true // remove os espaços em  branco
insert_final_newline = true
```
