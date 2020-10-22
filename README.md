<div align="center">
  <img
    src="./.github/logo.svg"    
    alt="happy"
  > 
  
  # Happy
  
  <p align="center">
    <a href="#teddy_bear-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#rocket-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;  
    <a href="#computer-rodar-o-projeto">Rodar o Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;  
    <a href="#thumbsup-como-contribuir">Como contribuir</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 
    <a href="#bookmark-layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#pencil-licença">Licença</a>
  </p>
  
  Visite orfanatos e mude o dia de muitas crianças.
  
  [![GitHub repo size](https://img.shields.io/github/repo-size/zevdvlpr/happy?color=ffd666&labelColor=000000&logo=github&style=flat-square)]()
  [![GitHub last commit](https://img.shields.io/github/last-commit/zevdvlpr/happy?color=ffd666&labelColor=000000&logo=github&style=flat-square)](https://github.com/zevdvlpr/happy/commits/master)
  [![GitHub License](https://img.shields.io/github/license/zevdvlpr/happy?color=ffd666&labelColor=000000&logo=github&label=license&style=flat-square)](https://github.com/zevdvlpr/happy/tree/master/LICENSE)
  [![GitHub Stargazers](https://img.shields.io/github/stars/zevdvlpr/happy?color=ffd666&labelColor=000000&logo=github&style=flat-square)](https://github.com/zevdvlpr/happy/stargazers)    
  
  <br>
  
  <img alt="Happy" src=".github/happy.png" width="100%">
</div>


## :teddy_bear: Projeto

O Happy é um projeto que visa facilitar visitas aos orfanatos próximos a você 💛

Este é um projeto desenvolvido durante a **[Next Level Week](https://nextlevelweek.com/)**, realizada pela **[@Rocketseat](https://youtube.com/Rocketseat)** durante os dias 12 a 18 de Outubro de 2020.

## :rocket: Tecnologias

Esse projeto foi desenvolvido utilizando as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/)
- [ReactJS](https://reactjs.org/)
- [React Native](https://reactnative.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Expo](https://expo.io/)
- [Express](https://expressjs.com/pt-br/)
- [TypeORM](https://typeorm.io/#/)
- [Yup](https://github.com/jquense/yup)
- [Axios](https://github.com/axios/axios)
- [React Router DOM](https://reacttraining.com/react-router/)
- [React Navigation](https://reactnavigation.org/)

## ]

### Requisitos

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/)
- [Expo](https://expo.io/)

```bash
$ git clone https://github.com/zevdvlpr/happy.git
$ cd happy
```

**Siga os passos abaixo**

### Backend

**Configurando o docker**

```bash
# Fazer o download do postgres
$ docker pull postgres

# Crie o container
$ docker run --name postbanco -e POSTGRES_PASSWORD=docker -d -p 5432:5432 postgres

# Uma vez criando, execute o comando para criar a database
$ docker exec -it postbanco psql -U postgres --password
$ create database nlw3;

# Para ver se a database foi criada executamos
$ \connect nlw3;
```

**Iniciando a Api**

```bash
# Começando pela pasta raiz do projeto, vá para a pasta backend
$ cd server

# Instale as dependências
$ yarn

# Use o script para executar a migraçãos
$ yarn typeorm migration:run

# Para terminar, execute o comando para iniciar a api
$ yarn dev

# Pronto, a api foi iniciada!
```

### Web

_Obs.: Antes de continuar, certifique-se de ter a API em execução_

```bash
# Começando na pasta raiz do projeto, vá para a pasta web
$ cd web

# Instale as dependências
$ yarn

# Certifique-se de que o arquivo "src/services/api.ts" tenha o IP para sua API

# Inicie o client
$ yarn start
```
### Mobile

_Obs.: Antes de continuar, certifique-se de ter a API em execução_

```bash
# Começando na pasta raiz do projeto, vá para a pasta móvel
$ cd mobile

# Certifique-se de que o arquivo "src/services/api.ts" tenha o IP para sua API

# Inicie o Expo e escaneie o código QR com o Aplicativo do Expo Client
$ yarn start
```

## :thumbsup: Como contribuir

**Faça um fork deste repositório**

```bash
# Se você não tiver a CLI do GitHub, use o site para fazer isso.

$ gh repo fork zevdvlpr/happy
```

**Siga os passos abaixo**

```bash
# Clone seu fork
$ git clone your-fork-url
$ cd happy

# Crie uma branch com seu recurso
$ git checkout -b my-feature

# Faça o commit com suas mudanças
$ git commit -m 'feat: My new feature'

# Envie o código para sua branch remota
$ git push origin my-feature
```

Depois que sua solicitação pull for aceita, você pode excluir seu branch

## :bookmark: Layout

Você pode visualizar o layout do projeto através dos links abaixo:

- [Layout Web](https://www.figma.com/file/mDEbnoojksG4w8sOxmudh3/Happy-Web?node-id=0%3A1) 
- [Layout Mobile](https://www.figma.com/file/X27FfVxAgy9f5IFa7ONlph/Happy-Mobile?node-id=0%3A1) 

Lembrando que você precisa ter uma conta no [Figma](http://figma.com/) para acessá-lo.

## :pencil: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](https://github.com/zevdvlpr/happy/blob/master/LICENSE) para mais detalhes.

---

<div align="center">     
  Desenvolvido com 💛 por <a href="https://zevdvlpr.ml" alt="website">zevdvlpr</a>
</dov>
