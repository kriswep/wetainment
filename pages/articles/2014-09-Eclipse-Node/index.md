---
title: "Setting up Eclipse IDE for node.js development"
date: "2014-09-19T12:00:00.000Z"
layout: post
path: "/eclipse-for-node/"
category: "Development"
description: "How I set up the Eclipse IDE for node.js development"
---

**Tl;dr: Let’s setup our Eclipse for node.js with the help of the great [nodeclipse](http://www.nodeclipse.org/) project.**

We all know how helpful a good IDE setup is for your development workflow. One very common IDE for webworkers is Web-/PhpStrom from [JetBrains](http://www.jetbrains.com/). They have some great and handy tools, like node.js integration.

Well, I’m used to [Eclipse](https://www.eclipse.org/home/index.php) for years and since i’m eager to work on some node.js projects in my sparetime i had to set it up for node.js development.

My recommendation so far is: Use [nodeclipse](http://www.nodeclipse.org/).

Howto install:

It’s probably best to use the [Eclipse Java EE](https://www.eclipse.org/downloads/packages/eclipse-ide-java-ee-developers/lunar) version of eclipse, since it has elementary plugins like git support preinstalled. After starting Eclipse (you need a Java RE), just goto Help-Install New Software and add the nodeclipse update site [http://www.nodeclipse.org/updates/](http://www.nodeclipse.org/updates/) . There should be the ._Features Set_ group with a _Features included in Enide Studio_ option. Use that and feel free to check everything else you consider useful. I like the _StartExplorer Feature_ addon, which allows you to easily open your shell in the current path, very useful if you consider using grunt, which you should.

This setup allows you to create node.js project with New-Project-Nodeclipse-Node.js Project, as well as debugging of your node.js server component.

<sub><sup>Side: This article was originally published at [Medium](https://medium.com/@kriswep/how-i-enabled-http2-on-my-vserver-and-so-can-you-ce91bdc5a959).</sup></sub>