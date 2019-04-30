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
- Getting started
- Migrations via CLI console
- Access rules
- Prod ready?
- Summary

GraphQL at its' core is a specification for data communication, most commonly used between client and servers. Originally created and open sourced by Facebook, it quickly grow and got picked up by a lot of companies in all shapes and sizes. Nowadays there's a growing number of startups providing services in the GraphQL space. I've previously explored one om them, Primsa, and have written about their [magic GraphQL tricks](/revealing-prismagraphql-magic/). Today let's take a look at another service in this space, called [Hasura](https://hasura.io/).

Hasura promises you a GraphQL API on existing and new Postgres databases, focusing on realtime features leveraging subscriptions. Hasura engines is strictly limited to Postgres, giving them the advantage to use these databases' features tightly in their engine. For example, instead of resolving each field separately, they transform the whole GraphQL query to a corresponding SQL statement. This helps to avoid unnecessary database request.

Another key feature is Hasuras' console. This is not only a GUI to Postgres, it also lets you define what tables to expose in your GraphQL engine, add views, access permissions, event hooks and more.

All of this sounds promising to me, so I went ahead an gave Hasura a [try](https://github.com/kriswep/hasura-testdrive).

![Lots of confetti on a dark background above a partying crowd.](graphql-confetti.jpg)

<p><sub><sup>Confetti for the GraphQL ecosystem. Photo by <a href="https://unsplash.com/@pabloheimplatz">Pablo Heimplatz</a> on <a href="https://unsplash.com/photos/ZODcBkEohk8">Unsplash</a>.</sup></sub></p>

#### Getting started
