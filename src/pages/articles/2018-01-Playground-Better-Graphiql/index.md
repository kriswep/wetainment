---
title: "GraphQL Playground - The Better GraphiQL?"
date: "2018-01-08T12:00:00.000Z"
layout: post
path: "/playground-better-graphiql/"
category: "GraphQL"
description: "GraphQL playground expands on the idea of GraphiQL, adding some nice features to provide an even better development experience in the graphql world."
author: "@kriswep"
readNext: "/create-react-app-tailwind-css/"
issueNumber: 15
---

#### Benefits and setup of GraphQL Playground

**Tl,dr: GraphQL Playground adds some neat features on top of the well known GraphiQL project. Highlights are tabs, improved schema exporation and the possibility to add customs headers. Adding it to a GraphQL server can be pretty straightforward when using an express middleware.**

Text outlining playground benefits over plain ol' GraphiQL.

PROS:

* Tabs
* Nice Themes
* multipane schema explorer, auto updating (?, verify that)
* Custom header UI, nice for auth tokens etc.

![A boy having fun on a swing. The background shows a bright sky and some other playground equimpment.](playground.jpg)

<p><sub><sup>A boy having fun on a swing! Little pun on the name playground. Photo by <a href="https://unsplash.com/@mylestan">Myles Tan</a> on <a href="https://unsplash.com/photos/WNAO036c6FM">Unsplash</a></sup></sub></p>

'Installation' instruction as a express middleware. Noting standalone app.

```JavaScript
import express from 'express';
import { graphqlExpress } from 'graphql-server-express';
import expressPlayground from 'graphql-playground-middleware-express';

const server = express();

// ...
// get executable schema to graphqlSchema as usual

// setup graphql-server-express
server.use(
  '/graphql',
  // other graphql middleware,
  graphqlExpress(graphqlSchema),
);

// express playground middleware setup
server.use('/playground', expressPlayground({ endpoint: '/graphql' }));

// ...
// listen server as usual
```
