## :rocket: Pokedex-Api

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

### :memo: Description

Api rest to handle pokedex information. Yep, another one.

### :sparkles: Features

- Work in progress

### :alembic: Core Concepts

- Rest Api
- Non-relational database
- Design Patterns

### :construction: Made with

- Nest: ^9.0.0
- Mongo: @latest,

### :hammer: Demostration

Work in progress

### :bulb: Run the App

To run locally, clone the repo, and execute

```bash
# Install dependencies
npm install
```

Run local database with

```bash
# Up docker container
docker-compose up -d
```

Clone the file **.env.template** and rename to **.env**

```bash
# Replace with the correct values
MONGODB="correct-database-connection"
```

Run the app

```bash
# Development
npm run start:dev
```

And populate local database

```bash
# GET request to populate 650 pokemons
[GET] http://localhost:3000/api/seed
```

_If you want to contribute to improve the project, please create your PR and write me :speech_balloon: . After it, sit down and take a beer, you deserve it!_ :beers: .
_This project is for academic purposes only, all rights reserved. Andrés Andrade 2022 :copyright::registered:_
