---
title: 'Tailwind CSS in JS'
date: '2019-01-18T20:00:00.000Z'
layout: post
path: '/articles/tailwind-css-in-js/'
category: 'CSS'
description: 'The improved way of adding the Tailwind CSS Framework in a Create React App using CSS in JS solutions and a babel-macro!'
author: '@kriswep'
readNext: '/articles/2018-02-Revealing-Prisma-GraphQL-Magic/'
issueNumber: 23
---

#### Adding Tailwind to a Create React App with the help of styled-components and a babel-macro

**Tl,dr: We can setup Tailwind in a Create React App V2. Therefore we don't even need to eject or manipulate any build task. Today, you can use a babel-macro and most CSS in JS solutions. Take a look at this demo [React project](https://github.com/kriswep/cra-tailwindcss-in-js)**

Tailwind is a utility css framework, which gives you specific, rememberable css classes to set, instead of writing plain css rules. It aims to help you build rich user interfaces fast. One can declare the needed utilities by editing a config JavaScipt file. Find out more in their [docs](https://tailwindcss.com/docs).

Another solid approach to write your css in modern React components is CSS in JS. This term describes different set of tools allowing you to write CSS directly in your JavaScript files, colocating the styling to your components. One of the more popular CSS in JS frameworks in the React ecosytem is [styled-components](https://www.styled-components.com/).

So which approach to use? Why not both at the same time?
That would give us the fast tailwind experience, while feeling more natural to the React component model. It also allows you to easily fall back to plain CSS via styled-components, if you need to.

![Modern wind mills on a field. Metaphor for wind like in Tailwind.](wind-mills.jpg)

<p><sub><sup>Not a official logo, neither of Tailwind CSS nor React. But kinda windy. Photo by <a href="https://unsplash.com/@rawfilm">RawFilm</a> on <a href="https://unsplash.com/photos/ihMzQV3lleo">Unsplash</a>.</sup></sub></p>

#### Setting a React App with Tailwind up

To get started we want to use [Create React App](https://facebook.github.io/create-react-app/) the one command solution to set up a modern React dev environment. The good news is, even if Create React App does not allow you to modify its build setup, we can integrate tailwind and styles-components without ejecting and therefore without leaving the official supported paths.

To get started, open a terminal and create a new app.

```bash
npx create-react-app cra-tailwindcss-in-js
cd cra-tailwindcss-in-js
```

We'll need some additional dependecies, so go ahead and install them right away.

```bash
npm i -D tailwindcss tailwind.macro
npm i -S styled-components
```

Tailwind need a JavaScript configuration file to know which utilities to create. Luckily, it comes with a command to generate a good default setup.

```bash
./node_modules/.bin/tailwind init ./src/tailwind.js
```

You may have noticed that we generated this file in the `./src` subfolder. This is where all of our source files live, and also Create React App complains, if we import from other locations.
We installed `tailwind.macro` before. In order for that to pick up our configuration file, add a `babel-plugin-macros.config.js` in projects' root folder.

```javascript
// babel-plugin-macros.config.js
module.exports = {
  tailwind: {
    config: './src/tailwind.js',
  },
};
```

That's it for the confuguration. So, what did we get know, how to use tailwind in our fancy new React App? Well, like so, with the help of our macro.

```javascript
// App.js
import React, { Component } from 'react';
import styled from 'styled-components/macro';
import tw from 'tailwind.macro';

// use tailwind classes the styled way
const Header = styled.header`
  ${tw`bg-black min-h-screen flex flex-col items-center justify-center text-xl text-white`};
`;

class App extends Component {
  render() {
    return (
      // via fancy css prop
      <div css={tw`text-center`}>
        <Header>
          <p css={tw`text-blue-light`}>
            Using <code>tailwind</code> and <code>styled-components</code>{' '}
            together.
          </p>
        </Header>
      </div>
    );
  }
}

export default App;
```

Beautiful, right? We can even use the fancy and new [css prop](https://medium.com/styled-components/announcing-native-support-for-the-css-prop-in-styled-components-245ca5252feb), which is a quite direct way to style your components.

#### But, how does it work?

In its latest version, v2, Create React App added support for [babel-plugin-macros](https://babeljs.io/blog/2017/09/11/zero-config-with-babel-macros). That allows us to modify some part of our builds. Even luckier, there is a [tailwind-macro](https://github.com/bradlc/babel-plugin-tailwind-components), which we use here. That is what gives us the `tw` function thing we used in the code example. And there's also a [macro for styled-components](https://www.styled-components.com/docs/tooling#babel-macro), giving us style minification, a better debugging expereience and the css prop.

I wrote about [Tailwind and React](https://wetainment.com/create-react-app-tailwind-css/) before, but the seutp described here has the significant benefit of only adding the used CSS to your build. The older article required you to set some task up outside your Create React App tasks.

As mentioned, an inspirational project is open sourced on GitHub, so [see for yourself](https://github.com/kriswep/cra-tailwindcss-in-js)! For any question or other discussions, please reach out down there in the comments or on my [twitter](https://twitter.com/kriswep).
