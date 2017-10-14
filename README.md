[![Build Status](https://travis-ci.org/emaincourt/asynchronous-server-technologies-01.svg?branch=master)](https://travis-ci.org/emaincourt/asynchronous-server-technologies-01)

## TP - 01

### Preparation

Run `yarn` at the root of your project to install the needed dependencies. 

### Scripts

Run `yarn build && yarn start` for starting the server. It will be running on `0.0.0.0@3000`.

Run `yarn test` to run the tests.

### API

> GET /users/:userId

```javascript
// Payload
{}
```

```javascript
// Response
{
  "id": String,
  "email": String,
  "password": String
}
```

> POST /users

```javascript
// Payload
{
  "email": String,
  "password": String
}
```

```javascript
// Response
{
  "id": String,
  "email": String,
  "password": String
}
```
