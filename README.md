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
<div style="display: flex; align-items: center; justify-content:center;">
 <img src="https://nestjs.com/img/logo-small.svg" width="20" alt="Nest Logo" />
  <p style="margin: 10px; font-weight:500;">To create a new project using NEST-JS</p>
  <img src="https://nestjs.com/img/logo-small.svg" width="20" alt="Nest Logo" />
</div>


```
npx nest-js-starter-package@latest folder-name
```

```bash
$ yarn install
# or 
$ npm install
```

## Running the app

```bash
# development
$ yarn run start
# or
$ npm run start

# watch mode
$ yarn run start:dev
# or
$ npm run start:dev

# production mode
$ yarn run start:prod
# or
$ npm run start:prod
```

## Test

```bash
# unit tests
$ yarn run test
# or
$ npm run test

# e2e tests
$ yarn run test:e2e
# or
$ npm run test:e2e

# test coverage
$ yarn run test:cov
# or
$ npm run test:cov
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