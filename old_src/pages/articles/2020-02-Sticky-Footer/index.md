---
title: 'Flexing your HTML footer to the page bottom'
date: '2020-02-02T20:00:00.000Z'
layout: post
path: '/articles/sticky-html-footer/'
category: 'CSS'
description: "When adding a footer to yout HTML page you probably want to have it at the bottom. But how do you achieve that, if the page content doesn't fill the whole page? CSS flexbox to the rescue!"
author: '@kriswep'
readNext: '/articles/2020-03-Build-An-App-01/'
issueNumber: 26
---

## Howto make your footer stick to the bottom with flexbox

**Having a footer at the bottom of your HTML page can be very useful. Traditionally, forcing the footer down there was a quite hard task if the page content didn't fill the whole browser height. But nowadays using flexbox and some auto-margin can save the day.**

When designing a HTML page you often want to add a footer with some additional but secondary information. Logically, the footer should be at the very bottom of the page. One could just add the footer markup as the last piece in the document and call it a day. That'll work, mostly. But what happens when the page content doesn't fill the entire height of your users screen? Well, the footer be rendered directly after your content and hang somewhere in the middle of the screen. That's not what we wanted. Luckily, flexbox can save the day here, without relying on obsure hacks!

Want to see the code and end result right away? Here's a [codesandox](https://codesandbox.io/s/sticky-footer-ropgr).

<iframe
  src="https://codesandbox.io/embed/sticky-footer-ropgr?codemirror=1&view=split&module=styles.css&highlights=4,5,6,10"
  style="width:100%; height:400px; border:0; border-radius: 4px; overflow:hidden;"
></iframe>

Let me walk you through that. We start with a minimal HTML setup, just to have something to work with.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Sticky Footer</title>
    <meta charset="UTF-8" />
    <link rel="stylesheet" href="./styles.css" />
  </head>

  <body>
    <section>
      <h1>🔥Hello Footer down there🔥</h1>
      <p>
        ⬇️This content does not fill a whole page height. The footer belongs
        down there. ⬇️
      </p>
    </section>
    <footer>🔥I'm the footer. My margin pushes me down.🔥</footer>
  </body>
</html>
```

All we have here is a short main section and a footer. This will create the undesired effect of having a floating footer in the middle of your screen. To make that footer sticky, we need some CSS.

### Making the footer sticky

We'll use flexbox and margin to push the footer at the bottom of the screen.

- Set the container to `display: flex;`. The container is the body in our example.
- Change the containers' `flex-direction: column`. This lets the footer flow below the content.
- Give the container full height with `min-height: 100vh;`. The container is now large enough, but the footer still floats somewhere in the middle.
- Finally, give the footer enough margin with `margin-top: auto;`. That pushes the footer down to the bottom.

That's it, the footer will be at the pages' bottom, even with small content. Note that when the content gets larger than the users screen, the footer will flow normally at your pages bottom as well, no extra work there.

Here's the relevant CSS.

```CSS
/* Use flex and set auto margin */
body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

footer {
  margin-top: auto;
}
```

Thanks to webflow for the [video inspiration](https://youtu.be/NSnx-2Ztyfo) to this article.

Hope this helps you to create your next HTML layout. Follow me on [twitter](https://twitter.com/kriswep) or leave a comment.
