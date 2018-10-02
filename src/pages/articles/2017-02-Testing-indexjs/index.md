---
title: 'Unit testing a React index.js file'
date: '2017-02-19T12:00:00.000Z'
layout: post
path: '/testing-indexjs/'
category: 'Testing'
description: 'Writing unit tests for your React index.js file can be a little tricky. Read on how I did it lately...'
author: '@kriswep'
readNext: '/articles/2017-03-Tree-shaking/'
issueNumber: 9
---

#### with Create React App and Jest

**Tl,dr: Unit testing in JavaScript can be an difficult art. To test my React index.js component I had to use a neat trick, which I want to share here. You should just read it :)**

In a recent JavaScript side project of mine I used [React](https://facebook.github.io/react/),
more specificlly [Create React App (CRA)](https://github.com/facebookincubator/create-react-app).
CRA sets you up with [Jest](https://facebook.github.io/jest/) as a testing platform, which I enjoyed using.
That's mostly because a lot of things work out of the box and you can start quickly. Also their watch CLI is awesome.

However, I struggled with writing unit tests for the index.js start file. That's that file which imports your App component
and renders it to the DOM, something like that:

```javascript
// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
```

Well, not a lot is happening here, so I wanted to just have a smoke test for that. A smoke test basically checks
if the component crashes or not. My plan was to import that index file,
jsonify it and do a snapshot test with it. For those who don't know,
snapshot testing checks if a string is the same as before after your changes.
It's super simple in Jest. Read more [here](https://facebook.github.io/jest/docs/snapshot-testing.html#content).

Now the problems started. As you might see, index.js doesn't
really export something testable, like a function. Instead, it renders
to the DOM. In a first try, I imported the index component to my test file,
JSON stringifed and snapshot tested it. Like so, better don't try that at home:

```javascript
// index.test.js
import Index from './index.js';

it('renders without crashing', () => {
  expect(JSON.stringify(Index)).toMatchSnapshot();
});
```

BUT... `TypeError: Converting circular structure to JSON`.
That was frustrating, especially since I knew the index code worked quite well.
Ok, long story short, I messed with that, googled it, debugged it, lost almost my mind and
found out, that there is a \_reactInternalInstance property in that component, which we cannot stringify.
Hmm, I ended up with that (you could almost try this at home):

```javascript
// index.test.js
import Index from './index.js';

it('renders without crashing', () => {
  expect(
    JSON.stringify(
      Object.assign({}, Index, { _reactInternalInstance: 'censored' }),
    ),
  ).toMatchSnapshot();
});
```

That circular thing is gone, which is great, progress, victory? Sadly not quite.
`Invariant Violation: _registerComponent(...): Target container is not a DOM element.`
Yeah, fair enough, I wanted to render to an elemnet with id root,
which I didn't have in my test environment, got it. After giving it
a little thougt I ended up with changing the index component.

```javascript
// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

export default ReactDOM.render(
  <App />,
  document.getElementById('root') || document.createElement('div'),
);
```

Give me a break, that does not really hurt in production and the test
passes fine. Green, I have a snapshot and will be notified when the index component
crashes due to me doing stupid things in the future.

If you do that yourself, you could be alright or you could meet additional problems based on your environment.
I hope you don't but if you're unlucky I would recommend you trying out shallow rendering with
[enzyme](https://github.com/airbnb/enzyme) from airbnb and [enzyme-to-json](https://www.npmjs.com/package/enzyme-to-json) for snapshot testing.

If this helped you out, you have a better method of testing a React
index.js component, or you think that's really terrible,
feel free to let me know on my [twitter @kriswep](https://twitter.com/kriswep).
