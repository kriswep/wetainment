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

**Tl,dr: We can setup Tailwind in a Create React App V2. Therefore we don't need to eject or manipulate any build task. Today, you can use a babel-macro and most CSS in JS solutions.**

Tailwind: utility css, you get useful classnames to use, based on a config file you adjust ->Link to tailwind

Styled-Components: Popular css-in-js library, write css componente based

->combine that

![Modern wind mills on a field. Metaphor for wind like in Tailwind.](wind-mills.jpg)

<p><sub><sup>Not any official logo. Photo by <a href="https://unsplash.com/@rawfilm">RawFilm</a> on <a href="https://unsplash.com/photos/ihMzQV3lleo">Unsplash</a>.</sup></sub></p>

#### Setting Up

Coming along, see https://github.com/kriswep/cra-tailwindcss-in-js

```bash
npx create-react-app cra-tailwindcss-in-js
cd cra-tailwindcss-in-js
# install further dependencies
npm i -D tailwindcss tailwind.macro
npm i -S styled-components
```

configure tailwind
`./node_modules/.bin/tailwind init ./src/tailwind.js`

add a `babel-plugin-macros.config.js` in project root, since CRA needs the tailwind config file under the `src` folder.

```javascript
// babel-plugin-macros.config.js
module.exports = {
  tailwind: {
    config: './src/tailwind.js',
  },
};
```

Use like so

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

Beautiful, right?

#### But, how does it work?

with babel-macro

As mentioned, an inspirational project is open sourced an on GitHub, so [see for yourself](https://github.com/kriswep/cra-tailwindcss-in-js)! If you are interested in a deeper writeup, or have any other question, please reach out down there in the comments, or on my [twitter](https://twitter.com/kriswep).
