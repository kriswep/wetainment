---
title: "Integrating Tailwind CSS in Create React App"
date: "2017-11-13T12:00:00.000Z"
layout: post
path: "/create-react-app-tailwind-css/"
category: "CSS"
description: "Add the Tailwind CSS utility-first Framework in a Create React App environment, without ejecting from CRA!"
author: "@kriswep"
readNext: "/tree-shaking/"
---

**Tl;dr: Tailwind CSS is a utility-first CSS Framework. It is realised as a PostCSS plugin, which can't be easily add to a Create React App environment. Luckily, since Tailwind provides a CLI as well, we can add that as a script running right before CRA's `react-scripts`. You can find the code in this repo(TODO)**

[Tailwind CSS](https://tailwindcss.com/) is a newly released utility-first CSS Framework. It's value proposition is basically, that it provides a lot of different utility CSS classes, instead of whole components. These classes are highly composable and allow you to build components and full fledged designs with them. You can find more informations and explanations on their website, or by listening to the [Fullstack Radio podcast 76](http://www.fullstackradio.com/76), which I enjoyed quite a lot.

![Kind of related motiv showing wind turbines and a highway, giving you an impression of speed and wind](wind-teaser-image.jpg)
<p>
<sub><sup>Kind of related image showing wind turbines. Photo by Andrea Boldizsar on Unsplash</sup></sub></p>

After listening to the mentioned podcast I decided to give tailwind a try in a React App. Whenever I start tinkering with a React App, I reach for [Create React App](https://github.com/facebookincubator/create-react-app). That's basically a CLI, which creates a React environment with no build configuration.

Ok, what would installing Tailwind mean then? So according to their [documentation](https://tailwindcss.com/docs/installation) there are three ways of doing so. The first is to add a css file from a CDN into your html. That works in our CRA setup, but you loose the nice customization options Tailwind offers.

Their recommended options is to add Tailwind CSS as a PostCSS plugin to your build chain. Although that's surely a great option for many environments, it's not possibly in a Create React App project. Their key benefit is, that they do all the configuration behind the scenes and that's great. You could eject from CRA customize PostCSS for yourself. But that would mean, loosing the easy upgrade path of CRA. There seems to be a way of adding PostCSS plugins via a wrapper as described [here](https://github.com/facebookincubator/create-react-app/issues/2032#issuecomment-302932310), but that is not officially supported.

Luckily, the third installation option is a CLI-interface. Adding that to yout npm scripts allows you to customize the CSS Framework, and benfit from CRA's start and build scripts.

You can find a newly created CRA project with Tailwind CSS integration right [here](TODO).

Let's set that up and start with Create React App. In case you don't have it already installed (or use the opportunity to upgrade), install it as per their [docu](https://github.com/facebookincubator/create-react-app#getting-started) - Thats basically running `npm install -g create-react-app`. Create a new project like that:
```bash
# Replace cra-tailwindcss with whatever you want to name your project
create-react-app cra-tailwindcss
# Wait for it to finish
cd cra-tailwindcss
```
In that newly generated folder is your brand new React App project, feel free to try it out by running `npm run start`.
Next step is adding Tailwind CSS by the following in your project's root directory:
```bash
# install tailwind to your project
npm install tailwindcss --save-dev
# create a tailwind.js configuration file
./node_modules/.bin/tailwind init
```
The last command generates the magic configuration file. This is one of the major benefits of Tailwind CSS. Take a moment and read through that file, the available options are commented right there. You can also read more about the [configration options](https://tailwindcss.com/docs/configuration).

Create React App includes a global css file under `./src/index.css`. Delete this file, as this is there we let Tailwind CSS generate it's utility classes to. Now create a new file called `./src/index.tailwind.css` with the following content:
```CSS
@tailwind preflight;

@tailwind utilities;
```
These are Tailwind's directives, which tells it, what to include. Again, there is more information in their [docs](https://tailwindcss.com/docs/installation#3-use-tailwind-in-your-css).

The last step is to add the tailwind build command in your projects' `package.json`, replace the start and build task with the following
```JSON
  "scripts": {
    "start":
      "tailwind build ./src/index.tailwind.css -o ./src/index.css && react-scripts start",
    "build":
      "tailwind build ./src/index.tailwind.css -o ./src/index.css && react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject"
  },
```

`npm run start` and we are ready to use the Tailwind CSS utility classes in all our react components.

The above suggested setup runs the tailwind command only when running the start command, not on every file changes. The react-scripts however still run on change, which allows you to add the classes and see the outcome immediately.

Not genereting the css all the time is actually not a problem, since you would normall not write in that css, you would only add the classes to your components.

Hope that setup allows you to try using Tailwind CSS and see, how it works for you.