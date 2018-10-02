---
title: 'GraphQL Playground - The Better GraphiQL?'
date: '2018-01-15T12:00:00.000Z'
layout: post
path: '/playground-better-graphiql/'
category: 'GraphQL'
description: 'GraphQL Playground expands on the idea of GraphiQL, adding some nice features to provide an even better development experience for the GraphQL world.'
author: '@kriswep'
readNext: '/articles/2018-02-Revealing-Prisma-GraphQL-Magic/'
issueNumber: 15
---

#### Benefits and setup of GraphQL Playground

**Tl,dr: GraphQL Playground adds some neat features on top of the well known GraphiQL project. Some highlights are tabs, improved schema exploration and the possibility to add customs headers. Adding it to a GraphQL server is a pretty straightforward process.**

Lately I'm becoming more and more of a [GraphQL](http://facebook.github.io/graphql/) fan. That's an API specification having many benefits over classical REST approaches, like avoiding over- and underfetching. One of the things I like most, are the great tools which are created in it's ecosystem. You can find many of them referenced in this [awesome list](https://github.com/chentsulin/awesome-graphql). A very helpful tool is GraphiQL, which allows you to easily write and execute querys against your GraphQL server with features like autocompletion, history support and schema exploration.

In september 2017, the team of [graph.cool](https://www.graph.cool/) released a open sourced tool called [GraphQL Playground](https://github.com/graphcool/graphql-playground). It builds upon the idea of GraphiQL, but adds some nice functionality on top.

The coolest features it has over GraphiQL:

- Tabs!
- Nice themes
- Multi-column schema explorer
- Custom header UI, usable for auth tokens etc.
- Improved Query history
- GraphQL subscription support (I did not try that out yet)

Honestly, the first time I stumpled upon GraphQL Playground, was when I tried out graph.cool last summer. They integrate the Playground as part of their web UI to build GraphQL services. At that time, at least for me, the Playground crashed from time to time with weird UI flaws. Recently I looked for an easy way to add custom headers to GraphiQl for authentication. The now open sourced GraphQL Playground enabled that. Integrating the Playground to an existing GraphQL server was fairly easy and most of the previously experienced problems seemed to have been fixed (I still have a bug with not closing the suggestions popover on tab switching). Having said that, the graph.cool team told me they are still working on making the Playground more stable.

There is still room for improvement, on my wishlist would be an easy way to close individual schema columns.

![A boy having fun on a swing. The background shows a bright sky and some other kids' playground equipment](playground.jpg)

<p><sub><sup>A boy having fun on a swing! Little pun on the name playground. Photo by <a href="https://unsplash.com/@mylestan">Myles Tan</a> on <a href="https://unsplash.com/photos/WNAO036c6FM">Unsplash</a>.</sup></sub></p>

That sounds all nice and neat, so what are our options for trying GraphQL playground out?

Well, there is a [standalone desktop app](https://github.com/graphcool/graphql-playground/releases) and a hosted [online version](https://www.graphqlbin.com/RVIn), which you can point to any GraphQL server via an URL setting. If you want to give GraphQL Playground a shot right now, go ahead and open the web version, it's as simple as that.

Another options is to add the Playground directly to your server. You could add it as a [React Component](https://github.com/graphcool/graphql-playground#as-react-component), which sounds pretty involving, or add it as a middleware to many server frameworks (as of now, there is support for express, hapi, koa and lambda). You can check the [details](https://github.com/graphcool/graphql-playground#as-server-middleware), but the gist for express is this:

```javascript
import express from 'express';
import { graphqlExpress } from 'graphql-server-express';
import expressPlayground from 'graphql-playground-middleware-express';

const server = express();

// ...
// get executable schema to graphqlSchema as usual

// setup graphql-server-express
server.use(
  '/graphql',
  // other (graphql) middleware,
  graphqlExpress(graphqlSchema),
);

// express playground middleware setup, querying '/graphql' route from above
server.use('/playground', expressPlayground({ endpoint: '/graphql' }));

// ...
// listen server as usual
```

All over all, I'm pretty happy with GraphQL Playground right now and plan to use it for my GraphQL projects in the foreseeable future. Would be nice to hear your thoughts or experiences below.
