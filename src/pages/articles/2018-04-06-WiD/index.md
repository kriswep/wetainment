---
title: "WiD - cypress e2e testing"
date: "2018-03-27T12:00:00.000Z"
layout: post
path: "/wid-2018-03-27/"
category: "WiD"
description: "TBD"
author: "@kriswep"
readNext: "/wid-2018-03-27/"
issueNumber: 19
---

#### Testing morphlog

**Tl,dr: Hey, my name is Benjamin and here I write about the things I made during the last week (or more). This mostly involves coding projects in my spare time. Today, let's talk about [morphlog](https://github.com/kriswep/morphlog).**

Difficulties:
 - cypress can read write to localstorage, but only in custom commands, not in test files...
 - starting clean server
 - Different prt on circleci for client server

![A couch with an opened laptop near the edge. The background shows a tv on a white desk.](couch-laptop.jpg)

<p><sub><sup>No, that's not my couch. Yes, I write this on a couch. Photo by <a href="https://unsplash.com/@ultralinx">Oliur Rahman</a> on <a href="https://unsplash.com/photos/U6s5gwdkQBk">Unsplash</a>.</sup></sub></p>

#### Morphlog

