piratex!
==================

um guia, pirata, de filmes

## como instalar
a aplicação requer apenas que você tenha instalado o node 10 ou superior
a instalaçaõ é feita apenas com o comando
```
npm install
```

## Desenvolvendo
para iniciar o desenvolvimento, basta um
```
npm start
```
## API de filmes
o projeto possui duas apis, uma para pesquisa base, sem limite de request e outra para pegar informações do imdb, com limites de 1.000 requests por dia.

### omdbAPI

a api para pegar informações adicionais dos filmes, nessa aplicação, apenas a imagem é requerida.
essa api tem um limite de 1.000 request por dia, para criar uma nova chave, basta acessar o link http://www.omdbapi.com/apikey.aspx

tambem é possivel, via patreon, adiquirir uma chave com mais requests diarios.

para reduzir o numero de requests no mesmo dispositivo, a função  **fetchData** do arquivo **/services/imdbApi.js** possui uma rotina de cache em sessionStorage.

## favortios
os filmes marcados como favoritos são salvos em localStorage.
recuperados pela api **favApi** em **/services/favApi.js**



## Licença
mit
https://opensource.org/licenses/MIT
