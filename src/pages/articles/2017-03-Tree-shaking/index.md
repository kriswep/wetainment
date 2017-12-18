---
title: "Quick tip: Tree Shaking"
date: "2017-03-12T12:00:00.000Z"
layout: post
path: "/tree-shaking/"
category: "Performance"
description: "Setting up tree shaking with webpack2, Babel and ES2015 modules"
author: "@kriswep"
readNext: "/comment-system/"
issueNumber: 10
---

#### with webpack v2.2, Babel and ES2015 modules

**Tl,dr: To setup tree shaking you can use the recently releases [webpack version 2+](https://webpack.js.org/) and use ES2015 modules. If you're using [babel](https://babeljs.io/) to transpile, disable its ES2015 module transformation to commonjs.**

This weekend I set down and updated my small [modern Javascript boilerplate](https://github.com/kriswep/modern-modular-javascript) code to using webpack2. One of te reasons to do so, was being able to use tree shaking. In case you're not familiar, tree shaking as it's core eliminates unused code from the final build output.

An seemingly easy way to set that up is to use wepack v2+ and ES2015 modules.
These modules are static and the prerequisite for tree shaking with webpack.
That's the problem when using babel and babel-loader in your webpack config. Chances are, you're using a preset which includes the `transform-es2015-modules-commonjs` presets. Nowadays, this can be prevented by setting the `modules: false` option in `.babelrc` ~~and in the webpack.config.js babel-loader configuration. Yes, in both places!~~ **UPDATE:** Turned out, I was wrong here. If you don't specify the optin in your webpack conf, it is sufficent to specify it in .babelrc. But I couldn't make it work the other way round...

**`.babelrc`**

```JSON
{
  "presets": ["env", {
    "modules": false
  }]
}
```

**`webpack.config.js` (excerpt)**

```JavaScript
// ...
module: {
  rules: [
    {
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
      //UPDATE: This is not needed
      //options: {
      //  presets: [
      //    ['env', { modules: false }],
      //  ],
      //},
    },
  ],
},
// ...
```

Also make sure to use the `-p` flag in your webpack build call, which enbales minification: `"build": "webpack -p"`

As a reference, feel free to check out my [package.json](https://raw.githubusercontent.com/kriswep/modern-modular-javascript/70d17eee2c6456f8639ea1db3de4bd596f5af374/package.json) (which includes my babel configuration) and [webpack.config.js](https://raw.githubusercontent.com/kriswep/modern-modular-javascript/70d17eee2c6456f8639ea1db3de4bd596f5af374/webpack.config.babel.js).

If this helped you out, or you're facing problems getting tree shaking to work,
feel free to let me know on my [twitter @kriswep](https://twitter.com/kriswep).
You may also be interested in reading the webpack documentation about [tree shaking](https://webpack.js.org/guides/tree-shaking/), or this helpful [article](http://www.2ality.com/2015/12/webpack-tree-shaking.html) by Axel Rauschmayer.
