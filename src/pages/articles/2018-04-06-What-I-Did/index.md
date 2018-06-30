---
title: "WiD - Cypress e2e testing"
date: "2018-04-11T20:00:00.000Z"
layout: post
path: "/wid-2018-04-11/"
category: "WiD"
description: "Setting up end to end tests with Cypress.io, automated and run on CircleCI."
author: "@kriswep"
readNext: "/wid-2018-06-30/"
issueNumber: 19
---

#### Testing morphlog

**Tl,dr: Hey, my name is Benjamin and here I write about the things I made during the last week (or more). This mostly involves coding projects in my spare time. Today, let's talk about [morphlog](https://github.com/kriswep/morphlog).**

 - [WiD - What I Did | Part 1](/wid-2018-03-27/)
 - [WiD - What I Did | Part 2 (This post!)](/wid-2018-04-11/)

So, time for an upgrade, progress has been made. The last ~two weeks I focused on getting the test story up for morphlog. More specificially, adding end to end test using [Cypress](https://www.cypress.io/), another hot tech piece. And after fiddling around some problems, it feels kinda good to have true e2e tests running.

While I was on that, it made sense to also set up CI. I used [Travis CI](https://travis-ci.org/) some times in the past, it works great. This time the decision was made for [CircleCI](https://circleci.com/), which, well also works great. To be honest, if you are on a hunt for CI, just use one of these, both soild choices. What's compelling about CircleCI is their usage of Docker, really cool.

![A hand reaching towards a cloudy sky.](cloud-hand.jpg)

<p><sub><sup>Clouds for tests in the cloud. Photo by <a href="https://unsplash.com/@jeremyperkins">Jeremy Perkins</a> on <a href="https://unsplash.com/photos/7FOSJVtUtac">Unsplash</a>.</sup></sub></p>

#### Difficulties

Like always when using things I'm not too familiar with, I faced some issues. All of them could be solved and where mostly my misusage, but let's add them regardless.

Difficulties:
 - Starting clean server (or mocking server calls)
 - New Cypress API has to be used
 - Cypress can read and write to localStorage, but only in custom commands, not in test files
 - Different port(env) was used on CircleCI for client server than on local env
 - I specified the wrong Prisma endpoint for the tests. Took me way too long to figure out.

The first point was actually made really easy for me. As mentioned in my [first WiD post](/wid-2018-03-27/) I'm using [Prisma](https://www.prisma.io/) for my backend / database layer. They have a free and public development cloud option. Using that as backend during my CI tests means I have a full, real backend without having to set anything special up (like a database). As far as I understood, the data there will be whiped sometime. That's no problem for my usage, since I seed the expected data during the CI test run in there, and don't care what happens to them afterwards. It could become problematic if a lot of tests run at the same time. That's a future problem (if at all).

The other points where things I didn't grasp right away and hat to find out through trial and error. That's ok, still fun!

Oh, and I registered [morphlog.com](https://morphlog.com)!

