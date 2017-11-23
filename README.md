# Graphql Subscription server

Simple and super scalable GraphQL Subscriptions server with MongoDB as a database. As server middleware has been used [Graphcool Playground](https://github.com/graphcool/graphql-playground) which gives automatic schema reloading and better support for GraphQL Subscriptions.

## How it works?

![GraphQL Subscriptions](https://media.giphy.com/media/3ohs7PV2Vn1rYgthVm/giphy.gif)

## Before you start
First rename `.env-sample` file to `.env`. It contains all default values for proper work on your local machine. In case you going to run GraphQL server in production you need to provide relevant MongoDB URL and database name.
```
PORT=8080

MONGO_URI="mongodb://localhost:27017/"
MONGO_DATABASE_NAME="cats"
```

## Start your server
```
yarn install
yarn start
```
That's it. Your server is up and run.

## Queries

Get list of all cats
```
query allCats {
  allCats {
    edges {
      node {
        id
        name
        nickName
        description
        createdAt
        avatarUrl
        age
      }
    }
  }
}
```

Get information about exact cat:
```
query Cat($id: String!) {
  cat(id: $id) {
    id
    name
    nickName
    description
    createdAt
    avatarUrl
    age
  }
}
```

## Mutations
Add a cat:
```
mutation addCat($name: String!, $nickName: String!, $description: String!, $avatarUrl: String!, $age: Int!) {
  addCat(name: $name, nickName: $nickName, description: $description, avatarUrl: $avatarUrl, age: $age) {
    id
    name
    nickName
    description
    createdAt
    avatarUrl
    age
  }
}
```
Remove a cat:
```
mutation removeCat($id: String!) {
  removeCat(id: $id) {
    id
  }
}
```

## Subscriptions

Listens if new cat was added:
```
subscription newCat {
  newCat {
    id
    name
    nickName
    description
    createdAt
    avatarUrl
    age
  }
}
```

Listens if cat was removed:
```
subscription removedCat {
  removedCat {
    id
  }
}

```
