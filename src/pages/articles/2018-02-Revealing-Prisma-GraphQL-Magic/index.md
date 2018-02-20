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

More text.
