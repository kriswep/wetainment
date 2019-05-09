---
title: 'Hasura GraphQL - First impressions'
date: '2019-05-01T20:00:00.000Z'
layout: post
path: '/articles/hasura-impression/'
category: 'GraphQL'
description: "Lately in the GraphQL space, Hasura is making itself a name as an engine for realtime GraphQL APIs on top of Postgres databases. Let's have a look!"
author: '@kriswep'
readNext: '/articles/2018-02-Revealing-Prisma-GraphQL-Magic/'
issueNumber: 24
---

#### Trying the realtime GraphQL API on Postgres from Hasura

**Tl,dr: https://hasura.io/**

- ~~Outline~~
- ~~Getting started~~
- Migrations via CLI console
- Access rules
- Prod ready?
- Summary

GraphQL at its' core is a specification for data communication, most commonly used between client and servers. Originally created and open sourced by Facebook, it quickly grow and got picked up by a lot of companies in all shapes and sizes. Nowadays there's a growing number of startups providing services in the GraphQL space. I've previously explored one of them, Primsa, and have written about their [magic GraphQL tricks](/revealing-prismagraphql-magic/). Today let's take a look at another service in this space, called [Hasura](https://hasura.io/).

Hasura promises you a GraphQL API on existing and new Postgres databases, focusing on realtime features leveraging subscriptions. Hasura engines is strictly limited to Postgres, giving them the advantage to use these databases' features tightly in their engine. For example, instead of resolving each field separately, they transform the whole GraphQL query to a corresponding SQL statement. This helps to avoid unnecessary database request (Ever heard of the n+1 problem?). The Hasura team described their [architecture further](https://blog.hasura.io/architecture-of-a-high-performance-graphql-to-sql-server-58d9944b8a87/) some time ago.

Another key feature is Hasuras' console. This is not only a GUI to Postgres, it also lets you define what tables to expose in your GraphQL engine, add views, access permissions, event hooks and more.

All of this sounds promising to me, so I went ahead an gave Hasura a [try](https://github.com/kriswep/hasura-testdrive).

![Lots of confetti on a dark background above a partying crowd.](graphql-confetti.jpg)

<p><sub><sup>Confetti for the GraphQL ecosystem. Photo by <a href="https://unsplash.com/@pabloheimplatz">Pablo Heimplatz</a> on <a href="https://unsplash.com/photos/ZODcBkEohk8">Unsplash</a>.</sup></sub></p>

#### Getting started

Hasuras' documentation, which is actually very good, has two [Getting Started](https://docs.hasura.io/1.0/graphql/manual/getting-started/index.html) options described. First, there is a One-Click option to deploy to [Heroku](https://www.heroku.com/), and host your database, as well as your Hasura GraphQL engine there. The other one is to start locally in a docker environment. These option also allows you to easily host your production environment on a lot of different providers. To get started, I used the docker way, which went really smoothly and started in only a few minutes.
No matter what you choose, your first step should be to open the console. That is under `http://localhost:8080/console` (or under your Heroku URL if you used that), check the docs when in doubt. Take a look around, this is where Hasuras' superpowers shine.

The first thing I did was to add a table under the data tab. There you can enter a table name, some columns and a primary key, click `Create`, and voilà. You not only created a table on postgres like that, you also now have your first types in your GraphQL schema! Check the GraphiQL tab. There are queries, mutations and subscriptions generated according to your table fields. That's impressive and powersome.

From there I created a basic `author` - `post` datamodel with some foreign key relations, which can be exposed as relationships for your GraphQL schema. Really nice, if you ask me. By the way, you can check out my experiments on [GitHub](https://github.com/kriswep/hasura-testdrive).

There's also an option to add a third party GraphQL schema (Schema-Stitching for the win) and another option for exposing events to external services. The latter has a lot of potential, as it allows you to integrate any serverless functions to events happening in your database, and more. Again, [Hasuras' documentation](https://docs.hasura.io/1.0/graphql/manual/event-triggers/index.html) is very helpful!

#### Migrate your environment

Playing around in the console, tweaking tables and relations is fun, but how would we bring our progress from a dev to a production environment. Some kind of continous integration?

Luckily, Hasura has an answer in the form of [migrations](https://docs.hasura.io/1.0/graphql/manual/migrations/index.html).
