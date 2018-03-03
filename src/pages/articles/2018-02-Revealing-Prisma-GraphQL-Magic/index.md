---
title: "Revealing Prisma GraphQL's magic tricks"
date: "2018-03-05T12:00:00.000Z"
layout: post
path: "/revealing-prismagraphql-magic/"
category: "GraphQL"
description: "Prisma is a GraphQL API Layer. Trying it out with one of the available boilerplates gives you a ton of great features, almost feeling like magic. But is it? Let's have a look behind the tricks!"
author: "@kriswep"
readNext: "/playground-better-graphiql/"
issueNumber: 17
---

#### Explore the tricks

**Tl,dr: [Prisma GraphQL](https://www.prismagraphql.com/) helps you write a realtime GraphQl API with ease! Using it sometimes feels like magic, but in the end it really is clever engineering.**

The team from [graph.cool](graph.cool) launched their Prisma GraphQL project in mid January 2018. Let us explore it, as if it was a Las Vegas magic show. Best would be, if you follow along on your machine. Otherwhise you can at least find the code we are going to look at over [here](https://github.com/kriswep/prisma-show).

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

Prisma will set up your theatre stage, just wait a bit. When asked about the cluster, choose local, if you have a docker and docker-compose installation on your machine. Otherwhise one of the public cloud options will cover you, albeit not as cool.

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

So, what is happening here? Here's the revelation: There are two servers at work for you. First is the Prisma API server, which was created by issuing the `prisma init` command. It can be redeployed with `prisma deploy`. Where does this server live? It's contained inside a docker environment, which Prisma set up for you. If ou choosed the local options, you can see two relevant images on your system when running `docker ps -a`. One is the database, the other the API server. If you deployed to Prisma cloud, this runs over there.

Secondly, theres your application server. This was started by your `npm run dev` command. This is where you reign, and can basically write GraphQL resolvers to your liking. The idea is, you write the needed business logic here and delegate the data querying to the Prisma API. How that works? Glad you asked, take a look at `./src/resovers/Query.ts`. There you'll see code like this
```JavaScript
feed(parent, args, ctx: Context, info) {
  return ctx.db.query.posts({ where: { isPublished: true } }, info)
}
```
This basically delegates the query execution to the Prisma API. Nice. Feel free to play around with it, you might even get code completion, depending on your environment. The db objects comes from the GraphQL Bindings project, initiated by the graph.cool team and introduced [on their blog](https://blog.graph.cool/reusing-composing-graphql-apis-with-graphql-bindings-80a4aa37cff5). More exactly, it uses [Prisma binding](https://github.com/graphcool/prisma-binding). That's set up right in our application code, in `.src/index.ts`.

Oh did I tell you where all this code in front of us come from? `primsa init` pulled that right from the [GraphQL Boilerplates](https://github.com/graphql-boilerplates) GitHub organization, we used [TypeScript variant](https://github.com/graphql-boilerplates/typescript-graphql-server). There are a lot more, if you want to explore.

And we can see even more cool things, some of them only in the pipelin. I keep it short for now:
  - Control how you model your data, defined in `./database/datamodel.graphql`
  - [Deploy](https://www.prismagraphql.com/docs/tutorials/cluster-deployment/kubernetes-aiqu8ahgha) options to the cloud, local or to some kind of [cluster](https://www.prismagraphql.com/docs/reference/clusters/overview-eu2ood0she)
  - Choices of underlying database (coming soon)
  - Database [export/import](https://www.prismagraphql.com/docs/reference/data-import-and-export/data-import-ol2eoh8xie) and seeding

Hope you enjoyed the show, have a great evening, and be ready to be amazed by the awesome people bringing the GraphQL ecosystem forward!