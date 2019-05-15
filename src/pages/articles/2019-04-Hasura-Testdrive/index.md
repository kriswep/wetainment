---
title: 'Hasura GraphQL - First impressions'
date: '2019-05-01T20:00:00.000Z'
layout: post
path: '/articles/hasura-impression/'
category: 'GraphQL'
description: "Hasura is making itself a name as an engine for realtime GraphQL APIs on top of Postgres databases. They feature a good Getting Started path, advanced data access features, tight coupling to Postgres and awesome learning materials. Let's have a look!"
author: '@kriswep'
readNext: '/articles/2018-02-Revealing-Prisma-GraphQL-Magic/'
issueNumber: 24
---

#### Trying the realtime GraphQL API on Postgres from Hasura

**Tl,dr: The GraphQL ecosystem is growing quickly, one of its' newer options to get your API going is [Hasura](https://hasura.io/). They provide a solid Getting Started experience, expose advanced data access and migration options via a nice UI and also have a great documentation.**

GraphQL at its' core is a specification for data communication, most commonly used between clients and servers. Originally created and open sourced by Facebook, it quickly grow and got picked up by a lot of companies in all shapes and sizes. Nowadays there's a growing number of startups providing services in the GraphQL space. I've previously explored one of them, Prisma, and have written about their [magic GraphQL tricks](/revealing-prismagraphql-magic/). Today let's take a look at another service in this space, called [Hasura](https://hasura.io/).

Hasura promises you a GraphQL API on existing and new Postgres databases, focusing on realtime features leveraging subscriptions. Hasura engines is strictly limited to Postgres, giving them the advantage to use these databases' features tightly in their engine. For example, instead of resolving each field separately, they transform the whole GraphQL query to a corresponding SQL statement. This helps to avoid unnecessary database request (ever heard of the n+1 problem?). The Hasura team described their [architecture further](https://blog.hasura.io/architecture-of-a-high-performance-graphql-to-sql-server-58d9944b8a87/) some time ago.

Another key feature is Hasuras' console. This is not only a GUI to Postgres, it also lets you define what tables to expose in your GraphQL engine, add views, access permissions, event hooks and more.

All of this sounds promising to me, so I went ahead an gave Hasura a [try](https://github.com/kriswep/hasura-testdrive).

![Lots of confetti on a dark background above a partying crowd.](graphql-confetti.jpg)

<p><sub><sup>Confetti for the GraphQL ecosystem. Photo by <a href="https://unsplash.com/@pabloheimplatz">Pablo Heimplatz</a> on <a href="https://unsplash.com/photos/ZODcBkEohk8">Unsplash</a>.</sup></sub></p>

#### Getting Started

Hasuras' documentation, which is actually very good, has two [Getting Started](https://docs.hasura.io/1.0/graphql/manual/getting-started/index.html) options described. There is a One-Click option to deploy to [Heroku](https://www.heroku.com/), which hosts your database, as well as your Hasura GraphQL engine there. The other one is to start locally in a docker environment. These option also allows you to easily host your production environment on a lot of different providers. I tried the docker way, which went really smoothly and started in only a few minutes.
No matter what you choose, your first step should be to open the console. That is under `http://localhost:8080/console` (or under your Heroku URL if you used that), check the docs when in doubt. Take a look around, this is where Hasuras' superpowers shine. I really liked their UI to manage my data. You have an embedded GraphiQL view to explore your API, a data tab to manage your database and more.

The first thing I did was to add a table under the data tab. There you can enter a table name, some columns and a primary key, click `Create`, and voilà. You not only created a table on postgres like that, you also now have your first types in your GraphQL schema! Check the GraphiQL tab. There are queries, mutations and subscriptions generated according to your table fields. That's impressive and powersome.

From there I created a basic `author` - `post` datamodel with some foreign key relations, which can be exposed as relationships for your GraphQL schema. Really nice, if you ask me. By the way, you can check out my experiments on [GitHub](https://github.com/kriswep/hasura-testdrive).

There's also an option to add a third party GraphQL schema (schema-stitching for the win) and another option for exposing events to external services. The latter has a lot of potential, as it allows you to integrate any serverless functions to events happening in your database, and more. Again, [Hasuras' documentation](https://docs.hasura.io/1.0/graphql/manual/event-triggers/index.html) is very helpful!

#### Getting ready for production

Playing around in the console, tweaking tables and relations is fun, but how would we bring our progress from a dev to a production environment? Is there some kind of continous integration?

Luckily, Hasura has an answer in the form of [migrations](https://docs.hasura.io/1.0/graphql/manual/migrations/index.html). You can choose to let Hasura log all changes made to the database schema, as well as the Hasura metadata, by using their provided [CLI](https://docs.hasura.io/1.0/graphql/manual/hasura-cli/index.html). Using this will generate some yaml files, which you can use to recreate your local dev database in a staging and production environment. This made a really good impression on me. Bringing your data to prod, check!

Next thing one might wonder about is security. The base line of Hasuras' defense is setting an admin secret. This locks the access to your managemnt console down and also enables you to set authentication and access rules. The latter again is a great concept. You can set fine grained rules for every field in your GraphQl schema within an intuitive UI. Preventing access to certain data tables? To certain fields in any table? Only allow to view entries created by the current user? Check, check and check!

Sadly, there are some disadvantages here. Right noe there is no option to guard your GraphQL API against malicous queries integrated. Think deeply nested or expensive queries. But they are working on enabling [some options there](https://github.com/hasura/graphql-engine/issues/2151). Also adding helpful third party tools to your GraphQL server is not possible, at least not directly.

#### So, what more?

Using the Hasura engine gets you started with your next GraphQL API server quickly. Honestly, I was surprised how seamless and quick it was. But at first it felt quite, well strange, to give the API creation out of my hand. This is something you have to overcome. Granted, you have some options to shape the API via access rules and custom views. Still there are some tools from the wider GraphQL engine which cannot be used directly. Right now, I would consider adding a plain GraphQL gateway server in front of Hasuras engine and delegate query execution from there to Hasura. That would enable using tools for rate limiting, as well as adding monitoring solutions like [Apollo engine](https://engine.apollographql.com) or anything else you fancy.

Other than that, using Hasura has some great benefits. Their tight integration with Postgres enables performant access to your data. Oh and did I mention they are not only free to use, but also complety [open source](https://github.com/hasura/graphql-engine)? Last but not least, their [documentation](https://docs.hasura.io/1.0/graphql/manual/index.html) and [learning options](https://docs.hasura.io/1.0/graphql/manual/guides/index.html) are [great](https://blog.hasura.io/) and growing [constantly](https://learn.hasura.io/). That should be an important point when evaluating a new tech stack.

I'm eager to try them out in some feature projects of mine!
