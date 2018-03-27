---
title: "WiD - What I Did"
date: "2018-03-27T12:00:00.000Z"
layout: post
path: "/wid-2018-03-27/"
category: "WiD"
description: "The start of my series blogging about the achievements, big and small, I made on my free time projects."
author: "@kriswep"
readNext: "/revealing-prismagraphql-magic/"
issueNumber: 18
---

#### Working on morphlog

**Tl,dr: Hey, my name is Benjamin and here I write about the things I made during the last week (or more). This mostly involves coding projects I do in my spare time. Today, let's talk about [morphlog](https://github.com/kriswep/morphlog).**

But first we'll set the scene. I'm a software developer from Germany working at a company developing different products and doing consulting in the SAP ecosystem. Like many other people I have some side projects I start during my free time and, let's face it, often don't finish. That's ok, I use them mostly to learn new things, relax and do what I want, not to make the next big thing. Still, it would be nice to finish more of them. So I decided to write publically, right here, about what I do. See it as a public commitment and incentive to me.

It's still undecided how often I'm going to write, but let's hope for the best. Also, some of them could be in a bullet point form.

![A couch with an opened laptop near the edge. The background shows a tv on a white desk.](couch-laptop.jpg)

<p><sub><sup>No, that's not my couch. Photo by <a href="https://unsplash.com/@ultralinx">Oliur Rahman</a> on <a href="https://unsplash.com/photos/U6s5gwdkQBk">Unsplash</a>.</sup></sub></p>

#### Morphlog

The current project is [morphlog](https://github.com/kriswep/morphlog), an app for helping developers write changelogs outside of the usual version control workflow. The plan is to enable teams writting down changes, eventually link them to some issues and create releases.

Choosen tech stack is [React](https://reactjs.org/) and [GraphQL](https://graphql.org/) powered by [Prisma](https://www.prisma.io/). You see, the current hip stack, this is a developers' side project. Well, I actually really like it for now.

I started the project in January 2018, quickly building out the core features. Until now, one can signin, create projects and write the changes. We also locked down the GraphQL API with a pretty straightforward [permission pattern](https://github.com/kriswep/morphlog/blob/6141bb0df031bdc2d6b14133c9b353ecd597d9f4/src/utils/permissions.ts). After some trial and error, I settled for [Semantic UI React](https://react.semantic-ui.com/) as the ui layer. This could change any time.

During the last weeks I worked mostly on two things. Firstly, I brought up test coverage on the server and the client side. Yes, I did start untested, but have reached a pretty good level of testing now. Secondly, since the client side data management layer of choice, [Apollo](https://www.apollographql.com/), released a [new version](https://dev-blog.apollodata.com/introducing-react-apollo-2-1-c837cc23d926) last week, this clearly had to be updated.

Those, who follow that project, know that they introduced a new and hot [render props](https://reactjs.org/docs/render-props.html) API. Although that is completly optional, I changed my components over this weekend. Doing that started out a little confusing (there are a lot of brackets of all kind), but once you got the hang of it... I found it to be a pretty nice pattern to not wrap the whole component in a render prop. For example, you can only wrap your button in a Mutation component and still get your mutation function to call.

That's it for know, feel free to pull down [morphlog](https://github.com/kriswep/morphlog), take a look and let me know your thoughts. About the project or about this series!
