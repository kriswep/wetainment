---
title: "WiD - Universal React Components"
date: "2018-06-30T20:00:00.000Z"
layout: post
path: "/wid-2018-06-30/"
category: "WiD"
description: "Rendering React Components on native devices and on web. Reuse as much or little as you want."
author: "@kriswep"
readNext: "/wid-2018-04-11/"
issueNumber: 20
---

#### Universal React Components

**Tl,dr: Took a closer look at React Native. Ended with an aproach to render the same React components on native and on web. Call it React Universal Components.**

Time for an update: Took some time off of my [morphlog](https://github.com/kriswep/morphlog) project, will come back to that. Instead, I played with [React Native](https://facebook.github.io/react-native/). After seeing a great [React Europe talk](https://www.youtube.com/watch?v=D1NkyO-J6B0) regarding rendering React components to native, web and other React targets, my interest was sparked.

![Many puzzle pieces from above.](puzzle.jpg)
<p><sub><sup>Sometimes you have to solve a puzzle. Photo by <a href="https://unsplash.com/@sloppyperfectionist">Hans-Peter Gauster</a> on <a href="https://unsplash.com/photos/3y1zF4hIPCg">Unsplash</a>.</sup></sub></p>

#### Code?
Along the way, a kind of [bootstrap project](https://github.com/kriswep/universal-react) was created and open sourced.
It is set up as a Lerna monorepo, with a `universal-components`, a `spa` (single page app for web) and `native-app` package. The latter two were bootstrapped with `Create React App` and `Create React Native App`, so we are using established best dev environments.
Right now, we can render reusable components from the `universal-components` package, to both our targets, mobile and web.

### Interesting points
Especially rendering to mobile, with the help of [Expo](https://expo.io/) and without any traditional native setup is awesome. No Android Studio or XCode is required.

A trip wire in this setup is reusing existing 3rd party React Native components. These are often not transpiled, so we need to do that ourselves for the web env. For that, I patched them using [patch-package](https://github.com/ds300/patch-package), which allows to 'fix' npm dependencies reliable in our `node_modules`.

As mentioned, the project is open sourced an on GitHub, so [see for yourself](https://github.com/kriswep/universal-react)! If you are interested in a deeper writeup, or have any other question, please reach out down there in the comments, or on my [twitter](https://twitter.com/kriswep).