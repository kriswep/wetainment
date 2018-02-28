---
title: "Revealing Prisma GraphQL's magic tricks"
date: "2018-02-20T12:00:00.000Z"
layout: post
path: "/revealing-prismagraphql-magic/"
category: "GraphQL"
description: "Prisma is a GraphQL API Layer. Trying it out with one of the available boilerplates gives you a ton of great features, almost feeling like magic. But is it? Let's have a look behind the tricks!"
author: "@kriswep"
readNext: "/playground-better-graphiql/"
issueNumber: 17
---

#### Explore the tricks

**Tl,dr: Prisma GraphQL magic show!**

Tricks worth mentioning:
 - GraphQL DB -> Full fledged GraphQL Crud API, you can model in `./database/datamodel.graphql` schema. Powered by prisma itself, setting up docker prisma and mysql containers, genarating the desired API
  - DB API can be secured and locked down (using secret defined in `database/prisma.yml`), or used client side
  - Define your application schema, set up by boilerplate projects (node/ts/..)
  - Application schema basically is own GraphQl server, which exposes part of the DB API you need/want
  - App schema set up with yoga and prisma-binding, generating you some kind of GraphQL-ORM
  - Worth mentioning boilerplates, with things like ts, auth...
  - Mention cloud or local bare metal deployment options
  - DB export/import and seeding possible
  - Cluster deployment [docs](https://www.prismagraphql.com/docs/tutorials/cluster-deployment/local-(docker)-meemaesh3k)

![A circus show with elephants and different artists, some of them on motorcyles.](circus.jpg)

<p><sub><sup>Feel the magic circus atmosphere? Photo by <a href="https://unsplash.com/@beckyphan">Becky Phan</a> on <a href="https://unsplash.com/photos/o8-670KHgK8">Unsplash</a>.</sup></sub></p>

#### Enjoy the show

Grab your free tickets by entering the following commands in your prompt:

```bash
npm install -g prisma
prisma init prisma-show
```

Let me select you a fun show, when asked, choose the following options:
 - `GraphQL server/fullstack boilerplate (recommended)`
 - `typescript-advanced     GraphQL server (incl. database & authentication)`

Prisma will set up your theatre stage, just wait a bit. When asked about the cluster, choose local, if you have a docker and docker-compost installation on your pc. Otherwhise one of the public development cloud options will cover you, albeit not as cool.

Saw that information about changed types and fields? That's a little hint about their tricks, but we'll have a closer look at that later.

Alright enter the theatre, lets start the show!

```bash
cd prisma-show
npm run dev
```

Welcome to our playground, the [GraphQL Explorer App](/playground-better-graphiql/) that should have been opened just now (if not, try opening http://localhost:3000/playground)

Run a query
```
{
  feed {
    title
    text
    author {
      name
    }
  }
}
```
Or a mutation
```
mutation {
  signup(email: "demo@example.com", name: "demo", password: "secret") {
    token
    user {
      name
    }
  }
}
```

Not that impressed? Alright, yeah, it just looks like a pretty normal GraphQL server. I'd say, that is already very impressing at its own, regarding we didn't touch a single line of code yet. Still, let me draw your attention to the GraphQL database API. That got generated and wired up with a database a moment ago, just for you. See that database/dev option on the right hand side of the playground? Open that up, click the circular refresh arrow in the upper middle area and open up the schema on the left hand side. Take a look at that, theres a full fledged GraphQL CRUD schema, with different nodes, connections and a lot of neat mutations? Hold on there are even some subscriptions in that? That looks pretty cool, right?

#### Behind the scenes

So, what is happening here? Here's the revelation: There are two servers at work for you. First is the prisma API server, which was created by issuing the `prisma init` command. It can be redeployed with `prisma deploy`. Where does this server live? It's contained inside a docker environment, which prisma set up for you. If ou choosed the local options, you can see two relevant images on your system when running `docker ps -a`. One is the database, the other the API server. If you deployed to prisma cloud, this runs over there.

Secondly, theres your application server. This was started by your `npm run dev` command. This is where you reign, and can basically write GraphQL resolvers to your liking. The idea is, you write the needed business logic here and delegate the data querying to the prisma API. TODO: Hint to prisma-binding.