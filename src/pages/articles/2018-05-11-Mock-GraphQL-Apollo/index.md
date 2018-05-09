---
title: "Mock a GraphQL API in your unit tests"
date: "2018-05-11T20:00:00.000Z"
layout: post
path: "/mock-apollo-graphql/"
category: "GraphQL"
description: "Mock your GraphQL schema during your client unit tet with apollo-link-schema."
author: "@kriswep"
readNext: "/revealing-prismagraphql-magic/"
issueNumber: 20
---

#### With the Apollo GraphQL toolbelt

**Tl,dr: Mocking Apollo GraphQL on the client side. No server during test required**


- Using 'apollo-link-schema', 'apollo-cache-inmemory' and addMockFunctionsToSchema from 'graphql-tools'
- Retrieve full application GraphQL schema with 'get-graphql-schema'
- mock specific parts of the GraphQL API in the test file
- Fallback to addMockFunctionsToSchema

![A night sky, with bright star in the center.](star.jpg)

<p><sub><sup>Let's comply with Apollos space theme. Photo by <a href="https://unsplash.com/@seffen99">Sven Brandsma</a> on <a href="https://unsplash.com/photos/1lHzm_NxIhY">Unsplash</a>.</sup></sub></p>

Write out.
