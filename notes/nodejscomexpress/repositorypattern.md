# Repository Pattern

Na API criada no primeiro módulo o Data Source tinha como fonte de dados um Array. Se em dado momento essa fonte mudasse para consumo de uma API, um arquivo .json, todo o controller teria de ser refatorado o que faz com que toda a regra de negócio seja perdida justamente onde se encontra os dados sensíveis da aplicação.

O repository pattern diz que se faz necessário uma camada de abstração de acesso ao data source.

Controller <-> Data Source
Controller <-> Repository <-> Data Source

O repository faz o intermédio entre o controller e o data source.
