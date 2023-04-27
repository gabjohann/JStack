# O que são Middlewares?

Quando se tem uma request, ela é resolvida chamando um controller que devolve uma request.

Request -> Controller -> Response

Utilizando Middlware ele intercepta essa requisição. Eles fornecem a possibilidade de manipular objetos request/response e controlam o 'controle de vida' de uma requisição.

Request -> Middlewares -> Controller -> Response

Se em uma aplicação tiver 3 middleware e for feita uma injeção de dependência no terceiro, o primeiro e o segundo nao terão acesso a ela, pois a execução é encadeada.
