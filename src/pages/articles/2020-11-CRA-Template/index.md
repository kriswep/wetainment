---
title: 'Write your own Create React App template'
date: '2020-01-12T20:00:00.000Z'
layout: post
path: '/articles/create-react-app-template/'
category: 'React'
description: 'Create React App can bootstrap your React applications. Nowadays, you can even use a template to quickly start your projects with your preferred stack. Learn how to write your own template.'
author: '@kriswep'
readNext: '/articles/hasura-impression/'
issueNumber: 26
---

### Detailed Guide to creating your own Create react App template

**Tl,dr: Since December '19 [Create React App](https://github.com/facebook/create-react-app) (also known as CRA) allows you to write custom templates. That can help you to quickly create projects with your preferred stack. Templates can be published as npm modules and are used by project creation.**

TODO:

- Using local templates
- use npm namespaces

#### Motivation

CRA (Create React App) is a tool from Facebook helping you to write modern React applications, without having to worry about configuring the dev environment. Up until recently, they created a small 'Hello World' like application to help getting you started. You had to install most of the further libraries you wanted to use. Think of adding a CSS-in-JS styling library, your State Management solution and the like.

Recently, they added the possibility to write and use your own custom template. This allows you, to start your CRA project with exactly the stack you prefer and go from there. They can be used with `npx create-react-app your-app --template your-published-template`

Take a look at the two official templates in their repo for inspiration: [CRA template](https://github.com/facebook/create-react-app/tree/master/packages/cra-template) and [CRA template typescript](https://github.com/facebook/create-react-app/tree/master/packages/cra-template-typescript).

The official [documentation](https://create-react-app.dev/docs/custom-templates) ist still kind of barebones, but will give you a good overview

![Cranes on top of big building under construction.](cra-template.jpg)

<p><sub><sup>Start building your next React project. Photo by <a href="https://unsplash.com/@danist07">贝莉儿 DANIST</a> on <a href="https://unsplash.com/photos/8Gg2Ne_uTcM">Unsplash</a>.</sup></sub></p>

#### What's needed

A Create React App custom template is a module on npm which has to use a certain folder structure:

```plain
your-app/
  README.md
  template.json
  package.json
  template/
    README.md
    gitignore
    public/
      index.html
    src/
      index.js
```

The `template.json` file contains the dependencies as well as potential new scripts for the created projects. The `/template` folder basically becomes the created application, it will be copied during the initialisation phase of Create React App.

Custom templates also have to follow a certain naming convention, they have to use the format `cra-template-[your-custom-template]`. This comes in the `package.json`. Quite long? Luckily, we can omit the `cra-template` prefix and just use the `your-custom-template` name in the CRA command, like in `npx create-react-app your-app --template your-custom-template`.

Did you note the missing dot before the `template/gitignore` file? This is on purpose, the dot will be added by CRA. They also switch all occurrences of `npm run` with `yarn` in your scripts and Readme, if you are using yarn.

Also note that you can add more files and dependencies to your template project as you wish. Keep in mind, that everything in `/template` will be part of the created project, everything else not.

#### Bootstrap your new template

Alright, time to see how to write our own template.

To start writing a custom Create React App template I find it easiest to bootstrap it with CRA itself.
