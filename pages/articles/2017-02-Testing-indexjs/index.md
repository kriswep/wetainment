---
title: "Unit testing a React index.js file"
date: "2017-02-19T12:00:00.000Z"
layout: post
path: "/testing-indexjs/"
category: "Testing"
description: "Writing unit tests for your React index.js file can be a little tricky. Read on how I did it lately..."
---

#### with Create React App and Jest

**Tl,dr: Unit testing in JavaScript can be an art. To test my React index component I had to use a neat trick, which I want to share here.**

In a recent side project of mine I used [React](https://facebook.github.io/react/), 
more specificlly [Create React App (CRA)](https://github.com/facebookincubator/create-react-app). 
CRA sets you up with [Jest](https://facebook.github.io/jest/) as a testing platform, which I enjoyed using. 
That's mostly because a lot of things work out of the box and you can start quickly. Also their watch CLI is awesome.