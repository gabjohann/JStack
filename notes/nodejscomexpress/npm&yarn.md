# NPM e YARN

## Módulos do Node.js

O node possui três tipos módulos, sendo eles:

- nativos;
- arquivos javascript;
- npm (Node Package Manager).

O npm permite que você crie seus próprios pacotes e compartilhe com a comunidade.

O yarn, assim como o node, é um gerenciador de pacotes. Entretanto, ele faz uso de um arquivo com extensão .lock, esse arquivo "trava" a versão do pacote. Por mais que o pacote seja atualizado, esse arquivo irá garantir que a versão instalada no projeto sempre seja a mesma durante o desenvolvimento.

Atualmente o npm está utilizando este implementando esses arquivos de lock e se igualando na interface.

### Instalação do yarn

Instalação do yarn `npm install -g yarn`. Essa forma fará uma instalação global.

Iniciar um projeto com yarn `yarn init` || `yarn init -y` assim ele irá utilizar os valores padrão e caso seja necessário é só fazer as devidas alterações.

Existe um pacote chamado nodemon que fica escutando as alterações no código e reinicia o servidor automaticamente, entretanto deve ser instalado como dependência de desenvolvimento.

Para iniciar o servidor com o nodemon, primeiro deve-se passar o caminho relativo dele `./node_modules/.bin/nodemon src/index.js`. Uma forma mais prática seria utilizando o npx, `npx nodemon src/index.js`.

### NPM Scripts

Em scripts não se faz necessário o uso do npx .

Executar um npm script com o npm `npm run comandoCriado`
