<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Project Structure
```
Project-Root/
|
├── src
│   ├── core-modules
│   │   ├── interceptors
│   │   │   └── response-interceptor
│   │   │       ├── response-interceptor.spec.ts
│   │   │       └── response-interceptor.ts
|   |   |
│   │   └── middlewares
│   │       ├── auth.middleware.ts
│   │       ├── cookie-parser.middleware.ts
│   │       ├── cors.middleware.ts
│   │       ├── helmet.middleware.ts
│   │       ├── morgan.middleware.ts
│   │       └── rate-limit.middleware.ts
|   |
│   ├── utils
│   │   ├── validation-helper.ts
│   │   └── bcrypt-utils.ts
|   |
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   └── main.ts
│   
├── test
│   ├── app.e2e-spec.ts
│   └── jest-e2e.json
│   
├── .env
├── nest-cli.json
├── package.json
├── README.md
├── tsconfig.build.json
└── tsconfig.json
```