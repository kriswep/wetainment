---
title: 'GitComment'
date: '2017-12-17T22:00:00.000Z'
layout: post
path: '/comment-system/'
category: 'Meta'
description: "Recently, I added a new comment system on this blog, leveraging GitHub issues as a 'backend' for the comments. Would love you writing something there."
author: '@kriswep'
readNext: '/articles/2020-01-CRA-Template/'
issueNumber: 12
---

#### A new comment system on this blog

**Tl,dr: A new comment system, backed by GitHub issues, was added to this blog. I called it GitComment. You, dear reader, can write comments directly on this blog, while they are posted in a GitHub issue thread and displayed right here as well. Scroll down and try it!**

This blog is a pregenerated, static html website. That means, every page you visit here is basically plain old html, there is no server rendering or database action happening. That's a more and more popular approach to writing blogs and websites in general. One downside is, that we need a special solution for adding dynamic content, like comments. This weekend, I added a comment system here, and would like to share some details with you.

By the way: This blog is completely open sourced on [GitHub](https://github.com/kriswep/wetainment), you can take a look anytime.

![A calligraphy pen on top of a bright scetchbook on a very dark, wooden desk.](writing.jpg)

<p>
<sub><sup>A pen on top of a sketchbook. Are you inspired to write something? Do it down there in the comments section! Photo by <a href="https://unsplash.com/@moonshinechild">Kira auf der Heide</a> on <a href="https://unsplash.com/photos/9P7WD1dU5VQ">Unsplash</a></sup></sub></p>

When adding a comment system people often reach for third party solutions. That approach may have some downsides of its own, like longer loading times, unfitting UIs or, worst, added ads. But what else could you do?

I stumpled upon the idea of using GitHub issues as a backend for comments some time ago. That means, one can create a issue on GitHub, connect it to any of post/page, and all responses added in there are considered as a comment. This should work pretty well for a tech/coding orientated blog like mine, as most of my readers will have a GitHub account already.

In order to make commenting with this approach here more usable, I created [GitComment](https://github.com/kriswep/gitcomment), a library written in [React](https://reactjs.org/). It allows you to write and read comments directly on this page by leveraging GitHubs' API to access predefined issue threads.

**❤️❤️❤️ Please try it out below ❤️❤️❤️!** You can read existing comments without authorization (as long as GitHub doesn't rate limit you). Writing would require you to authentice via GitHub, which can be done nicely by using the provided button. Your comments will then be posted as answers to the connected issue in GitHub, with your username there.

Formatting comments is not supported, at least for now.

I intend to release GitComment to the public. As of now, it is available and [open sourced](https://github.com/kriswep/gitcomment). But I need to add some final touches and a lot of documentation, before it can be released as a v1.0. Shameless plug, again, sorry, but it would motivate me a lot, if people would use my comment system down there ⬇.
