---
title: "Revealing Prisma GraphQL's magic tricks"
date: '2018-03-05T12:00:00.000Z'
layout: post
path: '/revealing-prismagraphql-magic/'
category: 'GraphQL'
description: "Prisma is a GraphQL API Layer. Trying it out with one of the available boilerplates gives you a ton of great features, almost feeling like magic. But is it? Let's have a look behind the tricks!"
author: '@kriswep'
readNext: '/articles/2018-01-Playground-Better-Graphiql/'
issueNumber: 17
---

#### Explore the tricks

**Tl,dr: [Prisma GraphQL](https://www.prismagraphql.com/) helps you write a realtime GraphQL API with ease! Using it may sometimes feel like magic, at least if one doesn't know what happens where. But in the end it really boils down to clever engineering.**

The team from [graph.cool](graph.cool) launched their Prisma GraphQL project in mid January 2018. At the heart it is a API layer using [GraphQL](http://graphql.org/). It uses some amazing techniques for that, and that could feel like true magic. So, let us explore Prisma as if it was a Las Vegas show. To get the most out of this article, it would be best if you already know GraphQL. You could catch up on [How to GraphQL](https://www.howtographql.com/). Also try to follow along on your machine. If you can't, find the code, we are going to look at, over [here](https://github.com/kriswep/prisma-show).

**Since writting this article a new Prisma version was released (1.7).
Some of the introduced changes revealed a little bit magic by exposing a `docker-compose.yml`.
Read more at their [release notes](https://github.com/graphcool/prisma/releases/tag/1.7.0).
Still, the things written here hold true and the commands were changed as needed.**

![A circus show with elephants and different artists, some of them on motorcyles.](circus.jpg)

<p><sub><sup>Feel the magic circus atmosphere? Photo by <a href="https://unsplash.com/@beckyphan">Becky Phan</a> on <a href="https://unsplash.com/photos/o8-670KHgK8">Unsplash</a>.</sup></sub></p>

#### Enjoy the show

Grab your free tickets by entering the following commands in your prompt:

```bash
npm install -g prisma graphql-cli
graphql create prisma-show
```

There are different shows running, let me select you a fun one. When asked, choose the following option:

- `typescript-advanced GraphQL server (incl. database & authentication)`

Prisma will set up your theatre stage, just wait a bit. When asked about the cluster, choose local, if you have a docker and docker-compose installation on your machine. Otherwhise one of the public cloud options will cover you, albeit not as cool. Newer versions might not ask you about deployment clusters. If you want to work on a local setup, you will need to remove the `PRISMA_ENDPOINT` from the `.env` file and run `prisma deploy`. To start your local cluster, try `prisma init`.

Done? Saw that information about changed types and fields? That's a little hint about Prismas' tricks, but we'll have a closer look at that later.

Alright enter the theatre, lets start the show!

```bash
cd prisma-show
npm run dev
```

Welcome to our playground, the [GraphQL Explorer App](/playground-better-graphiql/) that should have been opened just now (if not, try opening http://localhost:3000/playground)

Here, we can play and explore our API. Run a query

```graphql
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

```graphql
mutation {
  signup(email: "demo@example.com", name: "demo", password: "secret") {
    token
    user {
      name
    }
  }
}
```

Not that impressed? Alright, yeah, it just looks like a pretty normal GraphQL server. I'd say, that is already very impressing at its own, regarding we didn't touch a single line of code yet. Still, let me draw your attention to the GraphQL database API. That got generated and wired up with a database a moment ago, just for you. See that database/dev option on the right hand side of the playground? Open that up, click the circular refresh arrow in the upper middle area and open up the schema on the left hand side. Take a look at that, theres a full fledged GraphQL CRUD schema, with different nodes, connections and a lot of neat mutations? Hold on, there are even some subscriptions in that? You can explore it right now.

That looks pretty cool, right?

#### Behind the scenes

So, what is happening here? Here's the revelation: There are two servers at work for you. First one is the Prisma API server, which was created by issuing the `prisma init` command. It can be redeployed with `prisma deploy`. Where does this server live? It's contained inside a docker environment, which Prisma set up for you. If you choosed the local options, you can see two relevant images on your system, when running `docker ps -a`. One is the database, the other the API server. If you deployed to Prisma cloud, this stuff runs over there.

Secondly, there's your application server. This was started by the `npm run dev` command. This is where you reign and basically write GraphQL resolvers to your liking. The idea is, to write the needed business logic here and delegate the data querying to the Prisma API. How would that work? Do you have to connect and send some http calls around? Glad you asked, that was made a lot easier for you. Take a look at `./src/resovers/Query.ts`. There you'll see code like this

```javascript
feed(parent, args, ctx: Context, info) {
  return ctx.db.query.posts({ where: { isPublished: true } }, info)
}
```

This basically delegates the query execution to the Prisma API. Nice, it almost looks like an [ORM](https://en.wikipedia.org/wiki/Object-relational_mapping). Feel free to play around with it, you might even get code completion, depending on your environment. The db objects comes from the GraphQL Bindings project, initiated by the graph.cool team and introduced [on their blog](https://blog.graph.cool/reusing-composing-graphql-apis-with-graphql-bindings-80a4aa37cff5). More exactly, it uses [Prisma binding](https://github.com/graphcool/prisma-binding). That's set up right in our application code, in `./src/index.ts`. See, no magic here!

Oh, did I tell you where all this code in front of us came from? `primsa init` pulled that right from the [GraphQL Boilerplates](https://github.com/graphql-boilerplates) GitHub organization, we used [TypeScript variant](https://github.com/graphql-boilerplates/typescript-graphql-server). There are a lot more, if you want to explore.

And we can see even more cool things, some of them only in the pipeline. I keep it short for now:

- Control how you model your data, defined in `./database/datamodel.graphql`
- [Deploy](https://www.prismagraphql.com/docs/tutorials/cluster-deployment/kubernetes-aiqu8ahgha) options to the cloud, local or to some kind of [cluster](https://www.prismagraphql.com/docs/reference/clusters/overview-eu2ood0she)
- Choices of underlying database (coming soon)
- Database [export/import](https://www.prismagraphql.com/docs/reference/data-import-and-export/data-import-ol2eoh8xie) and seeding

Hope this motivated you to give Prisma a try. If you get stuck along the way, the [docs](https://www.prismagraphql.com/docs) are great and there is an active [slack](https://slack.graph.cool/).
Ok, enjoy the show, have a great evening, and be ready to be amazed by the awesome people moving the GraphQL ecosystem forward! Thanks and shoutout to (graph.cool).
