# DevRadar API

Projeto do Backend em NodeJS onde foi criada uma aplicação, com o objetivo de mostrar desenvolvedores próximos com base na localização atual do usuário e nas tecnologias que ele buscar, desenvolvida durante a semana Omnistack7, praticando os principais conceitos de ReactJS, ReactNative e NodeJs com MongoDB. 
Neste projeto eu adicionei uma funcionalidade extra no qual o usuário poderá comentar e visualizar os todos os devs e ordena-los com base no preço que cada um cobrar.
![alt text](https://thumbs2.imgbox.com/34/3e/Iz6GeGP4_t.png)

---
## Features do projeto
- **Rota para cadastrar dev:**

`https://api-devradar.herokuapp.com/devs`

No frontend utilizando a biblioteca *Axios* é feito uma requisição **POST**, enviando os seguintes campos:

`"github_username": "username-github",`

`"techs": "ReactJS, PHP",`

`"latitude": posiçao-latitude-atual,`

`"longitude": posicao-longitude-atual`

- **Rota para buscar por devs:**

`https://api-devradar.herokuapp.com/search?latitude=<latitude_atual>&longitude=<longitude, atual>&tech=<tecnologias_buscadas>`

No frontend utilizando a biblioteca *Axios* é feito uma requisição com o metodo HTTP **GET**, passando na url a latitude, longitude e Tecnologias, no qual retorna um array de JSON. Veja o exemplo abaixo:

![alt text](https://thumbs2.imgbox.com/11/ed/DJHafV4f_t.png)

  ---
## Features extras

  **Rota para ordernar devs por preço:**

`https://api-devradar.herokuapp.com/filter/<order_de_consulta>`
Ordens de consulta: *asc* ou *desc*

No frontend utilizando a biblioteca *Axios* é feito uma requisição com o metodo HTTP **GET**, passando na url a ordem de consulta, no qual retorna um array de JSON. Veja o exemplo abaixo:

![alt text](https://thumbs2.imgbox.com/11/ed/DJHafV4f_t.png)
