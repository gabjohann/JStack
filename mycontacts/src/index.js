const express = require('express');

const routes = require('./routes');

const app = express();

// criação de um middleware, o express entende um middleware como uma rota
// eles são executados na sequência em que são declarados
/* app.use((request, response, response) => {
  request.appId = 'MeuAppID';
  response.send('Interceptado pelo Middleware');
}); */

app.use(routes);

app.listen(3000, () =>
  console.log('🔥 Server started at http://localhost:3000')
);
