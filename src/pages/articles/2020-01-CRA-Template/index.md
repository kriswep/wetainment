---
title: 'Write your own Create React App template'
date: '2020-01-12T20:00:00.000Z'
layout: post
path: '/articles/create-react-app-template/'
category: 'React'
description: 'Create React App can bootstrap your React applications. Nowadays, you can even use a template to quickly start your projects with your preferred stack. Learn how to write your own template.'
author: '@kriswep'
readNext: '/articles/2019-04-Hasura-Testdrive/'
issueNumber: 25
---

### Detailed Guide to creating your own Create react App template

**Tl,dr: Since December '19 [Create React App](https://github.com/facebook/create-react-app) (also known as CRA) allows you to write custom templates. That can help you to quickly create projects with your preferred stack. Templates can be published as npm modules and are used by project creation.**

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

#### Create your new template

Alright, time to see how to write our own template.

To start writing a custom Create React App template I find it easiest to bootstrap it with CRA itself. So let's `npx create-react-app cra-template-your-custom-template` and CRA will do its' thing (substitute your-custom-template with however you want to name your project). We get the default template bootstrapped.

Now the fun part begins. You can remove stuff you never use (like the rotating logo) and add all your preferred libs, as you would normally. Want a router? A CSS-in-JS lib? A state management tool? Animation? Something? Let's install whatever you want from new projects and import it in your application. My recommendation is to do that in the `src` folder. Doing that, you can test and run your app normally with `npm run test` and `npm run start`.

As soon as you consider your project to be at a nice 'starting point' for new ones, you have to make it a template. For that start by creating the `template.json` file at your project root:

```JSON
{
  "dependencies": {
    "styled-components": "^4.4.1"
  },
  "scripts": {
    "custom-start": "npm run start"
  }
}
```

Copy all dependencies you need from your `package.json` into the dependencies field, and all custom scripts into the scripts field. All the dependecies here will be installed on the bootstrapped projects. `react`, `react-dom` and `react-scripts` are CRAs' default dependencies, you don't have to include them. Right now, devDependencies are not supported. If you don't have any new dependencies or scripts you can omit the corresponding block. But make sure you add at least an empty `template.json` file (with content `{}`).

Then, create the `/template` folder and copy your `/src` and `/public` folder into it, as well as the `.gitignore` (and remove the dot from `gitignore` in the template folder). You should also consider adding a `/template/README.md`, this will become the initial README of the created projects.

Lastly, we have to make some changes to our `package.json` file. At the very least, make sure that `name` starts with `cra-template-`, remove the `private` field and add `"main": "template.json",`. Without these, the template creation will fail. You may also consider adding more fields you would set for an npm package, like `author`, `repository`, `description` etc.

Publishing to npm is a topic of its own. To keep the scope small: After registering at npm and authorising on the CLI, you could publish the project with `npm publish --access public`.

Wow, congratulations, you sohuld now have created and published a Create React App custom template. You can know bootstrap a new React application with `npx create-react-app your-app --template your-custom-template`.

Enjoy.

#### Tips

You can also use Create React App with a local template (on your filesystem). This is useful for development of your template, or if you don'T want to publish it. Use `npx create-react-app your-app --template file:.` in your template root folder.

You can also use [npm scopes](https://docs.npmjs.com/about-scopes) to namespace your template. Then you have to prepend your package name with your scope `@your-scope/cra-template-your-custom-template`. You can still omit `cra-template` from the Create React App command like in `npx create-react-app your-app --template @your-scope/your-custom-template`.

Hope this helps you to create your own CRA template. Feel free to let me know about your templates or if you get stuck along the way. [Tweet me](https://twitter.com/kriswep) or leave a comment.
